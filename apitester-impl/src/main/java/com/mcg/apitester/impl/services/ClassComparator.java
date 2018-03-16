package com.mcg.apitester.impl.services;

import java.util.Comparator;

public class ClassComparator implements Comparator<Class<?>> {

	@Override
	public int compare(Class<?> o1, Class<?> o2) {
		return o1.getCanonicalName().compareTo(o2.getCanonicalName());
	}
	
}