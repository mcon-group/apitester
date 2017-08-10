angular.module("apitester").service(
	"EndpointService",
	function($route,Restangular) {
		var s = {
			listEndpoints : function(success,error) {
				Restangular.all("endpoints").getList().then(success,error);
			},
			listPaths : function(success,error) {
				Restangular.all("paths").getList().then(success,error);
			}
		}
		return s;
	}
);