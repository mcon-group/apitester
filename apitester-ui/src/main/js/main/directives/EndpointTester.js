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
				scope.data = {};
				scope.endpoint.methodInfo.params.forEach(
					function (each) {
						console.log(each.name+" : "+each.type);
						if(each.collection) {
							scope.data[each.name] = [];
						} else {
							scope.data[each.name] = "";
						}
					}
				);
			}
		}
	}
);