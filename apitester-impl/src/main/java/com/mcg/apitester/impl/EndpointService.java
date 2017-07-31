package com.mcg.apitester.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import com.mcg.apitester.impl.entities.Mapping;
import com.mcg.apitester.impl.entities.MethodInfo;

@Service
public class EndpointService {
	
	private List<Mapping> mappings;

	@Autowired
	private RequestMappingHandlerMapping handlerMapping;

	
	public List<Mapping> getMappings() {
		if(mappings==null) {
			mappings = getMappingsInternal();
		}
		return mappings;
	}


	private List<Mapping> getMappingsInternal() {
		List<Mapping> out = new ArrayList<>();
		Map<RequestMappingInfo, HandlerMethod> map = this.handlerMapping.getHandlerMethods();
		for(Entry<RequestMappingInfo,HandlerMethod> e : map.entrySet()) {
			
			RequestMappingInfo rmi = e.getKey();
			HandlerMethod hm = e.getValue();
			
			Set<String> patterns = rmi.getPatternsCondition().getPatterns(); 
			Set<RequestMethod> methods = rmi.getMethodsCondition().getMethods();
			
			MethodInfo methodInfo = EndpointIntrospection.getMethodInfo(hm.getBeanType(),hm.getMethod(),hm.getMethodParameters());
			
			Mapping mapping = new Mapping(patterns,methods,methodInfo);
			out.add(mapping);
		}
		Collections.sort(
			out,
			new Comparator<Mapping>() {

				@Override
				public int compare(Mapping o1, Mapping o2) {
					List<String> a = o1.getPatterns();
					List<String> b = o2.getPatterns();
					Collections.sort(a);
					Collections.sort(a);
					String as = a.size()>0?a.get(0):"";
					String bs = b.size()>0?b.get(0):"";
					return as.compareTo(bs);
				}
				
			}
		);
		
		return out;
	}
	
	
	

}
