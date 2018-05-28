package com.mcg.apitester.documentation.services;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.commonmark.ext.front.matter.YamlFrontMatterNode;
import org.commonmark.node.AbstractVisitor;
import org.commonmark.node.CustomNode;
import org.commonmark.node.Heading;
import org.commonmark.node.Image;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class DocumentationVisitor extends AbstractVisitor {

	private Map<String, List<String>> data = new HashMap<>();

	private String relativePath;
	
	public DocumentationVisitor(File classpathElt, String relativePath) {
		this.relativePath = relativePath;
	}
	
	
	@Override
	public void visit(CustomNode customNode) {
		System.err.println("CustomNode: " + customNode.getClass());
		try {
			if (customNode instanceof YamlFrontMatterNode) {
				data.put(((YamlFrontMatterNode) customNode).getKey(), ((YamlFrontMatterNode) customNode).getValues());
				System.err.println("YAML: "+new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT).writeValueAsString(data));
			} else {
				super.visit(customNode);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public void visit(Image image) {
		try {
			System.err.println("IMAGE: "+image.getDestination());
			Resource resource = new ClassPathResource(relativePath+"/../"+image.getDestination());
			InputStream is = resource.getInputStream();
			
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			IOUtils.copy(is, baos);
			
			
			
			System.err.println(resource.getFilename()+" / "+baos.toByteArray().length);
		} catch (Exception e) {
			e.printStackTrace();
		}
		super.visit(image);
	}

	@Override
	public void visit(Heading heading) {
		System.err.println("Heading: " + heading.getLevel() + " / " + heading.getFirstChild().toString());
		super.visit(heading);
	}

	public Map<String, List<String>> getData() {
		return data;
	}

}
