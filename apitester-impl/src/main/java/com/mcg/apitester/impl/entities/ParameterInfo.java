package com.mcg.apitester.impl.entities;

import com.mcg.apitester.api.annotations.ParamType;

public class ParameterInfo {
	
	private boolean deprecated; 
	private boolean primitive; 
	private boolean file; 
	private boolean collection; 
	private boolean required = false; 
	private String description; 
	private String name; 
	private String type; 
	private String typeShort; 
	private String defaultValue = ""; 
	private ParamType paramType;
	private Object object;
	
	public ParameterInfo() {
	}

	public ParameterInfo(boolean collection, String type, String typeShort) {
		super();
		this.collection = collection;
		this.type = type;
		this.typeShort = typeShort;
	}

	public boolean isCollection() {
		return collection;
	}

	public void setCollection(boolean collection) {
		this.collection = collection;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTypeShort() {
		return typeShort;
	}

	public void setTypeShort(String typeShort) {
		this.typeShort = typeShort;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
		Thread.dumpStack();
		System.err.println("default value set to: "+defaultValue);
		this.defaultValue = defaultValue;
	}

	public Object getObject() {
		return object;
	}

	public void setObject(Object object) {
		this.object = object;
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

	public boolean isFile() {
		return file;
	}

	public void setFile(boolean file) {
		this.file = file;
	}

	public boolean isPrimitive() {
		return primitive;
	}

	public void setPrimitive(boolean primitive) {
		this.primitive = primitive;
	}
	
	
}
