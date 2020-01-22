package com.mcg.apitester.impl.entities;

import java.util.ArrayList;
import java.util.List;

public class TypeInfo {

	private boolean primitive;
	private boolean file;
	private boolean collection;
	private boolean array;
	private boolean map;
	private boolean loop;
	private boolean enumeration;
	private String type;
	private String typeShort;
	private List<String> contentTypes;
	private List<TypeInfo> typeParameters = new ArrayList<>();
	private List<FieldInfo> fields = new ArrayList<>();
	private Object[] values;
	private Object object;

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

	public boolean isMap() {
		return map;
	}

	public void setMap(boolean map) {
		this.map = map;
	}

	public Object getObject() {
		return object;
	}

	public void setObject(Object object) {
		this.object = object;
	}

	public List<TypeInfo> getTypeParameters() {
		return typeParameters;
	}

	public void setTypeParameters(List<TypeInfo> typeParameters) {
		this.typeParameters = typeParameters;
	}

	public boolean isArray() {
		return array;
	}

	public void setArray(boolean array) {
		this.array = array;
	}

	public List<FieldInfo> getFields() {
		return fields;
	}

	public void setFields(List<FieldInfo> fields) {
		this.fields = fields;
	}

	public boolean isLoop() {
		return loop;
	}

	public void setLoop(boolean loop) {
		this.loop = loop;
	}

	public boolean isEnumeration() {
		return enumeration;
	}

	public void setEnumeration(boolean enumeration) {
		this.enumeration = enumeration;
	}

	public Object[] getValues() {
		return values;
	}

	public void setValues(Object[] values) {
		this.values = values;
	}

	public List<String> getContentTypes() {
		return contentTypes;
	}

	public void setContentTypes(List<String> contentTypes) {
		this.contentTypes = contentTypes;
	}


}
