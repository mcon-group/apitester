package com.mcg.apitester.api.annotations;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface ApiExtraParam {

	public String name();
	public Class type();
	public ParamType paramType() default ParamType.REQUEST;
	public String description();
	public String defaultValue() default "";
	public boolean collection() default false;
	public boolean mandatory() default false;
	public boolean deprecated() default false;
	public boolean secret() default false;
	
}
