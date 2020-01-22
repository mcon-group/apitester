package com.mcg.apitester.impl.entities;

import java.util.ArrayList;
import java.util.List;

import com.mcg.apitester.api.annotations.ParamType;

public class ParameterInfo {
	
	private boolean deprecated; 
	private boolean secret; 
	private boolean required = false; 
	private List<String> descriptions = new ArrayList<String>(); 
	private String name;
	private String defaultValue = "";
	private ParamType paramType;
	private TypeInfo typeInfo;
	
	public ParameterInfo() {
	}

	public ParamType getParamType() {
		return paramType;
	}

	public void setParamType(ParamType paramType) {
		this.paramType = paramType;
	}

	public boolean isRequired() {
		return required;
	}

	public void setRequired(boolean required) {
		this.required = required;
	}

	public String getDefaultValue() {
		return defaultValue;
	}

	public void setDefaultValue(String defaultValue) {
		this.defaultValue = defaultValue;
	}

	public boolean isDeprecated() {
		return deprecated;
	}

	public void setDeprecated(boolean deprecated) {
		this.deprecated = deprecated;
	}

	public List<String> getDescriptions() {
		return descriptions;
	}

	public void setDescriptions(List<String> descriptions) {
		this.descriptions.clear();
		if(descriptions==null) return;
		this.descriptions.addAll(descriptions);
	}

	public void addDescription(String description) {
		if(description==null) return;
		this.descriptions.add(description);
	}
	
	public Object[] getValues() {
		return typeInfo.getValues();
	}

	public TypeInfo getTypeInfo() {
		return typeInfo;
	}

	public void setTypeInfo(TypeInfo typeInfo) {
		this.typeInfo = typeInfo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isCollection() {
		return typeInfo.isCollection() || typeInfo.isArray();
	}

	public String getType() {
		return typeInfo.getType();
	}

	public String getTypeShort() {
		return typeInfo.getTypeShort();
	}

	public boolean isFile() {
		return typeInfo.isFile();
	}

	public boolean isPrimitive() {
		return typeInfo.isPrimitive();
	}

	public boolean isSecret() {
		return secret;
	}

	public void setSecret(boolean secret) {
		this.secret = secret;
	}

	public Object getObject() {
		return typeInfo.getObject();
	}
	
	
}
