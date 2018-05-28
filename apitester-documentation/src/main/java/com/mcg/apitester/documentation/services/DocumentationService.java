package com.mcg.apitester.documentation.services;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import javax.annotation.PostConstruct;

import org.apache.commons.io.IOUtils;
import org.commonmark.ext.front.matter.YamlFrontMatterExtension;
import org.commonmark.node.Node;
import org.commonmark.parser.Parser;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import io.github.lukehutch.fastclasspathscanner.FastClasspathScanner;
import io.github.lukehutch.fastclasspathscanner.matchprocessor.FileMatchProcessorWithContext;
import io.github.lukehutch.fastclasspathscanner.scanner.ScanResult;

@Service
public class DocumentationService {

	private ExecutorService e = Executors.newFixedThreadPool(10);
	
	@PostConstruct
	public void init() throws IOException, InterruptedException {
		
		System.err.println("documentation service init ... ");
		
		FastClasspathScanner fcs = new FastClasspathScanner();
		
		
		File documentationBase = File.createTempFile("documentation","markdown");
		
		
		fcs.matchFilenamePattern(".*documentation/.*\\.[mM][dD]", new FileMatchProcessorWithContext() {

			@Override
			public void processMatch(File arg0, String arg1, InputStream arg2, long arg3) throws IOException {

				try {
					System.err.println(arg0+" / "+arg1+" / "+arg3);
					
					ByteArrayOutputStream baos = new ByteArrayOutputStream();
					IOUtils.copy(arg2, baos);
					baos.flush();
					
					Parser parser = Parser.builder().extensions(Collections.singletonList(YamlFrontMatterExtension.create())).build();
					Node document = parser.parse(new String(baos.toByteArray(),"utf-8"));
					
					DocumentationVisitor v = new DocumentationVisitor(arg0,arg1 );
					
					document.accept(v);
					
					System.err.println(new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT).writeValueAsString(v.getData()));
					
				} catch (Exception e) {
					e.printStackTrace();
				}
				
				
			}
			
		});
		
		Future<ScanResult> res = fcs.scanAsync(e,10);
		e.execute(new ProcessDocumentation(res));
		
		Thread.sleep(2000);
		
		System.err.flush();
		System.err.println("documentation service init ... DONE!");
		System.exit(0);
		
	}

	private class ProcessDocumentation implements Runnable {
		
		private Future<ScanResult> res;
		
		public ProcessDocumentation(Future<ScanResult> res) {
			this.res = res;
		}
		
		@Override
		public void run() {
			try {
				res.get(); 
			} catch (Exception e) {
			}
			
		}
		
	}
	


}
