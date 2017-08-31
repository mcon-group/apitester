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