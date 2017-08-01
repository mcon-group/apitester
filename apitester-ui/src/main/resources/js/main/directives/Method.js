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
			}
		}
	}
);