angular.module("apitester").service(
	"EndpointService",
	function($route,Restangular) {
		var s = {
				list : function(success,error) {
					Restangular.all("endpoints").getList().then(success,error);
				}
		}
		return s;
	}
);