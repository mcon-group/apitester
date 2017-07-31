package com.mcg.apitester.impl.entities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMethod;

public class Mapping {
	
	private List<String> patterns;
	private List<RequestMethod> methods;
	private MethodInfo methodInfo;
	
	public Mapping(
			Collection<String> patterns, 
			Collection<RequestMethod> methods,
			MethodInfo methodInfo
		) {
		this.patterns = new ArrayList<>(patterns);
		this.methods = new ArrayList<>(methods);
		this.setMethodInfo(methodInfo);
	}

	public List<String> getPatterns() {
		return patterns;
	}

	public void setPatterns(List<String> patterns) {
		this.patterns = patterns;
	}

	public List<RequestMethod> getMethods() {
		return methods;
	}

	public void setMethods(List<RequestMethod> methods) {
		this.methods = methods;
	}

	public MethodInfo getMethodInfo() {
		return methodInfo;
	}

	public void setMethodInfo(MethodInfo methodInfo) {
		this.methodInfo = methodInfo;
	}
	
	
}