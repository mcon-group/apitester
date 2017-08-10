package com.mcg.apitester.api.annotations;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface ApiExtraParams {

	public ApiExtraParam[] value() default {};
	
}
