package com.mcg.apitester.impl.entities;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.ResponseStatus;

import com.mcg.apitester.api.annotations.ApiError;
import com.mcg.apitester.api.annotations.ApiErrors;

public class ApiReturnStatus {

	private boolean def;
	private int status;
	private String name;
	private String description;

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isDef() {
		return def;
	}

	public void setDef(boolean def) {
		this.def = def;
	}

	
}
