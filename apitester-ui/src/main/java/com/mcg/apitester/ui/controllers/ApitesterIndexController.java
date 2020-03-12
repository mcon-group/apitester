package com.mcg.apitester.ui.controllers;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.mcg.apitester.api.annotations.ApiIgnore;

@RestController
@ApiIgnore
public class ApitesterIndexController {

	@RequestMapping(value="/apitester",method=RequestMethod.GET)
	public String get(HttpServletRequest request, HttpServletResponse response) throws IOException {

		try {
			System.err.println(" === TUTTI ===> "+ new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT).writeValueAsString(request));
		} catch (Exception e) {
			
		}
		String prefix = "";
		{
			Enumeration<String> x = request.getHeaders("x-forwarded-prefix");
			if(x.hasMoreElements()) prefix = x.nextElement();
		}
		
		String host = "";
		{
			Enumeration<String> x = request.getHeaders("x-forwarded-host");
			if(x.hasMoreElements()) host = x.nextElement().split(",")[0];
		}
		
		String proto = "https";
		{
			Enumeration<String> x = request.getHeaders("x-forwarded-proto");
			if(x.hasMoreElements()) proto = x.nextElement().split(",")[0];
		}

		
		
		response.setStatus(302);
		response.setHeader("Location", proto+"://"+host+prefix+"/apitester/index.html");
		return null;
	}
	
	
}
