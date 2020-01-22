package com.mcg.apitester.api;

import java.util.List;

import com.mcg.apitester.api.entities.Mapping;

public interface ApiDecorator {

	public default void processMappings(List<Mapping> mappings) {
	}
	
	
}
