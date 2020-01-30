package com.mcg.apitester.example.controllers;

import com.mcg.apitester.api.annotations.ApiExtraParam;
import com.mcg.apitester.api.annotations.ApiExtraParams;
import com.mcg.apitester.api.annotations.ParamType;
import com.mcg.apitester.example.entities.Pets;

@ApiExtraParams(
		{
			//@ApiExtraParam(type=String.class,name="contextHeaderToken",description="The context key to use with this request",paramType=ParamType.REQUEST),
			//@ApiExtraParam(type=Pets.class,name="favouriteAnimal",description="The context key to use with this request",paramType=ParamType.REQUEST),
		}
	)
public interface IController {

}
