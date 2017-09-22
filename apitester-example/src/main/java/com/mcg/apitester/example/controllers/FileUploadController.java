package com.mcg.apitester.example.controllers;

import java.util.HashMap;
import java.util.Map;

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
	public Map<String,Object> list1(
			@RequestParam MultipartFile file,
			@RequestParam String y
		) {
		Map<String,Object> out = new HashMap<>();
		out.put("fileName", file.getOriginalFilename());
		out.put("size", file.getSize());
		return out;
	}

	@RequestMapping(value="/upload_standalone",method=RequestMethod.POST)
	public Map<String,Object> list2(
			@RequestBody MultipartFile file,
			@RequestParam String y
			) {
		Map<String,Object> out = new HashMap<>();
		out.put("fileName", file.getOriginalFilename());
		out.put("size", file.getSize());
		return out;
	}

		
}
