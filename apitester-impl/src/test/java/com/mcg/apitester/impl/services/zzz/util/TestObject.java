package com.mcg.apitester.impl.services.zzz.util;

import java.util.List;

import org.springframework.web.bind.annotation.RequestParam;

public class TestObject {

	//private TestFoo f;
	private List<TestFoo> foos;
	private TestFoo[] bong;
	
	public int add(@RequestParam int a, @RequestParam int b) {
		return a+b;
	}
	
	public int addAll(@RequestParam Integer... values) {
		int out = 0;
		for(Integer i : values) {
			out = out + i.intValue();
		}
		return out;
	}

	/**
	public TestFoo getF() {
		return f;
	}


	public void setF(TestFoo f) {
		this.f = f;
	}
	 **/


	public List<TestFoo> getFoos() {
		return foos;
	}


	public void setFoos(List<TestFoo> foos) {
		this.foos = foos;
	}


	public TestFoo[] getBong() {
		return bong;
	}


	public void setBong(TestFoo[] bong) {
		this.bong = bong;
	}
	
}
