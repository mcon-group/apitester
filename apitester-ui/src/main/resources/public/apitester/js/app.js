angular.module("templates", []).config(function() {
	console.log("templates - config: init()");
});
angular.module("apitester", [ "templates", "ngRoute", "restangular" ]);
angular.module("apitester").config(
		function($httpProvider, $routeProvider, $locationProvider, RestangularProvider) {
			RestangularProvider.setBaseUrl(window.location.pathname);
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
				"templateUrl" : "enpoint_list.html",
			});
			$routeProvider.otherwise({
				redirectTo : '/main'
			});
		});

angular.module("apitester").controller(
	"EndpointController",
	function($route,$scope,EndpointService) {
		console.log("endpoint controller instantiated");
		
		$scope.search = "";
		
		$scope.updateList = function() {
			var ne = [];
			_.each($scope.allEndpoints, function(endpoint) {
				if(endpoint.pattern.indexOf($scope.search)>-1) {
					console.log(endpoint.pattern+" DOES contain "+$scope.search);
					ne.push(endpoint);
				} else {
					console.log(endpoint.pattern+" does not contain "+$scope.search);
				}
			});
			$scope.endpoints = ne;
		}
		
		$scope.$on("methodSelected", function(e,endpoint) {
			$scope.selectedEndpoint = endpoint;
		})
		
		EndpointService.list(
				function(endpoints) {
					$scope.allEndpoints = endpoints;
					$scope.updateList();
				}
		);
	}
);
angular.module(
		'apitester'
).provider(
		'markdown', 
		function() {
			var opts = {};
			return {
				config : function(newOpts) {
					opts = newOpts;
				},
				$get : function() {
					return new window.showdown.Converter(opts);
				}
			};
		}
).directive('markdown', function( ) {
	return {
		scope: {
			markdown : "="
		},
		link : function(scope, element, attr) {
			converter = new showdown.Converter();
			scope.html=converter.makeHtml(scope.markdown || '');
			console.log("formatting : ",scope.markdown,scope.html);
			element.html(scope.html);
		}

	}
});
angular.module("apitester").directive(
	"endpoint",
	function($route,$templateCache,$controller,$compile) {
		return {
			transclude: true,
			scope: {
				endpoint : "="
			},
			templateUrl : "method_detail.html",
			link : function(scope) {
				scope.select = function() {
					console.log("method selected ... ");
					scope.$emit("methodSelected",scope.endpoint);
					scope.$broadcast("methodSelected",scope.endpoint);
				};
				scope.details = false;
			}
		}
	}
);
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