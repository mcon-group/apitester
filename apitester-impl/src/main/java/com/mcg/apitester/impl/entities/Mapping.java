package com.mcg.apitester.impl.entities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMethod;

public class Mapping {
	
	private String pattern;
	private List<RequestMethod> methods;
	private MethodInfo methodInfo;
	
	public Mapping(
			String pattern, 
			Collection<RequestMethod> methods,
			MethodInfo methodInfo
		) {
		this.pattern = pattern;
		this.methods = new ArrayList<>(methods);
		this.setMethodInfo(methodInfo);
	}

	public String getPattern() {
		return pattern;
	}

	public void setPattern(String pattern) {
		this.pattern = pattern;
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