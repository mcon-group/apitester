package com.mcg.apitester.impl.services;

import java.util.List;

public class EntityWithEnums {

	private enum A {
		X, Y, Z
	};

	private A a;
	private SimpleEnum b;
	private List<SimpleEnum> c;

	public A getA() {
		return a;
	}

	public void setA(A a) {
		this.a = a;
	}

	public SimpleEnum getB() {
		return b;
	}

	public void setB(SimpleEnum b) {
		this.b = b;
	}

	public List<SimpleEnum> getC() {
		return c;
	}

	public void setC(List<SimpleEnum> c) {
		this.c = c;
	}

}
