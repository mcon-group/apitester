package com.mcg.apitester.example.tests;

import java.util.ArrayList;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.mcg.apitester.example.entities.OneEntity;
import com.mcg.apitester.impl.services.ObjectIntrospection;

public class ObjectIntrospectionTest {

	private void print(Object o) {
		ObjectMapper om = new ObjectMapper();
		om.enable(SerializationFeature.INDENT_OUTPUT);
		try {
			StackTraceElement ste = Thread.currentThread().getStackTrace()[2];
			System.err.println(ste.getMethodName()+" =================== ");
			System.err.println(om.writeValueAsString(o));
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}
	
	
	@Test
	public void testOneEntity() throws JsonProcessingException {
		Object o = ObjectIntrospection.createMap(OneEntity.class, new ArrayList<>());
		print(o);
		Assert.assertEquals(true, Map.class.isAssignableFrom(o.getClass()));
		Map<String,Object> om = (Map<String, Object>) o;
		
		System.err.println(new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT).writeValueAsString(om));
		
		Assert.assertEquals(9, om.size());
	}
	
	
}
