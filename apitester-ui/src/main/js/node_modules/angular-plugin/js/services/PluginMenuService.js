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
