package com.mcg.apitester.impl.services;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;

import org.springframework.core.LocalVariableTableParameterNameDiscoverer;
import org.springframework.core.MethodParameter;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.ValueConstants;

import com.fasterxml.classmate.MemberResolver;
import com.fasterxml.classmate.ResolvedType;
import com.fasterxml.classmate.ResolvedTypeWithMembers;
import com.fasterxml.classmate.TypeResolver;
import com.fasterxml.classmate.members.ResolvedMethod;
import com.mcg.apitester.api.annotations.ApiDescription;
import com.mcg.apitester.api.annotations.ApiError;
import com.mcg.apitester.api.annotations.ApiErrors;
import com.mcg.apitester.api.annotations.ApiExtraParam;
import com.mcg.apitester.api.annotations.ApiExtraParams;
import com.mcg.apitester.api.annotations.ApiHeader;
import com.mcg.apitester.api.annotations.ApiHeaders;
import com.mcg.apitester.api.annotations.ApiIgnore;
import com.mcg.apitester.api.annotations.ParamType;
import com.mcg.apitester.impl.entities.ApiReturnStatus;
import com.mcg.apitester.impl.entities.HeaderInfo;
import com.mcg.apitester.impl.entities.MethodInfo;
import com.mcg.apitester.impl.entities.ParameterInfo;

public class EndpointIntrospection {
	
	private static ParameterInfo getParameterInfo(ResolvedType resolvedType, MethodParameter mp, String paramName) {
		ParameterInfo out = new ParameterInfo();
		
		Class<?> t = resolvedType.getErasedType();
		out.setCollection(true);
		
		if (resolvedType.getArrayElementType() != null) {
			t = resolvedType.getArrayElementType().getErasedType();
		} else if (Collection.class.isAssignableFrom(t)) {
			if (resolvedType.getTypeParameters() != null && resolvedType.getTypeParameters().size() == 1) {
				t = resolvedType.getTypeParameters().get(0).getErasedType();
			}
		} else {
			out.setCollection(false);
			out.setType(resolvedType.getErasedType().getCanonicalName());
			out.setTypeShort(resolvedType.getErasedType().getSimpleName());
		}

		if(t.isEnum()) {
			out.setValues(t.getEnumConstants());
		}
		
		if(t.getName().equals("org.springframework.web.multipart.MultipartFile")) {
			out.setFile(true);
		} else {
			out.setFile(false);
		}
		
		out.setType(t.getCanonicalName());
		out.setTypeShort(t.getSimpleName());
		
		if(t.isPrimitive() || t.getCanonicalName().startsWith("java.lang")) {
			out.setPrimitive(true);
		} else {
			out.setPrimitive(false);
			try {
				out.setObject(ObjectIntrospection.createMap(Class.forName(out.getType()), new ArrayList<>()));
			} catch (Exception e) {
			}
		}
		
		if(mp!=null && mp.getParameterName()!=null) {
			out.setName(mp.getParameterName());
		} else {
			out.setName(paramName);
		}
			
		if(mp==null) {
			out.setParamType(ParamType.RETURN);
		} else {
			PathVariable pv = mp.getParameterAnnotation(PathVariable.class);
			RequestParam rp = mp.getParameterAnnotation(RequestParam.class);
			RequestBody rb = mp.getParameterAnnotation(RequestBody.class);
			if(pv!=null) {
				out.setParamType(ParamType.PATH);
				if(pv.name().length()>0) out.setName(pv.name());
				out.setRequired(true);
			} else if (rp!=null) {
				out.setParamType(ParamType.REQUEST);
				out.setRequired(mp.getParameterAnnotation(RequestParam.class).required());
				if(! rp.defaultValue().equals(ValueConstants.DEFAULT_NONE)) {
					out.setDefaultValue(rp.defaultValue());
				}
				if(rp.name().length()>0) {
					out.setName(rp.name());
				}
			} else if (rb!=null) {
				out.setParamType(ParamType.BODY);
				out.setRequired(mp.getParameterAnnotation(RequestBody.class).required());
			} else {
				return null;
			}
		}

		if(mp!=null) {
			ApiDescription ad = mp.getParameterAnnotation(ApiDescription.class);
			if(ad!=null) {
				out.setDescription(getDescription(null,ad));
			}
		}
		
		return out;
	}
	
