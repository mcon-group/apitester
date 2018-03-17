package com.mcg.apitester.api.annotations;

import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@Inherited
public @interface ApiHeaders {

	public ApiHeader[] value() default {};
	
}
