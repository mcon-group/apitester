package com.mcg.apitester.impl.services.zzz;

import java.lang.reflect.Method;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.mcg.apitester.impl.entities.ParameterInfo;
import com.mcg.apitester.impl.entities.TypeInfo;
import com.mcg.apitester.impl.services.Introspection2;
import com.mcg.apitester.impl.services.zzz.util.TestObject;

public class IntrospectionTest {

	@Test
	public void testParameterInfoSimpleTypes() throws ClassNotFoundException, LinkageError {
		Method m = Introspection2.findMethod(TestObject.class, "add", new Class<?>[] { Integer.TYPE, Integer.TYPE} );
		Assert.assertNotNull(m);
		List<ParameterInfo> pis = Introspection2.getParameterInfos(m);
		Assert.assertEquals(2, pis.size());

		prettyPrint(pis);
		
	}
	
	@Test
	public void testParameterInfoListTypes() throws ClassNotFoundException, LinkageError {
		
		Integer[] x = new Integer[] {};
		
		Method m = Introspection2.findMethod(TestObject.class, "addAll", new Class<?>[] { x.getClass() } );
		Assert.assertNotNull(m);
		List<ParameterInfo> pis = Introspection2.getParameterInfos(m);
		Assert.assertEquals(1, pis.size());
		Assert.assertEquals("values", pis.get(0).getName());
		Assert.assertEquals("Array", pis.get(0).getTypeInfo().getTypeShort());
		Assert.assertEquals("Integer", pis.get(0).getTypeInfo().getTypeParameters().get(0).getTypeShort());
		Assert.assertEquals(true, pis.get(0).getTypeInfo().isArray());
		prettyPrint(pis);
		
	}
	
	@Test
	public void testCreateObject() throws ClassNotFoundException, LinkageError {
		//Object o = Introspection2.createObject(TestObject.class, null);
		//prettyPrint(o);
		
	}

	@Test
	public void testGetTypeInfo() throws ClassNotFoundException, LinkageError {
		TypeInfo o = Introspection2.getTypeInfo(TestObject.class);
		prettyPrint(o);
		prettyPrint(o.getObject());
		
	}
	
	public void prettyPrint(Object...objects) {
		ObjectMapper om = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);
		for(Object o : objects) {
			try {
				System.err.println(om.writeValueAsString(o));
			} catch (Exception e) {
				// TODO: handle exception
			}
		}
		
	}
	
	
}
