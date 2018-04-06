package com.mcg.apitester.documentation.services;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import javax.annotation.PostConstruct;

import org.apache.commons.io.IOUtils;
import org.commonmark.node.BlockQuote;
import org.commonmark.node.BulletList;
import org.commonmark.node.Code;
import org.commonmark.node.CustomBlock;
import org.commonmark.node.CustomNode;
import org.commonmark.node.Document;
import org.commonmark.node.Emphasis;
import org.commonmark.node.FencedCodeBlock;
import org.commonmark.node.HardLineBreak;
import org.commonmark.node.Heading;
import org.commonmark.node.HtmlBlock;
import org.commonmark.node.HtmlInline;
import org.commonmark.node.Image;
import org.commonmark.node.IndentedCodeBlock;
import org.commonmark.node.Link;
import org.commonmark.node.ListItem;
import org.commonmark.node.Node;
import org.commonmark.node.OrderedList;
import org.commonmark.node.Paragraph;
import org.commonmark.node.SoftLineBreak;
import org.commonmark.node.StrongEmphasis;
import org.commonmark.node.Text;
import org.commonmark.node.ThematicBreak;
import org.commonmark.node.Visitor;
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
		
		fcs.matchFilenamePattern("documentation/.*\\.([mM][dD])", new FileMatchProcessorWithContext() {

			@Override
			public void processMatch(File arg0, String arg1, InputStream arg2, long arg3) throws IOException {

				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				IOUtils.copy(arg2, baos);
				baos.flush();
				
				Parser parser = Parser.builder().build();
				Node document = parser.parse(new String(baos.toByteArray(),"utf-8"));
			
				document.accept(new Visitor() {
					
					@Override
					public void visit(CustomNode arg0) {
						System.err.println("custom node: "+arg0.toString());
					}
					
					@Override
					public void visit(CustomBlock arg0) {
						System.err.println("custom block: "+arg0.toString());
					}
					
					@Override
					public void visit(Text arg0) {
						System.err.println("text: "+arg0.getLiteral());
					}
					
					@Override
					public void visit(StrongEmphasis arg0) {
						System.err.println("emphasis: "+arg0.toString());
					}
					
					@Override
					public void visit(SoftLineBreak arg0) {
						System.err.println("linebreak");
					}
					
					@Override
					public void visit(Paragraph arg0) {
						System.err.println("paragraph: "+arg0.toString());
						
					}
					
					@Override
					public void visit(OrderedList arg0) {
						System.err.println("ordered: "+arg0.toString());
						
					}
					
					@Override
					public void visit(ListItem arg0) {
						System.err.println("li: "+arg0.toString());
						
					}
					
					@Override
					public void visit(Link arg0) {
						System.err.println("link: "+arg0.getTitle()+" / "+arg0.getDestination());
						
					}
					
					@Override
					public void visit(IndentedCodeBlock arg0) {
						System.err.println("code: "+arg0.getLiteral());
					}
					
					@Override
					public void visit(Image arg0) {
						System.err.println("image: "+arg0.getTitle()+" / "+arg0.getDestination());
					}
					
					@Override
					public void visit(HtmlBlock arg0) {
						System.err.println("html: "+arg0.getLiteral());
						
					}
					
					@Override
					public void visit(HtmlInline arg0) {
						System.err.println("html: "+arg0.getLiteral());
						
					}
					
					@Override
					public void visit(ThematicBreak arg0) {
						// TODO Auto-generated method stub
						
					}
					
					@Override
					public void visit(Heading arg0) {
						// TODO Auto-generated method stub
						
					}
					
					@Override
					public void visit(HardLineBreak arg0) {
						// TODO Auto-generated method stub
						
					}
					
					@Override
					public void visit(FencedCodeBlock arg0) {
						// TODO Auto-generated method stub
						
					}
					
					@Override
					public void visit(Emphasis arg0) {
						// TODO Auto-generated method stub
						
					}
					
					@Override
					public void visit(Document arg0) {
						// TODO Auto-generated method stub
						
					}
					
					@Override
					public void visit(Code arg0) {
						// TODO Auto-generated method stub
						
					}
					
					@Override
					public void visit(BulletList arg0) {
						// TODO Auto-generated method stub
						
					}
					
					@Override
					public void visit(BlockQuote arg0) {
						// TODO Auto-generated method stub
						
					}
				});
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
