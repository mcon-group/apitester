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
				"templateUrl" : "endpoint_list.html",
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
		$scope.selected = "paths";
		
		$scope.updateList = function() {
			var ne = [];
			var np = [];
			console.log("checking endpoint: ", $scope.allEndpoints);
			_.each($scope.allEndpoints, function(endpoint) {
				if(endpoint.pattern.indexOf($scope.search)>-1) {
					ne.push(endpoint);
				}
			});
			console.log("checking paths: ", $scope.allPaths);
			_.each($scope.allPaths, function(path) {
				if(path.path.indexOf($scope.search)>-1) {
					np.push(path);
				}
			});
			$scope.paths = np;
			$scope.endpoints = ne;
		}
		
		$scope.$on("methodSelected", function(e,endpoint) {
			$scope.selectedEndpoint = endpoint;
		})
		
		EndpointService.listEndpoints(
				function(endpoints) {
					$scope.allEndpoints = endpoints;
					$scope.updateList();
				}
		);
		EndpointService.listPaths(
				function(paths) {
					$scope.allPaths = paths;
					$scope.updateList();
				}
		);
	}
);
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
angular.module("apitester").directive(
	"endpointTester",
	function($route,$templateCache,$controller,$compile) {
		return {
			transclude: true,
			scope: {
				endpointTester : "="
			},
			templateUrl : "method_tester.html",
			link : function(scope) {
				scope.endpoint = scope.endpointTester;
			}
		}
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
	"path",
	function($route,$templateCache,$controller,$compile) {
		return {
			transclude: true,
			scope: {
				path : "="
			},
			templateUrl : "path_info_detail.html",
			link : function(scope) {
				scope.mappings = [];
				scope.details = false;
				scope.selectMethod = function (method) {
					scope.selectedMethod = method; 
					var m = [];
					_.each(scope.path.mappings,function(mapping) {
						if(mapping.methods.includes(method)) {
							console.log(" --- "+method+" --- matches ");
							m.push(mapping);
						} else {
							console.log(" --- "+method+" --- does not match");
						}
					});
					scope.mappings = m;
				}
			}
		}
	}
);
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