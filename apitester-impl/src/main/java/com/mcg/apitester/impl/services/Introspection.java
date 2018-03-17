package com.mcg.apitester.impl.services;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.io.ByteArrayOutputStream;
import java.lang.annotation.Annotation;
import java.lang.reflect.Array;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.TypeVariable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.SortedSet;
import java.util.TreeSet;

import org.apache.commons.io.IOUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.DefaultParameterNameDiscoverer;
import org.springframework.core.PrioritizedParameterNameDiscoverer;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.util.ClassUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ValueConstants;
import org.springframework.web.multipart.MultipartFile;

import com.mcg.apitester.api.annotations.ApiDescription;
import com.mcg.apitester.api.annotations.ApiError;
import com.mcg.apitester.api.annotations.ApiErrors;
import com.mcg.apitester.api.annotations.ApiHeader;
import com.mcg.apitester.api.annotations.ApiHeaders;
import com.mcg.apitester.api.annotations.ApiIgnore;
import com.mcg.apitester.api.annotations.ApiSecret;
import com.mcg.apitester.api.annotations.ParamType;
import com.mcg.apitester.impl.entities.ApiReturnStatus;
import com.mcg.apitester.impl.entities.FieldInfo;
import com.mcg.apitester.impl.entities.HeaderInfo;
import com.mcg.apitester.impl.entities.MethodInfo;
import com.mcg.apitester.impl.entities.ParameterInfo;
import com.mcg.apitester.impl.entities.TypeInfo;

public class Introspection {
	
	private static Log log = LogFactory.getLog(Introspection.class);

	
	private static Class<?> collClass = Collection.class;
	private static Class<?> mapClass = Map.class;
	private static Class<?> arrayClass = Array.class;
	
	
	private static String getShortName(Type t) throws ClassNotFoundException, LinkageError {
		Class<?> c = ClassUtils.forName(t.getTypeName(), null);
		return c.getSimpleName();
	}

	private static String getName(Type t) throws ClassNotFoundException, LinkageError {
		Class<?> c = ClassUtils.forName(t.getTypeName(), null);
		return c.getCanonicalName();
	}

	public static <T  extends Annotation> List<T> collectAnnotations(Class<?> c, Class<T> a) {
		List<T> d = new ArrayList<>();
		if(c==null) return d;
		T t = c.getAnnotation(a);
		if(t!=null) d.add(t);
		d.addAll(collectAnnotations(c.getSuperclass(),a));

		return d;
		
	}
	
	public static  <T  extends Annotation> List<T> collectAnnotations(Method m, Class<T> a) {
		List<T> d = new ArrayList<>();
		if(m==null) return d;
		T t = m.getAnnotation(a);
		if(t!=null) d.add(t);
		d.addAll(collectAnnotations(m.getDeclaringClass(),a));
		
		return d;
	}
	
	public static  <T  extends Annotation> List<T> collectAnnotations(Method m, Parameter p, Class<T> a) {
		List<T> d = new ArrayList<>();
		if(p==null) return d;
		T t = p.getAnnotation(a);
		if(t!=null) d.add(t);
		if(m!=null) {
			d.addAll(collectAnnotations(m,a));
		}
		return d;
	}
	
	public static List<HeaderInfo> getHeaderInfo(List<ApiHeaders> apiHeaders) {
		
		
		// de-duplicate shit
		SortedSet<ApiHeader> headers = new TreeSet<>(new Comparator<ApiHeader>() {
			@Override
			public int compare(ApiHeader o1, ApiHeader o2) {
				return o1.name().compareTo(o2.name());
			}
		});
		
		for (ApiHeaders hs : apiHeaders) {
			for(ApiHeader h : hs.value()) {
				if(!headers.contains(h)) headers.add(h);
			}
		}
		
		// translate shit
		List<HeaderInfo> out = new ArrayList<>();
		for(ApiHeader ah : headers) {
			HeaderInfo hi = new HeaderInfo();
			hi.setName(ah.name());
			hi.setDescription(ah.description());
			out.add(hi);
		}
		
		return out;
	}

