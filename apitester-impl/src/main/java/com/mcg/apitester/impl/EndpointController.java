package com.mcg.apitester.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EndpointController {

	@Autowired
	private EndpointService endpointService; 

	@RequestMapping(value="/apitester/endpoints",method=RequestMethod.GET)
	public List<Mapping> get() {
		return endpointService.getMappings();
	}
	
	
}
