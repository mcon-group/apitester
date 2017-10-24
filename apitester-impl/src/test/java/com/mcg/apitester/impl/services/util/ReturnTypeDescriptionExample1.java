package com.mcg.apitester.impl.services.util;

import java.util.List;

import com.mcg.apitester.api.annotations.ApiDescription;

public class ReturnTypeDescriptionExample1 {

	@ApiDescription("a list of dogs")
	public  List<Object> list() {
		return null;
	}
	
	
}
