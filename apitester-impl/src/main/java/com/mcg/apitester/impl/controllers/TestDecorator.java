package com.mcg.apitester.impl.controllers;

import java.util.List;

import org.springframework.stereotype.Component;

import com.mcg.apitester.api.ApiDecorator;
import com.mcg.apitester.api.entities.Mapping;

@Component
public class TestDecorator implements ApiDecorator {

	@Override
	public void processMappings(List<Mapping> mappings) {
		mappings.forEach((m) -> { 
			m.setPattern("/foo"+m.getPattern());
		});
		ApiDecorator.super.processMappings(mappings);
	}
	
}
