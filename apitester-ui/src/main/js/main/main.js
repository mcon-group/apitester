angular.module("templates", []).config(function() {
	console.log("templates - config: init()");
});
angular.module("apitester", [ "templates", "ngRoute", "restangular" ]);
angular.module("apitester").config(
		function($httpProvider, $routeProvider, $locationProvider, RestangularProvider) {
			var index = window.location.href.lastIndexOf('apitester');

			var prefix = window.location.href.substr(0, index);
			console.log("prefix: "+prefix);
			
			RestangularProvider.setBaseUrl(prefix);
			
			RestangularProvider.setFullResponse(true);
			RestangularProvider.setPlainByDefault(true);

			$httpProvider.interceptors.push(function($q, $location) {
				return {
					request : function(config) {
						console.log("rest request: ", config,
								window.location.pathname);
						return config;
					},
					response : function(response) {
						return response;
					},
					responseError : function(response) {
						return $q.reject(response);
					}
				}
			});
			$routeProvider.when("/main", {
				"controller" : "EndpointController",
				"templateUrl" : "endpoint_list.html",
			});
			$routeProvider.otherwise({
				redirectTo : '/main'
			});
		});
