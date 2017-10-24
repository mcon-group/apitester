package com.mcg.apitester.impl.services.util;

import java.util.List;

import com.mcg.apitester.api.annotations.ApiDescription;

public class ReturnTypeDescriptionExample2 {

	@ApiDescription("a list of dogs")
	public  List<ReturnTypeDescriptionExample2Return> list() {
		return null;
	}
	
	
}