	public static List<ApiReturnStatus> getApiReturn(List<ApiErrors> errors) {
		
		// de-duplicate shit
		SortedSet<ApiError> returns = new TreeSet<>(new Comparator<ApiError>() {
			@Override
			public int compare(ApiError o1, ApiError o2) {
				return o1.value().compareTo(o2.value());
			}
		});
		

		for (ApiErrors es : errors) {
			for(ApiError e : es.value()) {
				if(!returns.contains(e)) returns.add(e);
			}
		}
		
		// translate shit
		List<ApiReturnStatus> out = new ArrayList<>();
		for(ApiError ah : returns) {
			ApiReturnStatus rs = new ApiReturnStatus();
			rs.setName(ah.value().name());
			rs.setStatus(ah.value().value());
			rs.setDescription(ah.description());
			out.add(rs);
		}
		
		return out;
	}
	
	public static String getDescription(ApiDescription ad) {
		if(ad==null) {
		} else if(!StringUtils.isEmpty(ad.value())) {
			return ad.value();
		} else if(!StringUtils.isEmpty(ad.file())) {
			Resource r = new ClassPathResource(ad.file());
			try {
				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				IOUtils.copy(r.getInputStream(), baos);
				return new String(baos.toByteArray(),"utf-8");
			} catch (Exception e) {
				log.error("error reading documentation: "+ad.file(), e);
			}
		}
		return null;
	}
	
	
	public static Object getObject(TypeInfo info) throws ClassNotFoundException, LinkageError {

		log.debug(info.getType()+" // "+info.isArray()+"/"+info.isCollection());
		
		Object out = new Object();
		
		if(info.isLoop()) {
			out = "[REFERENCE LOOP: "+info.getTypeShort()+"]";
		} else if(info.getType().equals("java.lang.String")) {
			out = "a string";
		} else if (info.getType().equals("java.util.Date")) {
			out = new Date();
		} else if (info.isArray() || info.isCollection()) {
			out = Collections.singletonList(getObject(info.getTypeParameters().get(0)));
		} else if (info.isMap()) {
			Map<Object,Object> m = new HashMap<>();
			m.put(getObject(info.getTypeParameters().get(0)), getObject(info.getTypeParameters().get(1)));
			out = m;
		} else if (info.getType().equals("java.lang.Boolean") || info.getType().equals("boolean")) {
			out = true;
		} else if (info.getType().equals("java.lang.Integer") || info.getType().equals("int")) {
			out = 1;
		} else if (info.getType().equals("java.lang.Long") || info.getType().equals("long")) {
			out = Long.MAX_VALUE;
		} else if (info.getType().equals("java.lang.Double") || info.getType().equals("double")) {
			out = 0.003;
		} else if (info.getType().equals("java.lang.Float") || info.getType().equals("float")) {
			out = 0.003;
		} else if (info.getType().equals("java.lang.Character") || info.getType().equals("char")) {
			out = 'c';
		} else if (info.isFile()) {
			out = "[BINARY FILE]";
		} else if (info.isEnumeration()) {
			List<String> values = new ArrayList<>();
			for(Object o : ClassUtils.forName(info.getType(),null).getEnumConstants()) {
				values.add(((Enum<?>)o).name());
			}
			out = StringUtils.collectionToDelimitedString(values, " | ");
		} else {
			Map<String,Object> m = new HashMap<>();
			for(FieldInfo fi : info.getFields()) {
				m.put(fi.getName(),getObject(fi.getTypeInfo()));
			}
			out = m;
		} 
		
		return out;
		
	}
	
	
	public static List<Class<?>> findSuperclassCandidates(Class<?> clazz, boolean includeInterfaces) {
		List<Class<?>> out = new ArrayList<>();
		if(clazz!=null) {
			out.add(clazz);
			out.addAll(findSuperclassCandidates(clazz.getSuperclass(), includeInterfaces));
		}
		return out;
	}

	public static Method findMethod(Class<?> clazz, String name, Class<?>[] paramClasses) {
		for(Class<?> c : findSuperclassCandidates(clazz, false)) {
			try {
				log.info("checking class: "+c.getCanonicalName()+", "+name);
				Method m = c.getMethod(name, paramClasses);
				if(m!=null) {
					if(!m.isAnnotationPresent(ApiIgnore.class)) {
						return m;
					}
				}
			} catch (Exception e) {
				// continue
				log.error("error checking: ",e);
			}
		}
		return null;
	}

	
	
