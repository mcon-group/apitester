package com.mcg.apitester.example.controllers;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import org.springframework.http.HttpStatus;

import com.mcg.apitester.api.annotations.ApiDescription;
import com.mcg.apitester.api.annotations.ApiError;
import com.mcg.apitester.api.annotations.ApiErrors;
import com.mcg.apitester.api.annotations.ApiExtraParam;
import com.mcg.apitester.api.annotations.ApiExtraParams;
import com.mcg.apitester.api.annotations.ApiHeader;
import com.mcg.apitester.api.annotations.ApiHeaders;
import com.mcg.apitester.api.annotations.ParamType;


@ApiExtraParams(
	{
		@ApiExtraParam(type=String.class,name="apiKey",description="The API key to use with this request",paramType=ParamType.REQUEST),
		@ApiExtraParam(type=String.class,name="languages",description="Laguage wishlist, in order of preference",paramType=ParamType.REQUEST)
	}
)
@ApiDescription(file="/com/mcg/apitester/example/controllers/BaseController.md")
@ApiHeaders(
	{
		@ApiHeader(name="AUTHENTICATION", description="the value of the authentication token acquired through a call to /authentication")
	}
)
@ApiErrors(
	{
		@ApiError(value=HttpStatus.INTERNAL_SERVER_ERROR,description="If processing the request failed"),
		@ApiError(value=HttpStatus.UNAUTHORIZED,description="If the user is not authenticated"),
		@ApiError(value=HttpStatus.FORBIDDEN,description="If the user is authenticated, but doesn't have sufficient permissions")
	})
public class BaseController implements IController {

	public static Object createValue(Class c) {
		
		if(Integer.TYPE.isAssignableFrom(c)) {
			return (int)Math.round(Math.random()*100000d);
		} else if(Long.TYPE.isAssignableFrom(c)) {
			return (long)Math.round(Math.random()*100000d);
		} else if(Boolean.TYPE.isAssignableFrom(c)) {
			return Math.round(Math.random()*2d) >= 1;
		} else if(c.isEnum()) {
			Object[] vs = c.getEnumConstants();
			return vs[(int)Math.floor(Math.random()*(double)vs.length)]; 
		} else if(String.class.isAssignableFrom(c)) {
			return UUID.randomUUID().toString(); 
		}
		
		return null;
		
	}
	
	
	public static Object createArray(Class c) {
		
		Object o = Array.newInstance(c,5);
		
		Array.set(o, 0, createValue(c));
		Array.set(o, 1, createValue(c));
		Array.set(o, 2, createValue(c));
		Array.set(o, 3, createValue(c));
		Array.set(o, 4, createValue(c));
		
		return o;
	}
	
	
	public static Object createCollection(Class c) {
		
		int i = (int)Math.round(Math.random()*10d);
		
		Object o = Array.newInstance(c,i);
		
		for(int k=0;k<i;k++) {
			Array.set(o, k, createValue(c));
		}
		
		return o;
	}
	
	
	
	
	public static <T> T create(Class<T> c) {
		try {
			T out = c.newInstance();
			for(Field f : c.getDeclaredFields()) {
				if(f.getType().isArray()) {
					f.setAccessible(true);
					f.set(out, createArray(f.getType().getComponentType()));
				} else if(f.getType()==List.class) {
					f.setAccessible(true);
					List l = new ArrayList();
					
					
				} else if(f.getType()==Set.class) {
					f.setAccessible(true);
				} else if(f.getType()==Map.class) {
					f.setAccessible(true);
				} else if(Collection.class.isAssignableFrom(f.getType())) {
					f.setAccessible(true);
				} else {
					f.setAccessible(true);
					f.set(out, createValue(f.getType()));
				}
			}
			return out;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	
	
}
