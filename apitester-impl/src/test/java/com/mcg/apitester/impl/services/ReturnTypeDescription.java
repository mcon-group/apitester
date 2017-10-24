package com.mcg.apitester.impl.services;

import java.lang.reflect.Method;

import org.junit.Assert;
import org.junit.Test;

import com.mcg.apitester.impl.entities.ParameterInfo;
import com.mcg.apitester.impl.services.util.ReturnTypeDescriptionExample1;
import com.mcg.apitester.impl.services.util.ReturnTypeDescriptionExample2;

public class ReturnTypeDescription {
	
	
	@Test
	public void testApiDescription1() throws NoSuchMethodException, SecurityException {
		Method m = ReturnTypeDescriptionExample1.class.getMethod("list");
		ParameterInfo pi = EndpointIntrospection.getReturnTypeInfo(ReturnTypeDescriptionExample1.class, m);
		Assert.assertEquals(0, pi.getDescriptions().size());
	}
	
	
	@Test
	public void testApiDescription2() throws NoSuchMethodException, SecurityException {
		Method m = ReturnTypeDescriptionExample2.class.getMethod("list");
		ParameterInfo pi = EndpointIntrospection.getReturnTypeInfo(ReturnTypeDescriptionExample2.class, m);
		Assert.assertEquals(1, pi.getDescriptions().size());
	}
	
	
	

}