	private static ResolvedMethod getResolvedMethod(Class<?> c, Method m) {
		TypeResolver typeResolver = new TypeResolver();
		MemberResolver memberResolver = new MemberResolver(typeResolver);
		ResolvedType resolvedType = typeResolver.resolve(c);
		ResolvedTypeWithMembers resolvedTypeWithMembers = memberResolver.resolve(resolvedType, null, null);
		for (ResolvedMethod rm : resolvedTypeWithMembers.getMemberMethods()) {
			if (rm.getRawMember().toGenericString().compareTo(m.toGenericString()) == 0) {
				return rm;
			}
		}
		return null;
	}
	
	
	public static ParameterInfo getReturnTypeInfo(Class<?> c, Method m) {
		ResolvedMethod rm = getResolvedMethod(c, m);
		if(rm==null) return null;
		ResolvedType rr = rm.getReturnType();
		if(rr==null) {
			return new ParameterInfo(false,"void","void");
		} else {
			return getParameterInfo(rr,null,null);  
		}
	}
	
	public static List<ApiExtraParam> getApiExtraParams(Class clazz, Method m) {
		List<ApiExtraParam> allParam = new ArrayList<>();
		
		allParam.addAll(getAnnotations(clazz, ApiExtraParam.class));
		
		for(ApiExtraParams aParams : getAnnotations(clazz, ApiExtraParams.class)) {
			for(ApiExtraParam ae: aParams.value()) {
				allParam.add(ae);
			}
		}
		return allParam;
	}
	
	public static List<ParameterInfo> getExtraParamsAnnotation(Class clazz, Method m) {
		
		List<ParameterInfo> out = new ArrayList<>();
		
		for(ApiExtraParam p : getApiExtraParams(clazz, m)) {
			ParameterInfo pi = new ParameterInfo();
			pi.setName(p.name());
			pi.setDescription(p.description());
			pi.setCollection(p.collection());
			pi.setType(p.type().getCanonicalName());
			pi.setTypeShort(p.type().getSimpleName());
			pi.setParamType(p.paramType());
			pi.setRequired(p.mandatory());
			pi.setPrimitive(p.type().getCanonicalName().startsWith("java.lang"));
			pi.setObject(ObjectIntrospection.createMap(p.type(), new ArrayList<>()));
			out.add(pi);
		}
		return out;
	}
	
	
	public static List<ParameterInfo> getParamInfo(Class<?> c, Method m, MethodParameter[] params) {
		List<ParameterInfo> out = new ArrayList<>();
		ResolvedMethod rm = getResolvedMethod(c, m);
		if(rm==null) return null;
		
		String[] parameterNames = new LocalVariableTableParameterNameDiscoverer().getParameterNames(m); 
		
		for(int i=0;i < rm.getArgumentCount();i++) {
			if(
					!m.getParameters()[i].isAnnotationPresent(RequestBody.class) && 
					!m.getParameters()[i].isAnnotationPresent(PathVariable.class) && 
					!m.getParameters()[i].isAnnotationPresent(RequestParam.class)
					
			) {
				continue;
			}

			ParameterInfo pi = getParameterInfo(rm.getArgumentType(i),params[i],parameterNames[i]);
			
			if(pi!=null) {
				out.add(pi);
			}
		}
		
		out.addAll(getExtraParamsAnnotation(c, m));
		
		return out;
	}
	
	private static <T extends Annotation> List<T> getAnnotations(Class c, Class<T> type) {
		List<T> out = new ArrayList<>();
		if(c==null) return out;

		out.addAll(getAnnotations(c.getSuperclass(), type));
		
		for(Class cp : c.getInterfaces()) {
			out.addAll(getAnnotations(cp, type));
		}

		if(c.isAnnotationPresent(type)) {
			out.add((T)c.getAnnotation(type));
		}

		return out;
	}
	
	private static <T extends Annotation> List<T> getAnnotations(Method m, Class<T> type) {
		List<T> out = new ArrayList<>();
		out.addAll(getAnnotations(m.getDeclaringClass(),type));
		if(m.isAnnotationPresent(type)) {
			out.add((T)m.getAnnotation(type));
		}
		return out;
	}
	
	public static String getDescription(Class clazz, ApiDescription ad) {
		if(ad.file().length()>0) {
			return getFile(clazz, ad.file());
		} 
		return ad.value();
	}
	
