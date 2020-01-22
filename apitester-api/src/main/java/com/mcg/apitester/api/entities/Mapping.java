package com.mcg.apitester.api.entities;

import org.springframework.web.bind.annotation.RequestMethod;

public class Mapping {
	
	private String pattern;
	private RequestMethod method;
	private MethodInfo methodInfo;
	
	public Mapping(
			String pattern, 
			RequestMethod method,
			MethodInfo methodInfo
		) {
		this.pattern = pattern;
		this.setMethod(method);
		this.setMethodInfo(methodInfo);
	}

	public String getPattern() {
		return pattern;
	}

	public void setPattern(String pattern) {
		this.pattern = pattern;
	}

	public MethodInfo getMethodInfo() {
		return methodInfo;
	}

	public void setMethodInfo(MethodInfo methodInfo) {
		this.methodInfo = methodInfo;
	}

	public RequestMethod getMethod() {
		return method;
	}

	public void setMethod(RequestMethod method) {
		this.method = method;
	}
	
	
}