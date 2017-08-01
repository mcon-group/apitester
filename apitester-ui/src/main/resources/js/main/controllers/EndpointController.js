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
		
		EndpointService.list(
				function(endpoints) {
					$scope.allEndpoints = endpoints;
					$scope.updateList();
				}
		);
	}
);