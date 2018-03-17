package com.mcg.apitester.documentation.services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import javax.annotation.PostConstruct;

import org.commonmark.node.Node;
import org.commonmark.parser.Parser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import io.github.lukehutch.fastclasspathscanner.FastClasspathScanner;
import io.github.lukehutch.fastclasspathscanner.matchprocessor.FileMatchProcessorWithContext;
import io.github.lukehutch.fastclasspathscanner.scanner.ScanResult;

@Service
public class DocumentationService {

	private ExecutorService e = Executors.newFixedThreadPool(10);
	
	@Autowired
	private ApplicationContext ctx;
	
	@PostConstruct
	public void init() throws IOException {
		
		System.err.println("documentation service init ... ");
		
		FastClasspathScanner fcs = new FastClasspathScanner();
		
		fcs.matchFilenamePattern("documentation/.*\\.([mM][dD]|[jJ][pP][gG]|[pP][nN][gG])", new FileMatchProcessorWithContext() {

			@Override
			public void processMatch(File arg0, String arg1, InputStream arg2, long arg3) throws IOException {

				//Parser parser = Parser.builder().build();
				//Node document = parser.parse();
				
				System.err.println(arg0+" / "+arg1+" / "+arg3);
			}
			
		});
		
		Future<ScanResult> res = fcs.scanAsync(e,10);
		e.execute(new ProcessDocumentation(res));
		
		
		System.err.println("documentation service init ... DONE!");
		
		
	}

	private class ProcessDocumentation implements Runnable {
		
		private Future<ScanResult> res;
		
		public ProcessDocumentation(Future<ScanResult> res) {
			this.res = res;
		}
		
		@Override
		public void run() {
			try {
				ScanResult sr = res.get(); 
			} catch (Exception e) {
			}
			
		}
		
	}
	


}
