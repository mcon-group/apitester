package com.mcg.apitester.example.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value="/api")
public class FileUploadController {

	@RequestMapping(value="/upload",method=RequestMethod.POST)
	public void list(
			@RequestParam MultipartFile file
		) {
	}

		
}
