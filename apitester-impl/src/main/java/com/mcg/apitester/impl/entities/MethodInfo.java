package com.mcg.apitester.impl.entities;

import java.util.ArrayList;
import java.util.List;

public class MethodInfo {

	private String className;
	private String methodName;
	
	private boolean deprecated;
	
	private List<String> descriptions = new ArrayList<>();
	
	private List<ParameterInfo> params = new ArrayList<>();
	private ParameterInfo returnType;
	
	private List<ApiReturnStatus> returnStatus = new ArrayList<>();
	
	public MethodInfo() {
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

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getMethodName() {
		return methodName;
	}

	public void setMethodName(String methodName) {
		this.methodName = methodName;
	}

	public boolean isDeprecated() {
		return deprecated;
	}

	public void setDeprecated(boolean deprecated) {
		this.deprecated = deprecated;
	}

	public List<ApiReturnStatus> getReturnStatus() {
		return returnStatus;
	}

	public void setReturnStatus(List<ApiReturnStatus> returnStatus) {
		this.returnStatus = returnStatus;
	}

	public List<String> getDescriptions() {
		return descriptions;
	}

	public void setDescriptions(List<String> descriptions) {
		this.descriptions = descriptions;
	}

}
