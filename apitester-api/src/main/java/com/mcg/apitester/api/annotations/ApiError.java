package com.mcg.apitester.api.annotations;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import org.springframework.http.HttpStatus;

@Retention(RetentionPolicy.RUNTIME)
public @interface ApiError {
	
	public HttpStatus value();
	public String description();
	

}
