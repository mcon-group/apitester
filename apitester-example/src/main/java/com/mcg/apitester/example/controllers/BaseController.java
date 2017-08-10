package com.mcg.apitester.example.controllers;

import org.springframework.http.HttpStatus;

import com.mcg.apitester.api.annotations.ApiError;
import com.mcg.apitester.api.annotations.ApiErrors;
import com.mcg.apitester.api.annotations.ApiHeader;
import com.mcg.apitester.api.annotations.ApiHeaders;


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
public class BaseController {

}
