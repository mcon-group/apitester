package com.mcg.apitester.api.entities;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMethod;

public class PathInfo {

	private String path;
	private List<Mapping> mappings = new ArrayList<>();
	
	public PathInfo() {
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public List<Mapping> getMappings() {
		return mappings;
	}

	public void setMappings(List<Mapping> mappings) {
		this.mappings = mappings;
	}

	public void setMethods(List<RequestMethod> methods) {
	}
	
	public List<RequestMethod> getMethods() {
		List<RequestMethod> out = new ArrayList<>();
		for(Mapping mp : mappings) {
			if(!out.contains(mp.getMethod())) {
				out.add(mp.getMethod());
			}
		}
		Collections.sort(out);
		return out;
	}
	
	
	
}
