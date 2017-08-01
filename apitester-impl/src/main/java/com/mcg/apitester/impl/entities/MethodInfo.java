package com.mcg.apitester.impl.entities;

import java.util.List;

public class MethodInfo {

	private String className;
	private String methodName;
	
	private String description;
	private boolean deprecated;
	
	private ParameterInfo returnType;
	private List<ParameterInfo> params;
	
	private List<ApiReturnStatus> returnStatus;
	
	public MethodInfo(String className, String methodName, ParameterInfo returnType, List<ParameterInfo> params) {
		this.returnType = returnType;
		this.params = params;
		this.className = className;
		this.methodName = methodName;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<ApiReturnStatus> getReturnStatus() {
		return returnStatus;
	}

	public void setReturnStatus(List<ApiReturnStatus> returnStatus) {
		this.returnStatus = returnStatus;
	}

}
