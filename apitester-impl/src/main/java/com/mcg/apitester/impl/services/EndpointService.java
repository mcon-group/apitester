package com.mcg.apitester.impl.services;

import com.mcg.apitester.api.annotations.ApiIgnore;
import com.mcg.apitester.impl.entities.Mapping;
import com.mcg.apitester.impl.entities.MethodInfo;
import com.mcg.apitester.impl.entities.ParameterInfo;
import com.mcg.apitester.impl.entities.PathInfo;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import java.util.*;

@Service
public class EndpointService {

	private static final Log logger = LogFactory.getLog(EndpointService.class);

	private final RequestMappingHandlerMapping handlerMapping;

	private List<Mapping> mappings;
	private List<PathInfo> paths;
	private List<ParameterInfo> globalOperationParameters = new ArrayList<>();

	@Autowired
	public EndpointService(RequestMappingHandlerMapping handlerMapping) {
		this.handlerMapping = handlerMapping;
	}

	public List<ParameterInfo> getGlobalOperationParameters() {
		return globalOperationParameters;
	}

	public List<Mapping> getMappings() {
		if (mappings == null) {
			mappings = getMappingsInternal();
		}
		return mappings;
	}

	public List<PathInfo> getPathInfos() {
		if (paths == null) {
			paths = getPathsInternal();
		}
		return paths;
	}

	private List<PathInfo> getPathsInternal() {
		Map<String, PathInfo> infos = new HashMap<>();

		for (Mapping mapping : getMappings()) {
			PathInfo pathInfo = infos.computeIfAbsent(mapping.getPattern(), pattern -> new PathInfo());

			pathInfo.getMappings().add(mapping);
			pathInfo.setPath(mapping.getPattern());
		}

		List<PathInfo> out = new ArrayList<>(infos.values());
		out.sort(Comparator.comparing(PathInfo::getPath));

		return out;
	}

	private synchronized List<Mapping> getMappingsInternal() {
		List<Mapping> out = new ArrayList<>();

		handlerMapping.getHandlerMethods().forEach((requestMappingInfo, handlerMethod) -> {
			if (handlerMethod.getMethod().getAnnotation(ApiIgnore.class) != null ||
					handlerMethod.getBean().getClass().getAnnotation(ApiIgnore.class) != null) {
				return;
			}

			Set<String> patterns = requestMappingInfo.getPatternsCondition().getPatterns();
			Set<RequestMethod> methods = requestMappingInfo.getMethodsCondition().getMethods();

			MethodInfo methodInfo = getMethodInfo(handlerMethod);
			if (methodInfo == null) return;

			methodInfo.setParams(prependGlobalOperationParameters(methodInfo.getParams()));

			for (String pattern : patterns) {
				for (RequestMethod method : methods) {
					out.add(new Mapping(pattern, method, methodInfo));
				}
			}
		});

		out.sort(Comparator.comparing(Mapping::getPattern));

		return out;
	}

	private MethodInfo getMethodInfo(HandlerMethod handlerMethod) {
		try {
			return Introspection.getMethodInfo(handlerMethod.getBeanType(), handlerMethod.getMethod());

		} catch (ClassNotFoundException ex) {
			logger.warn(ex.getMessage(), ex);
		}

		return null;
	}

	private List<ParameterInfo> prependGlobalOperationParameters(List<ParameterInfo> operationParameters) {
		Map<String, ParameterInfo> operationDefinedParameters = new LinkedHashMap<>();
		if (!CollectionUtils.isEmpty(operationParameters)) {
			operationParameters.forEach(parameter -> operationDefinedParameters.put(parameter.getName(), parameter));
		}

		// First add global parameters
		List<ParameterInfo> out = new ArrayList<>();
		for (ParameterInfo globalOperationParameter : getGlobalOperationParameters()) {
			if (operationDefinedParameters.containsKey(globalOperationParameter.getName())) {
				out.add(operationDefinedParameters.remove(globalOperationParameter.getName()));
			} else {
				out.add(globalOperationParameter);
			}
		}

		// Finally add method defined parameters
		out.addAll(operationDefinedParameters.values());

		return out;
	}

}
