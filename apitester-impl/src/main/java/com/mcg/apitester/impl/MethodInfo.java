package com.mcg.apitester.impl;

import java.util.List;

public class MethodInfo {

	private ParameterInfo returnType;
	private List<ParameterInfo> params;
	
	public MethodInfo(ParameterInfo returnType, List<ParameterInfo> params) {
		this.returnType = returnType;
		this.params = params;
	}

	public ParameterInfo getReturnType() {
		return returnType;
	}

	public void setReturnType(ParameterInfo returnType) {
		this.returnType = returnType;
	}

	public List<ParameterInfo> getParams() {
		return params;
	}

	public void setParams(List<ParameterInfo> params) {
		this.params = params;
	}

}
