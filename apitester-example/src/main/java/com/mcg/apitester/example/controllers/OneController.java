package com.mcg.apitester.example.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mcg.apitester.example.entities.OneEntity;

@RestController
@RequestMapping(value="/api")
public class OneController {

	@RequestMapping(value="/one/entities",method=RequestMethod.GET)
	public List<OneEntity> list(@RequestParam String x, @RequestParam  String y, @RequestParam  int offset, @RequestParam int max, @RequestParam String orderBy) {
		return null;
	}

	@RequestMapping(value="/one/entities/{id}",method=RequestMethod.GET)
	public OneEntity get(@PathVariable String id, @RequestParam String y, @RequestParam int offset, @RequestParam int max, @RequestParam String orderBy) {
		return null;
	}
	
	
}
