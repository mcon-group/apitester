package com.mcg.apitester.impl.services;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import com.mcg.apitester.api.annotations.ApiIgnore;
import com.mcg.apitester.impl.entities.Mapping;
import com.mcg.apitester.impl.entities.MethodInfo;
import com.mcg.apitester.impl.entities.PathInfo;

@Service
public class EndpointService {
	
	private List<Mapping> mappings;

	private List<PathInfo> paths;

	@Autowired
	private RequestMappingHandlerMapping handlerMapping;

	
	public List<Mapping> getMappings() throws ClassNotFoundException, LinkageError {
		if(mappings==null) {
			mappings = getMappingsInternal();
		}
		return mappings;
	}


	public List<PathInfo> getPathInfos() throws ClassNotFoundException, LinkageError {
		if(paths==null) {
			paths = getPathsInternal();
		}
		return paths;
	}
	
	private List<PathInfo> getPathsInternal() throws ClassNotFoundException, LinkageError {
		Map<String,PathInfo> infos = new HashMap<>();
		for(Mapping m : getMappings()) {
			PathInfo pi = infos.get(m.getPattern()); 
			if(pi==null) pi = new PathInfo();
			pi.getMappings().add(m);
			pi.setPath(m.getPattern());
			infos.put(m.getPattern(), pi);
		}
		List<PathInfo> out = new ArrayList<>(infos.values());
		Collections.sort(out, new Comparator<PathInfo>() {
			@Override
			public int compare(PathInfo o1, PathInfo o2) {
				return o1.getPath().compareTo(o2.getPath());
			}
		});
		
		return out;
	}
	
	private List<Mapping> getMappingsInternal() throws ClassNotFoundException, LinkageError {
		List<Mapping> out = new ArrayList<>();
		Map<RequestMappingInfo, HandlerMethod> map = this.handlerMapping.getHandlerMethods();
		for(Entry<RequestMappingInfo,HandlerMethod> e : map.entrySet()) {
			
			RequestMappingInfo rmi = e.getKey();
			HandlerMethod hm = e.getValue();

			if(hm.getMethod().getAnnotation(ApiIgnore.class)!=null) continue;
			if(hm.getBean().getClass().getAnnotation(ApiIgnore.class)!=null) continue;
			
			Set<String> patterns = rmi.getPatternsCondition().getPatterns(); 
			Set<RequestMethod> methods = rmi.getMethodsCondition().getMethods();
			
			MethodParameter[] params = hm.getMethodParameters();
			Class[] paramClasses = new Class[hm.getMethodParameters().length];
			for(int i=0; i < params.length;i++) {
				paramClasses[i] = params[i].getParameterType();
			}

			Method m = Introspection2.findMethod(hm.getBeanType(),hm.getMethod().getName(),paramClasses);
			if(m==null) continue;

			
			MethodInfo mi = Introspection2.getMethodInfo(hm.getBeanType(),m);
			if(mi==null) continue;
			
			//MethodInfo methodInfo = Introspection2.getMethodInfo(m)(hm.getBeanType(),hm.getMethod(),hm.getMethodParameters());
			if(mi!=null) {
				for(String pattern : patterns) {
					for(RequestMethod method: methods) {
						Mapping mapping = new Mapping(pattern,method,mi);
						out.add(mapping);
					}
				}
			}
		}
		Collections.sort(
			out,
			new Comparator<Mapping>() {

				@Override
				public int compare(Mapping o1, Mapping o2) {
					return o1.getPattern().compareTo(o2.getPattern());
				}
				
			}
		);
		
		return out;
	}
	
	
	

}
