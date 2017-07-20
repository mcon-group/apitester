package com.mcg.apitester.impl;



import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.classmate.MemberResolver;
import com.fasterxml.classmate.ResolvedType;
import com.fasterxml.classmate.ResolvedTypeWithMembers;
import com.fasterxml.classmate.TypeResolver;
import com.fasterxml.classmate.members.ResolvedMethod;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mcg.apitester.impl.ParameterInfo.PARAM_TYPE;

public class EndpointIntrospection {
	
	private static ParameterInfo getInfo(ResolvedType resolvedType, MethodParameter mp) {
		ParameterInfo out = new ParameterInfo();
		if (resolvedType.getArrayElementType() != null) {
			out.setCollection(true);
			out.setType(resolvedType.getArrayElementType().getErasedType().getCanonicalName());
			out.setTypeShort(resolvedType.getArrayElementType().getErasedType().getSimpleName());
		} else if (Collection.class.isAssignableFrom(resolvedType.getErasedType())) {
			out.setCollection(true);
			if (resolvedType.getTypeParameters() != null && resolvedType.getTypeParameters().size() == 1) {
				out.setType(resolvedType.getTypeParameters().get(0).getErasedType().getCanonicalName());
				out.setTypeShort(resolvedType.getTypeParameters().get(0).getErasedType().getSimpleName());
			}
		} else {
			out.setCollection(false);
			out.setType(resolvedType.getErasedType().getCanonicalName());
			out.setTypeShort(resolvedType.getErasedType().getSimpleName());
		}
		if(mp!=null && mp.getParameterName()!=null) {
			out.setName(mp.getParameterName());
		}
		if(mp==null) {
			out.setParamType(PARAM_TYPE.RETURN);
		} else {
			if(mp.getParameterAnnotation(PathVariable.class)!=null) {
				out.setParamType(PARAM_TYPE.PATH);
				out.setRequired(true);
			} else if (mp.getParameterAnnotation(RequestParam.class)!=null) {
				out.setParamType(PARAM_TYPE.PATH);
				out.setRequired(mp.getParameterAnnotation(RequestParam.class).required());
				out.setDefaultValue(mp.getParameterAnnotation(RequestParam.class).defaultValue());
			} else if (mp.getParameterAnnotation(RequestBody.class)!=null) {
				out.setParamType(PARAM_TYPE.BODY);
				out.setRequired(mp.getParameterAnnotation(RequestBody.class).required());
			} else {
				return null;
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
			return getInfo(rr,null);  
		}
	}
	
	
	public static List<ParameterInfo> getInfo(Class<?> c, Method m, MethodParameter[] params) {
		List<ParameterInfo> out = new ArrayList<>();
		ResolvedMethod rm = getResolvedMethod(c, m);
		if(rm==null) return null;
		for(int i=0;i < rm.getArgumentCount();i++) {
			ParameterInfo pi = getInfo(rm.getArgumentType(i),params[i]);
			if(pi!=null) {
				out.add(pi);
			}
		}
		return out;
	}
	
	public static void main(String[] args) throws JsonProcessingException, NoSuchMethodException, SecurityException {
		Class clazz = EndpointIntrospection.class;
		Method m = clazz.getMethod("getCollection", new Class[] {});
		ParameterInfo r = EndpointIntrospection.getReturnTypeInfo(clazz, m);
		ObjectMapper om = new ObjectMapper();
		System.err.println(om.writeValueAsString(r));
	}

	public static MethodInfo getMethodInfo(Class c, Method m, MethodParameter[] params) {
		return new MethodInfo(getReturnTypeInfo(c, m), getInfo(c, m, params));
	}
	
}
