package com.mcg.apitester.impl.services;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.javaruntype.type.TypeParameter;
import org.javaruntype.type.Types;

public class ObjectIntrospection {
	
	
	public static Object createMap(Class<?> clazz, List<Class<?>> done) {
		if (done.contains(clazz)) {
			return "[loop detected]";
		}
		done = new ArrayList<Class<?>>(done);
		done.add(clazz);
		
		if (clazz.isEnum()) {
			try {
				List<String> ss = new ArrayList<>();
				for (Object s : clazz.getEnumConstants()) {
					ss.add(s.toString());
				}
				return ss;
			} catch (Exception e) {
				return null;
			}
		} else if (clazz.getCanonicalName().compareTo("long") == 0) {
			return 1l;
		} else if (clazz.getCanonicalName().compareTo("boolean") == 0) {
			return Boolean.FALSE;
		} else if (clazz.getCanonicalName().compareTo("double") == 0) {
			return new Double(0.5);
		} else if (clazz.getCanonicalName().compareTo("float") == 0) {
			return new Float(0.5);
		} else if (clazz.getCanonicalName().compareTo("int") == 0) {
			return 1;
		} else if (String.class.isAssignableFrom(clazz)) {
			return "a string";
		} else if (Boolean.class.isAssignableFrom(clazz)) {
			return new Boolean(true);
		} else if (Date.class.isAssignableFrom(clazz)) {
			return new Date();
		} else if (Integer.class.isAssignableFrom(clazz)) {
			return 1;
		} else if (Long.class.isAssignableFrom(clazz)) {
			return 1l;
		} else if (Boolean.class.isAssignableFrom(clazz)) {
			return true;
		} else if (Locale.class.isAssignableFrom(clazz)) {
			return Locale.GERMANY;
		} else {
			Map<String, Object> m = new LinkedHashMap<String, Object>();
			for (Method setMethod : clazz.getMethods()) {
				if (!Modifier.isPublic(setMethod.getModifiers()))
					continue;
				if (setMethod.getParameterTypes().length != 1)
					continue;
				if (setMethod.getName().startsWith("set") && setMethod.getReturnType().equals(void.class)) {
					// setter, check for a getter
					for (Method getMethod : clazz.getMethods()) {
						if (!Modifier.isPublic(getMethod.getModifiers()))
							continue;
						if (getMethod.getParameterTypes().length != 0)
							continue;
						if (setMethod.getParameterTypes()[0] != getMethod.getReturnType())
							continue;
						if (!(getMethod.getName().startsWith("is") || getMethod.getName().startsWith("get")))
							continue;

						String fieldname = setMethod.getName().substring(3);
						fieldname = fieldname.substring(0, 1).toLowerCase() + fieldname.substring(1);

						boolean collection = false;
						Class<?> fieldClass = setMethod.getParameterTypes()[0];

						org.javaruntype.type.Type<String> strType = (org.javaruntype.type.Type<String>) Types.forJavaLangReflectType(getMethod.getGenericReturnType());
						if (Collection.class.isAssignableFrom(strType.getRawClass())) {
							collection = true;
							for (TypeParameter<?> tp : strType.getTypeParameters()) {
								fieldClass = tp.getType().getRawClass();
							}
						}

						Object o = createMap(fieldClass, done);
						if (collection) {
							m.put(fieldname, new Object[] { o });
						} else {
							m.put(fieldname, o);
						}

					}
				}
			}
			return m;
		}
	}

}
