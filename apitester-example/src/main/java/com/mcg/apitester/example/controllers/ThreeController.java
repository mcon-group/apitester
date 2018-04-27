package com.mcg.apitester.example.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api")
public class ThreeController {

	@RequestMapping(value="/three/wait",method=RequestMethod.GET)
	public boolean list(
			@RequestParam(required=false, defaultValue="2000") int wait,
			@RequestParam(required=false, defaultValue="false") boolean error
	) throws InterruptedException {
		Thread.currentThread().sleep(wait);
		if(error) {
			throw new RuntimeException();
		}
		return false;
	}
	
	
	@RequestMapping(value="/three/wait/{id}",method=RequestMethod.DELETE)
	public void delete(@PathVariable String id) {
		
	}
	
		
}
