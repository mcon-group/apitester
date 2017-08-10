package com.mcg.apitester.impl.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

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
	public void testSimpleObject() {
		Object o = ObjectIntrospection.createMap(SimpleEntity.class, new ArrayList<>());
		print(o);
		Assert.assertEquals(true, Map.class.isAssignableFrom(o.getClass()));
		Map<String,Object> om = (Map<String, Object>) o;
		Assert.assertEquals(1, om.size());
		Assert.assertEquals("id", om.keySet().iterator().next());
	}
	
	@Test
	public void testSimpleString() {
		Object o = ObjectIntrospection.createMap(String.class, new ArrayList<>());
		print(o);
		Assert.assertEquals(true, String.class.isAssignableFrom(o.getClass()));
		String om = (String) o;
	}
	
	@Test
	public void testSimpleInteger() {
		Object o = ObjectIntrospection.createMap(Integer.class, new ArrayList<>());
		print(o);
		Assert.assertEquals(true, Integer.class.isAssignableFrom(o.getClass()));
		Integer om = (Integer) o;
	}
	
	@Test
	public void testSimpleEumeration() {
		Object o = ObjectIntrospection.createMap(SimpleEnum.class, new ArrayList<>());
		print(o);
		Assert.assertEquals(true, List.class.isAssignableFrom(o.getClass()));
		List<String> l = (List<String>)o;
		Assert.assertEquals(3, l.size());
		Assert.assertEquals("A", l.get(0));
		Assert.assertEquals("B", l.get(1));
		Assert.assertEquals("C", l.get(2));
	}
	
	@Test
	public void testEntityWithEnum() {
		Object o = ObjectIntrospection.createMap(EntityWithEnums.class, new ArrayList<>());
		print(o);

		Assert.assertEquals(true, Map.class.isAssignableFrom(o.getClass()));
		Map<String,Object> om = (Map<String, Object>) o;

		Assert.assertEquals(3, om.size());
	}

	public int x() { return 0; }
	
	@Test
	public void testEntityWithPrimitives() throws NoSuchMethodException, SecurityException {
		Class<?> c = this.getClass().getDeclaredMethod("x").getReturnType();
		Object o = ObjectIntrospection.createMap(c, new ArrayList<>());
		print(o);
		Assert.assertEquals(true, Integer.class.isAssignableFrom(o.getClass()));
		Assert.assertEquals(1, o);
	}

	
	
	
	
	
}