	private static TypeInfo getTypeInfoInternal(Type type, List<Type> v) throws ClassNotFoundException, LinkageError {

		TypeInfo ti = new TypeInfo();

		if(v.contains(type)) {
			
			ti.setType(getName(type));
			ti.setTypeShort(getName(type));
			ti.setLoop(true);
			return ti;
		}
		
		List<Type> visited = new ArrayList<>(v);
		
		if(type == null) {
			throw new RuntimeException("input type should not be null");
		} else if(type.getTypeName().equals(arrayClass.getName())) {
			// 
		} else if(type.getTypeName().equals(collClass.getName())) {
			//
		} else if(type.getTypeName().equals(mapClass.getName())) {
			//
		} else {
			visited.add(type);
		}
		
		log.debug("get type info (internal): "+type);
		
		List<TypeInfo> typeParameters = new ArrayList<>();
		
		Class<?> rawClass = null;
		
	 	if (type instanceof ParameterizedType) {
	 		
			//log.info("get type info (internal): "+type+" -- parameterized type");
			ParameterizedType pt = (ParameterizedType)type;
			
			log.debug(pt.getRawType());
			log.debug(pt.getActualTypeArguments());
			
			
			rawClass = ClassUtils.forName(pt.getRawType().getTypeName(),null);
			
			if(rawClass.isArray()) {
				
				ti.setArray(true);
				typeParameters.add(getTypeInfoInternal(rawClass.getComponentType(),visited));
				rawClass = arrayClass;

			} else if(collClass.isAssignableFrom(rawClass)) {

				ti.setCollection(true);
				rawClass = collClass;
				
				if(pt.getActualTypeArguments().length>0) {
					typeParameters.add(getTypeInfoInternal(pt.getActualTypeArguments()[0], visited));
				} else {
					typeParameters.add(getTypeInfoInternal(Object.class, visited));
				}
			} else if(mapClass.isAssignableFrom(rawClass)) {

				ti.setMap(true);
				rawClass = mapClass;
				
				if(pt.getActualTypeArguments().length==2) {
					typeParameters.add(getTypeInfoInternal(pt.getActualTypeArguments()[0], visited));
					typeParameters.add(getTypeInfoInternal(pt.getActualTypeArguments()[1], visited));
				} else {
					typeParameters.add(getTypeInfoInternal(Object.class, visited));
					typeParameters.add(getTypeInfoInternal(Object.class, visited));
				}
			}

	 	} else if (type instanceof Class) {
			//log.info("get type info (internal): "+type+" -- class");

	 		rawClass = (Class<?>) type;
		
	 		if(MultipartFile.class.isAssignableFrom(rawClass)) {
	 			ti.setFile(true);
	 		} else if(rawClass.isArray()) {
				ti.setArray(true);
				typeParameters.add(getTypeInfoInternal(rawClass.getComponentType(),visited));
				rawClass = arrayClass;
			} else if(collClass.isAssignableFrom(rawClass)) {
				ti.setCollection(true);
				rawClass = collClass;
				typeParameters.add(getTypeInfoInternal(Object.class, visited));
			} else if(mapClass.isAssignableFrom(rawClass)) {
				ti.setCollection(true);
				rawClass = mapClass;
				typeParameters.add(getTypeInfoInternal(Object.class, visited));
				typeParameters.add(getTypeInfoInternal(Object.class, visited));
			}
	 		
	 	} else {
			log.warn("get type info (internal): "+type+" -- unknown!");
	 		return null;
	 	}

		log.debug("get type info (internal): raw class is "+rawClass);
	 	

		if(rawClass.isPrimitive()) {
			ti.setPrimitive(true);
		} else if (rawClass.getPackage().getName().startsWith("java.lang")) {
			ti.setPrimitive(true);
		} 

		if(rawClass.isEnum()) {
			ti.setEnumeration(true);
			ti.setValues(rawClass.getEnumConstants());
		}
		
		List<FieldInfo> fields = new ArrayList<>();

		try {
			
			BeanInfo info = Introspector.getBeanInfo(rawClass);
			for(PropertyDescriptor pd : info.getPropertyDescriptors()) {
				
				if(pd.getReadMethod()==null) {
				} else if(pd.getReadMethod().getDeclaringClass().getPackage().getName().startsWith("java.lang")) {
				} else {
					FieldInfo fi = new FieldInfo();
					fi.setName(pd.getName());
					fi.setTypeInfo(getTypeInfoInternal(pd.getReadMethod().getGenericReturnType(),visited));
					fields.add(fi);
				}
			}
			
		} catch (Exception e) {
			log.error(" error: ",e);
		}

		
		ti.setFields(fields);
		ti.setTypeParameters(typeParameters);

		ti.setTypeShort(getShortName(rawClass));
		ti.setType(getName(rawClass));

		return ti;
	}

