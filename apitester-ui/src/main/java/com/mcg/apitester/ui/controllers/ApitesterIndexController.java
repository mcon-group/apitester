package com.mcg.apitester.ui.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mcg.apitester.api.annotations.ApiIgnore;

@Controller
@ApiIgnore
public class ApitesterIndexController {

	@RequestMapping(value="/apitester",method=RequestMethod.GET)
	public String get() {
		return "apitester/index.html";
	}
	
	
}
