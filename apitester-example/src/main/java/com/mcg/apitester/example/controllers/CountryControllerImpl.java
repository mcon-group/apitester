package com.mcg.apitester.example.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mcg.apitester.example.entities.Country;

@RestController
@RequestMapping(value="/api/countries")
public class CountryControllerImpl {

	@RequestMapping(value="",method=RequestMethod.GET)
	public List<Country> list() {
		return null;
	}
	
	@RequestMapping(value="",method=RequestMethod.POST)
	public Country create(@Valid @RequestBody Country country) {
		return null;
	}
	
	@RequestMapping(value="/{countryCode}",method=RequestMethod.GET)
	public Country get(@PathVariable String countryCode) throws RuntimeException {
		return null;
	}
	
	@RequestMapping(value="/{countryCode}",method=RequestMethod.DELETE)
	public void delete(@PathVariable String countryCode) {
	}
	
	
}
