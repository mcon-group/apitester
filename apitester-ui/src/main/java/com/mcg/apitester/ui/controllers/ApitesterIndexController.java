package com.mcg.apitester.ui.controllers;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mcg.apitester.api.annotations.ApiIgnore;

@RestController
@ApiIgnore
public class ApitesterIndexController {

	@RequestMapping(value="/apitester",method=RequestMethod.GET)
	public String get(HttpServletRequest request, HttpServletResponse response) throws IOException {

		String prefix = request.getHeader("x-forwarded-prefix");
		prefix = prefix==null?"":prefix;

		String host = request.getHeader("x-forwarded-host");
		host = host==null?"":host;

		String proto = request.getHeader("x-forwarded-proto");
		proto = proto==null?"":proto+"://";

		response.setStatus(302);
		response.setHeader("Location", proto+host+prefix+"/apitester/index.html");
		return null;
	}
	
	
}
