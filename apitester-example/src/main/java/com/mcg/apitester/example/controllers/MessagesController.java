package com.mcg.apitester.example.controllers;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mcg.apitester.api.annotations.ApiDescription;

@RestController
@RequestMapping(value="/api")
public class MessagesController {
	
	@RequestMapping(value="/messages/text", method=RequestMethod.POST)
	@ApiDescription("Send message as text in the request body.")
	public void createText(
			@RequestBody @ApiDescription("The message to be sent") String message
	) {
		return ;
	}
}
