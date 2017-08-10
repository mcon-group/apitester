package com.mcg.apitester.example.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mcg.apitester.api.annotations.ApiDescription;
import com.mcg.apitester.api.annotations.ApiError;
import com.mcg.apitester.api.annotations.ApiErrors;
import com.mcg.apitester.example.entities.OneEntity;

@RestController
@RequestMapping(value="/api")
@ApiDescription(file="/com/mcg/apitester/example/controllers/OneController.md")
public class OneController extends BaseController {

	@RequestMapping(value="/one/entities",method=RequestMethod.GET)
	public List<OneEntity> list(
			@RequestParam String x, 
			@RequestParam  String y, 
			@RequestParam @ApiDescription("Pagination: The offset") int offset, 
			@RequestParam @ApiDescription("Pagination: The maximum number of entries per page") int max, 
			@RequestParam @ApiDescription("The field to order by. One of 'name', 'date' or 'size'") String orderBy) {
		return null;
	}

	@RequestMapping(value="/one/entities/{id}",method=RequestMethod.GET)
	public OneEntity get(
			@PathVariable @ApiDescription("The ID of the entity to read") String id, 
			@RequestParam String y, 
			@RequestParam int offset, 
			@RequestParam int max, 
			@RequestParam String orderBy) {
		return null;
	}
	
	@ApiDescription(file="/com/mcg/apitester/example/controllers/OneController_create.md")
	@RequestMapping(value="/one/entities",method=RequestMethod.POST)
	public OneEntity create(@RequestBody OneEntity body) {
		return null;
	}
	
	
	@RequestMapping(value="/one/entities/{id}",method=RequestMethod.PUT)
	public OneEntity update(@PathVariable String id, @RequestBody OneEntity body) {
		return null;
	}
	
	@ApiErrors(
			{
				@ApiError(value=HttpStatus.CONFLICT,description="If the entity could not be deleted because another entity depends on it")
			})
	@ResponseStatus(code=HttpStatus.NO_CONTENT)
	@RequestMapping(value="/one/entities/{id}",method=RequestMethod.DELETE)
	public void delete(@PathVariable String id) {
	}
	
	
}
