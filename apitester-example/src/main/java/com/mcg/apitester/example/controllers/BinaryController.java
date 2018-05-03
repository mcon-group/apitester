package com.mcg.apitester.example.controllers;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mcg.apitester.api.annotations.ApiDescription;

@RestController
@RequestMapping(value="/api")
@ApiDescription("Example for binary responses. Per default, the 'Send' button would display the response in the text box. The button has also another option 'Send (new tab)' to make the request in another browser window. If a GET call returns a binary response, and if you expecte that the default button behaviour would be display the response in a new window tab, then please set a value for 'produces', and the default button would be 'Send (new tab)'.")
public class BinaryController {
	
	private String i = "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";
	

	@RequestMapping(value="/binary/one",method=RequestMethod.GET, produces="image/gif")
	public void one(
		@RequestParam(required=false) @ApiDescription("Some lucky number") Integer x,
		HttpServletResponse response
	) throws IOException {
		response.setHeader("Content-Type", "image/gif");
		response.getOutputStream().write(Base64.decodeBase64(i));
	}

	@GetMapping(value="/binary/two",produces="image/gif")
	public void two(HttpServletResponse response) throws IOException {
		response.setHeader("Content-Type", "image/gif");
		response.getOutputStream().write(Base64.decodeBase64(i));
	}
	
		
}
