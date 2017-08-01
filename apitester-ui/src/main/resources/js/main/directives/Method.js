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