	public static TypeInfo getTypeInfoInternal(Type type) throws ClassNotFoundException, LinkageError {
		return getTypeInfoInternal(type, new ArrayList<>());
	}

	public static TypeInfo getTypeInfo(Type type) throws ClassNotFoundException, LinkageError {
		TypeInfo out = getTypeInfoInternal(type);

		log.debug(" ================================================================= ");
		
		out.setObject(getObject(out));
		return out;
	}
	
	
	public static ParameterInfo getParameterInfo(Method m, Parameter p, String name) throws ClassNotFoundException, LinkageError {

		if(p.isAnnotationPresent(ApiIgnore.class)) return null;
		
		ParameterInfo pi = new ParameterInfo();

		Class<?> type = p.getType();
		
		pi.setTypeInfo(getTypeInfo(type));
		
		String paramName = name;
		
		pi.setSecret(p.getAnnotation(ApiSecret.class)!=null);
		
		RequestBody bodyAnnotation = p.getAnnotation(RequestBody.class); 
		RequestParam paramAnnotation =  p.getAnnotation(RequestParam.class); 
		PathVariable pathVarAnnotation =  p.getAnnotation(PathVariable.class); 

		if(bodyAnnotation!=null) {
			pi.setRequired(bodyAnnotation.required());
			pi.setParamType(ParamType.BODY);
		} else if (paramAnnotation!=null) {
			pi.setRequired(paramAnnotation.required());
			pi.setParamType(ParamType.REQUEST);
			if(!StringUtils.isEmpty(paramAnnotation.name())) {
				paramName = paramAnnotation.name();
			}
			if(!paramAnnotation.defaultValue().equals(ValueConstants.DEFAULT_NONE)) {
				pi.setDefaultValue(paramAnnotation.defaultValue());
			}
			
		
			if(paramAnnotation.name()!=null) {
				pi.setName(paramAnnotation.name());
			}
		} else if (pathVarAnnotation!=null) {
			pi.setParamType(ParamType.PATH);
			pi.setRequired(true);
		} else {
			return null;
		}
		
		for(ApiDescription ad : collectAnnotations(null, p, ApiDescription.class)) {
			pi.addDescription(getDescription(ad));
		}
		
		if(p.isAnnotationPresent(Deprecated.class)) pi.setDeprecated(true);
		
		pi.setName(paramName);
		
		return pi;
	}

	public static List<ParameterInfo> getParameterInfos(Method m) throws ClassNotFoundException, LinkageError {
		
		log.debug("paramater info: "+m.getDeclaringClass().getSimpleName()+"."+m.getName());
		

		List<ParameterInfo> out = new ArrayList<>();
		
		PrioritizedParameterNameDiscoverer pnd = new PrioritizedParameterNameDiscoverer();
		pnd.addDiscoverer(new DefaultParameterNameDiscoverer());
		
		String[] paramNames = pnd.getParameterNames(m);
		
		Parameter[] params = m.getParameters();
		for(int i=0; i < params.length;i++) {
			Parameter p = params[i];
			ParameterInfo pi = Introspection.getParameterInfo(m, p,paramNames[i]);
			if(pi==null) continue;
			out.add(pi);
		}

		
		
		return out;

	}

	public static MethodInfo getMethodInfo(Class<?> c, Method m) throws ClassNotFoundException, LinkageError {
		
		if(m.isAnnotationPresent(ApiIgnore.class)) return null;

		if(c.getPackage().getName().startsWith("org.springframework")) return null;
		
		log.debug("get method info: "+c.getName()+"."+m.getName());

		for(Class<?> cp : findSuperclassCandidates(c, true)) {
			if(cp.isAnnotationPresent(ApiIgnore.class)) return null;
		}
		
		MethodInfo mi = new MethodInfo();
		mi.setParams(getParameterInfos(m));
		mi.setClassName(c.getCanonicalName());
		mi.setReturnType(getTypeInfo(m.getGenericReturnType()));
		
		for(ApiDescription ad : collectAnnotations(m, ApiDescription.class)) {
			mi.addDescription(getDescription(ad));
		}

		List<ApiErrors> es = collectAnnotations(m, ApiErrors.class); 
		List<ApiReturnStatus> s = getApiReturn(es);
		mi.setReturnStatus(s);

		mi.setHeaderInfos(getHeaderInfo(collectAnnotations(m,ApiHeaders.class)));

		return mi;
	}

	
	
	
}
