package com.mcg.apitester.impl.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mcg.apitester.api.annotations.ApiIgnore;
import com.mcg.apitester.impl.entities.Mapping;
import com.mcg.apitester.impl.services.EndpointService;

@RestController
@ApiIgnore
public class ApitesterEndpointController {

	@Autowired
	private EndpointService endpointService; 

	@RequestMapping(value="/apitester/endpoints",method=RequestMethod.GET)
	public List<Mapping> get() {
		return endpointService.getMappings();
	}
	
	
}
