angular.module("apitester").service(
	"EndpointService",
	function($route,Restangular) {
		var pathPrefix = window.location.pathname.substr(1);
		var s = {
			listEndpoints : function(success,error) {
				Restangular.one(pathPrefix, "endpoints").get().then(success,error);
			},
			listPaths : function(success,error) {
				Restangular.one(pathPrefix, "paths").get().then(success,error);
			}
		}
		return s;
	}
);
