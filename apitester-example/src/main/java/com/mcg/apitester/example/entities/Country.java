package com.mcg.apitester.example.entities;

public class Country {

	private String countryCode;

	public Country() {
	}
	
	public Country(String countryCode) {
		this.countryCode = countryCode;
	}
	
	public String getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

}
