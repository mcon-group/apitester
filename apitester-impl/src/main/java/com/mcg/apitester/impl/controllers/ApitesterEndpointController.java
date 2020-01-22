package com.mcg.apitester.impl.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mcg.apitester.api.annotations.ApiIgnore;
import com.mcg.apitester.api.entities.Mapping;
import com.mcg.apitester.api.entities.PathInfo;
import com.mcg.apitester.impl.services.EndpointService;

@RestController
@ApiIgnore
public class ApitesterEndpointController {

	@Autowired
	private EndpointService endpointService; 

	@RequestMapping(value="/apitester/endpoints",method=RequestMethod.GET)
	public List<Mapping> getMappings() throws ClassNotFoundException, LinkageError {
		return endpointService.getMappings();
	}
	
	@RequestMapping(value="/apitester/paths",method=RequestMethod.GET)
	public List<PathInfo> getPaths() throws ClassNotFoundException, LinkageError {
		return endpointService.getPathInfos();
	}
	
	
}