	public static String getFile(Class c, String file) {
		InputStream is = null;
		try {
			Resource r = new ClassPathResource(file);
			if(r!=null) {
				is = r.getInputStream();
				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				byte[] buff = new byte[1024];
				int a = 0;
				while((a=is.read(buff))>-1) {
					baos.write(buff,0,a);
				}
				baos.flush();
				return new String(baos.toByteArray());
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				is.close();
			} catch (Exception e2) {
			}
		}
		return "";
	}
	
	
	
	
	public static List<String> getDescriptions(Class<?> clazz, Method m) {
		List<String> out = new ArrayList<>();
		for(ApiDescription ad : getAnnotations(m,ApiDescription.class)) {
			out.add(getDescription(clazz, ad));
		}
		return out;
	}
	
	public static MethodInfo getMethodInfo(Class<?> c, Method m, MethodParameter[] params) {
		if(c.isAnnotationPresent(ApiIgnore.class)) return null;
		if(m.isAnnotationPresent(ApiIgnore.class)) return null;
		MethodInfo mi = new MethodInfo();
		mi.setClassName(c.getName());
		mi.setMethodName(m.getName());
		mi.setReturnType(getReturnTypeInfo(c, m));
		mi.setParams(getParamInfo(c, m, params));
		mi.setDescriptions(getDescriptions(c,m));
		mi.setReturnStatus(returnStatusFromAnnotations(c, m));
		mi.setHeaderInfos(getHeaderInfo(c, m));
		return mi;
	}
	
	public static List<ApiHeader> getApiHeader(Class clazz, Method m) {
		List<ApiHeader> allHeader = new ArrayList<>();
		
		allHeader.addAll(getAnnotations(clazz, ApiHeader.class));
		
		for(ApiHeaders aHeaders : getAnnotations(clazz, ApiHeaders.class)) {
			for(ApiHeader ae: aHeaders.value()) {
				allHeader.add(ae);
			}
		}
		return allHeader;
	}
	
	public static List<HeaderInfo> getHeaderInfo(Class clazz, Method m) {
		
		List<HeaderInfo> out = new ArrayList<>();
		
		for(ApiHeader h : getApiHeader(clazz, m)) {
			HeaderInfo hi = new HeaderInfo();
			hi.setName(h.name());
			hi.setDescription(h.description());
			out.add(hi);
		}
		return out;
	}
	
	
	
	public static List<ApiError> getApiError(Class clazz, Method m) {
		List<ApiError> allError = new ArrayList<>();
		
		allError.addAll(getAnnotations(clazz, ApiError.class));
		
		for(ApiErrors aErrs : getAnnotations(clazz, ApiErrors.class)) {
			for(ApiError ae: aErrs.value()) {
				allError.add(ae);
			}
		}
		return allError;
	}
	
	
	public static List<ApiReturnStatus> returnStatusFromAnnotations(Class clazz, Method m) {
		
		List<ApiReturnStatus> out = new ArrayList<>();
		
		// "OK" status, 200 if nothing else configured
		ResponseStatus rs = m.getAnnotation(ResponseStatus.class);
		ApiReturnStatus aes = new ApiReturnStatus();
		aes.setDef(true);
		if(rs!=null) {
			aes.setStatus(rs.code().value()); 
			aes.setName(rs.code().name());
			if(rs.code()==HttpStatus.INTERNAL_SERVER_ERROR && rs.value()!=HttpStatus.INTERNAL_SERVER_ERROR) {
				aes.setStatus(rs.value().value()); 
				aes.setName(rs.value().name());
			}
		} else {
			aes.setStatus(200); 
			aes.setName("OK");
		}
		out.add(aes);

		for(ApiError ae : getApiError(clazz, m)) {
			ApiReturnStatus ars = new ApiReturnStatus();
			ars.setStatus(ae.value().value());
			ars.setName(ae.value().name());
			ars.setDescription(ae.description());
			out.add(ars);
		}
		
		for(Class<?> ec : m.getExceptionTypes()) {
			// theoretically, exceptions could be parsed .... 
		}
		
		out.sort(new Comparator<ApiReturnStatus>() {
			@Override
			public int compare(ApiReturnStatus o1, ApiReturnStatus o2) {
				return new Integer(o1.getStatus()).compareTo(o2.getStatus());
			}
		});
		
		return out;
	}
	
	
}
