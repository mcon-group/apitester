package com.mcg.apitester.example.entities;

import java.util.Date;
import java.util.List;

public class OneEntity {

	private String id;
	private String name;
	private Date lastModified;
	private List<Pets> pets;
	private List<AnotherEntity> otherEntities;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getLastModified() {
		return lastModified;
	}

	public void setLastModified(Date lastModified) {
		this.lastModified = lastModified;
	}

	public List<AnotherEntity> getOtherEntities() {
		return otherEntities;
	}

	public void setOtherEntities(List<AnotherEntity> otherEntities) {
		this.otherEntities = otherEntities;
	}

	public List<Pets> getPets() {
		return pets;
	}

	public void setPets(List<Pets> pets) {
		this.pets = pets;
	}

}
