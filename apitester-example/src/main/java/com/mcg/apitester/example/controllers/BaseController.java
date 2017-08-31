package com.mcg.apitester.example.controllers;

import org.springframework.http.HttpStatus;

import com.mcg.apitester.api.annotations.ApiDescription;
import com.mcg.apitester.api.annotations.ApiError;
import com.mcg.apitester.api.annotations.ApiErrors;
import com.mcg.apitester.api.annotations.ApiExtraParam;
import com.mcg.apitester.api.annotations.ApiExtraParams;
import com.mcg.apitester.api.annotations.ApiHeader;
import com.mcg.apitester.api.annotations.ApiHeaders;
import com.mcg.apitester.api.annotations.ParamType;


@ApiExtraParams(
	{
		@ApiExtraParam(type=String.class,name="apiKey",description="The API key to use with this request",paramType=ParamType.REQUEST),
		@ApiExtraParam(type=String.class,name="languages",description="Laguage wishlist, in order of preference",paramType=ParamType.REQUEST)
	}
)
@ApiDescription(file="/com/mcg/apitester/example/controllers/BaseController.md")
@ApiHeaders(
	{
		@ApiHeader(name="AUTHENTICATION", description="the value of the authentication token acquired through a call to /authentication")
	}
)
@ApiErrors(
	{
		@ApiError(value=HttpStatus.INTERNAL_SERVER_ERROR,description="If processing the request failed"),
		@ApiError(value=HttpStatus.UNAUTHORIZED,description="If the user is not authenticated"),
		@ApiError(value=HttpStatus.FORBIDDEN,description="If the user is authenticated, but doesn't have sufficient permissions")
	})
public class BaseController implements IController {

}
