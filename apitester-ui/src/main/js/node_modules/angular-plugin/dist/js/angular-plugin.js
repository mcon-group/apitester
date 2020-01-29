angular.module("angular-plugin",["ngRoute"]);
angular.module("angular-plugin")
.config(function($routeProvider,$locationProvider) {
		$locationProvider.hashPrefix('');
		// rember the route provider so we can retrieve it later ... 
		angular.module("angular-plugin").routeProvider = $routeProvider;
});

angular.module("angular-plugin").directive(
	"includeComponents",
	function(PluginMenuService,$route,$templateCache,$controller,$compile) {
		console.log($route);
		return {
			scope: {
				includeComponents : "@"
			},
			link: function(scope, el, attr, ctrl,transclude) {
				var items = PluginMenuService.get(scope.includeComponents);
				if(items.length > 0) {
					items.forEach(
						function(each) {
							
							templ = $templateCache.get(each.templateUrl);
							var child = $(templ)							
							el.append(child);
							var link = $compile(child.contents());

							childScope = scope.$new();
							
							if(each.controller) {
								var controller = $controller(each.controller, {});
								if(each.controllerAs) {
									childScope[each.controllerAs] = controller;
								}
							}
							childScope["component"] = each;
							childScope.$watch("component.visible", function(a,b,c,d) { if(a) { child.show() } else { child.hide() } });
							
							child.data('$ngControllerController', controller);
							
							console.log(child);
							
							link(childScope);
						}
					);
				}
			}
		}
	});
angular.module("angular-plugin").directive(
	"menuItem",
	function(PluginMenuService) {
		return {
			transclude: 'element',
			scope: {
				menuItem : "@"
			},
			link: function(scope, el, attr, ctrl, transclude) {
				var items = PluginMenuService.get(scope.menuItem);
				if(items.length > 0) {
					items.forEach(function(each){
						transclude(function(transEl,transScope) {
							transScope.item = each;
							transScope.children = PluginMenuService.get(each.path);
							transScope.$watch("item.visible", function(a,b,c,d) { if(a) { transEl.show() } else { transEl.hide() } });
							el.parent().append(transEl);
						});
					});
				} else {
					transclude(function(transEl,transScope) {
						el.hide();
					});
				}
			}
		}
	});
angular.module("angular-plugin").service("PluginMenuService" , function($route,$rootScope,$location) {
    	
    	var routeProvider = angular.module("angular-plugin").routeProvider;
    	
    	var menus = {};
    	
        return {
        	goto : function(route) {
        		if($location.path!=route) {
        			$location.path(route);
        		}
        	},
        	get : function(path) {
        		if(!menus[path]) {
        			return [];
        		}
        		return menus[path].children;
        	},
        	getItems : function() {
        		out = _.keys(menus);
        		out = _.sortBy(out,function(path){return path;});
        		return out;
        	},
        	getItem : function(path) {
        		console.log("one item: ",menus[path]);
        		return menus[path];
        	},
        	addItem : function(path,name,item) {

        		item.path = path+name;

        		$rootScope.$on("$locationChangeSuccess", function(e,u) { item.active = $location.path().startsWith(item.path);});
        		routeProvider.when(item.path,item);
        		
        		if(item['visible'] == 'undefined') {
        			item.visible = true;
        		}

        		item.active = $location.path().startsWith(item.path);
        		console.log(item.active);
        		
        		menus[path] = menus[path] || {children:[]};
	    		menus[path].children.push(item);
	    		menus[path].children = _.sortBy(menus[path].children,function(child){return child.order;});
	    		menus[path+name] = menus[path+name] || {children:[], item : item};
        	},
	    	setDefault : function(item) {
	    		routeProvider.otherwise(item);
	    	},
        	addRoute : function(path,item) {
        		routeProvider.when(path,item);
        	},
	    	setDefault : function(item) {
	    		routeProvider.otherwise(item);
	    	}
    	}
     });
