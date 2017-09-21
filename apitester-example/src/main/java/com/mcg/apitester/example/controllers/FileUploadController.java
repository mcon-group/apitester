package com.mcg.apitester.example.controllers;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value="/api")
public class FileUploadController {

	@RequestMapping(value="/upload_form",method=RequestMethod.POST)
	public void list1(
			@RequestParam MultipartFile file
		) {
	}

	@RequestMapping(value="/upload_standalone",method=RequestMethod.POST)
	public void list2(
			@RequestBody MultipartFile file
			) {
	}

		
}
