package com.mcg.apitester.impl.services;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Array;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.TypeVariable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.DefaultParameterNameDiscoverer;
import org.springframework.core.PrioritizedParameterNameDiscoverer;
import org.springframework.util.ClassUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.mcg.apitester.api.annotations.ApiIgnore;
import com.mcg.apitester.api.annotations.ApiSecret;
import com.mcg.apitester.api.annotations.ParamType;
import com.mcg.apitester.impl.entities.FieldInfo;
import com.mcg.apitester.impl.entities.MethodInfo;
import com.mcg.apitester.impl.entities.ParameterInfo;
import com.mcg.apitester.impl.entities.TypeInfo;

public class Introspection2 {
	
	private static Log log = LogFactory.getLog(Introspection2.class);

	
	private static Class<?> collClass = Collection.class;
	private static Class<?> mapClass = Map.class;
	private static Class<?> arrayClass = Array.class;
	
	
	private static List<Type> getGenerics(Class<?> in) {
		List<Type> out = new ArrayList<>();
		for(TypeVariable<?> tv : in.getTypeParameters()) {
			Type[] ts = tv.getBounds();
			if(ts.length>0) {
				out.add(ts[0]);
			}
		}
		return out;
	}
	
	private static String getShortName(Type t) throws ClassNotFoundException, LinkageError {
		Class<?> c = ClassUtils.forName(t.getTypeName(), null);
		return c.getSimpleName();
	}

	private static String getName(Type t) throws ClassNotFoundException, LinkageError {
		Class<?> c = ClassUtils.forName(t.getTypeName(), null);
		return c.getCanonicalName();
	}
	
	/**
	public static Object createObject(String classname, List<Class<?>> v) throws ClassNotFoundException, LinkageError {
		return createObject(ClassUtils.forName(classname, null),v);
	}
	
	public static Object createObject(Class<?> in, List<Class<?>> v) throws ClassNotFoundException, LinkageError {
		
		log.info("create object: "+in);
		
		if(v==null) {
			v = new ArrayList<>();
		}
		
		if(v.contains(in)) {
			log.info("create object: already visited: "+in);
			return "[REFERENCE LOOP]";
		}
		
		List<Class<?>> visited = new ArrayList<>(v);
		visited.add(in);

		if(String.class.isAssignableFrom(in)) {
			return "a string";
		} else if (Boolean.class.isAssignableFrom(in) || in == Boolean.TYPE) {
			return true;
		} else if (Integer.class.isAssignableFrom(in) || in == Integer.TYPE) {
			return 1;
		} else if (Long.class.isAssignableFrom(in) || in == Long.TYPE) {
			return Long.MAX_VALUE;
		} else if (Double.class.isAssignableFrom(in) || in == Double.TYPE) {
			return 0.003;
		} else if (Float.class.isAssignableFrom(in) || in == Float.TYPE) {
			return 0.003;
		} else if (Date.class.isAssignableFrom(in)) {
			return new Date();
		} else if (Character.class.isAssignableFrom(in) || in == Character.TYPE) {
			return 'c';
		} else if (Byte.class.isAssignableFrom(in)) {
			return 'c';
		} else if (in.isEnum()) {
			List<String> values = new ArrayList<>();
			for(Object o : in.getEnumConstants()) {
				values.add(((Enum<?>)o).name());
			}
			return StringUtils.collectionToDelimitedString(values, " | ");
		} else if (in == MultipartFile.class) {
			return "[BINARY FILE]";
		} else {
			TypeInfo ti = getTypeInfoInternal(in, null);
			try {
				if(ti.isCollection()) {
					ArrayList<Object> e = new ArrayList<>();
					e.add(createObject(ti.getType(),visited));
					return e;
				} else {
					Map<String,Object> out = new HashMap<>();
					BeanInfo info = Introspector.getBeanInfo(in);
					for(PropertyDescriptor pd : info.getPropertyDescriptors()) {

						log.info("create object: "+in+"."+pd.getDisplayName());
						
						if(pd.getReadMethod()==null) {
						} else if (pd.getReadMethod().getDeclaringClass().getPackage().getName().equals("java.lang")) { 
						} else {

							log.info("create object: "+in+"."+pd.getDisplayName()+" --- GENERIC "+pd.getReadMethod().getGenericReturnType());
							log.info("create object: "+in+"."+pd.getDisplayName()+" --- RETURN  "+pd.getReadMethod().getReturnType());
							
							TypeInfo ti2 = getTypeInfoInternal(pd.getReadMethod().getGenericReturnType(), null);
							
							System.err.println(new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT).writeValueAsString(ti2));
							
							Object o = null;
							
							if(ti2.isCollection() || ti2.isArray()) {
								ArrayList<Object> e = new ArrayList<>();
								e.add(createObject(ti2.getType(),visited));
								o = e;
							} else {
								o = createObject(ti2.getType(), visited);
							}
							out.put(pd.getName(), o);
						}
					}
					return out;
				}
				

			} catch (Exception e) {
				e.printStackTrace();
				return "[UNRESOLVABLE TYPE]";
				//return e.getMessage();
			}
		}
	}
	
	private static Object getObject(Class<?> in) throws ClassNotFoundException, LinkageError {
		return createObject(in, new ArrayList<>());
	}
	 **/
	
	
	public static Object getObject(TypeInfo info) throws ClassNotFoundException, LinkageError {

		log.info(info.getType()+" // "+info.isArray()+"/"+info.isCollection());
		
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
		
		log.info("get type info (internal): "+type);
		
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

		log.info("get type info (internal): raw class is "+rawClass);
	 	

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

		log.info(" ================================================================= ");
		
		out.setObject(getObject(out));
		return out;
	}
	
	
	public static ParameterInfo getParameterInfo(Parameter p, String name, ParameterInfo pi) throws ClassNotFoundException, LinkageError {

		if(p.isAnnotationPresent(ApiIgnore.class)) return null;
		
		if(pi == null) {
			pi = new ParameterInfo();
		}

		Class<?> type = p.getType();
		
		pi.setTypeInfo(getTypeInfo(type));
		
		String paramName = name;
		
		pi.setSecret(p.getAnnotation(ApiSecret.class)!=null);
		
		RequestBody bodyAnnotation = p.getAnnotation(RequestBody.class); 
		if(bodyAnnotation!=null && bodyAnnotation.required()) {
			pi.setRequired(true);
			pi.setParamType(ParamType.BODY);
		}
		
		RequestParam paramAnnotation =  p.getAnnotation(RequestParam.class); 
		if(paramAnnotation!=null && paramAnnotation.required()) {
			pi.setRequired(true);
			pi.setParamType(ParamType.REQUEST);
			if(!StringUtils.isEmpty(paramAnnotation.name())) {
				paramName = paramAnnotation.name();
			}
		
			if(paramAnnotation.name()!=null) {
				pi.setName(paramAnnotation.name());
			}
		}
		
		PathVariable pathVarAnnotation =  p.getAnnotation(PathVariable.class); 
		if(pathVarAnnotation!=null) {
			pi.setParamType(ParamType.PATH);
			pi.setRequired(true);
		}
		
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
			
			if(
				(p.getAnnotation(PathVariable.class) == null) &&
				(p.getAnnotation(RequestParam.class) == null) &&
				(p.getAnnotation(RequestBody.class) == null)) {
				continue;
			}
				
			
			ParameterInfo pi = Introspection2.getParameterInfo(p,paramNames[i],null);
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
		return mi;
	}

	
	
	
}
