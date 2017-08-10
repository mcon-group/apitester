package com.mcg.apitester.api.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(value={ ElementType.TYPE, ElementType.PARAMETER, ElementType.METHOD } )
public @interface ApiDescription {

	String value() default "";
	String file() default "";
	
}
