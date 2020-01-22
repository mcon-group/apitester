package com.mcg.apitester.api.entities;

import java.util.ArrayList;
import java.util.List;

public class MethodInfo {

	private String className;
	private String methodName;
	
	private boolean deprecated;
	
	private List<String> descriptions = new ArrayList<>();
	
	private List<ParameterInfo> params = new ArrayList<>();
	private TypeInfo returnType;
	
	private List<ApiReturnStatus> returnStatus = new ArrayList<>();
	private List<HeaderInfo> headerInfos = new ArrayList<>();
	
	public MethodInfo() {
	}

	public TypeInfo getReturnType() {
		return returnType;
	}

	public void setReturnType(TypeInfo returnType) {
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
		this.returnStatus.clear();
		if(returnStatus!=null) this.returnStatus.addAll(returnStatus);
	}

	public void addDescription(String d) {
		if(d==null) return;
		this.descriptions.add(d);
	}
	
	public List<String> getDescriptions() {
		return descriptions;
	}

	public void setDescriptions(List<String> descriptions) {
		this.descriptions.clear();
		if(descriptions!=null) {
			this.descriptions.addAll(descriptions);
		}
	}

	public List<HeaderInfo> getHeaderInfos() {
		return headerInfos;
	}

	public void setHeaderInfos(List<HeaderInfo> headerInfos) {
		this.headerInfos = headerInfos;
	}

}
