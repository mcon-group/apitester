package com.mcg.apitester.example.entities;

import java.util.Date;
import java.util.List;

import com.mcg.apitester.api.annotations.ApiDescription;

@ApiDescription(value="represents an entity")
public class OneEntity {

	private String id;
	private long timestamp;
	private String name;
	private Date lastModified;
	private Pets mainPet;
	private List<Pets> pets;
	private List<AnotherEntity> otherEntities;
	private int[] values;
	private Pets[] petArray;
	

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

	public Pets getMainPet() {
		return mainPet;
	}

	public void setMainPet(Pets mainPet) {
		this.mainPet = mainPet;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	public int[] getValues() {
		return values;
	}

	public void setValues(int[] values) {
		this.values = values;
	}

	public Pets[] getPetArray() {
		return petArray;
	}

	public void setPetArray(Pets[] petArray) {
		this.petArray = petArray;
	}

}
