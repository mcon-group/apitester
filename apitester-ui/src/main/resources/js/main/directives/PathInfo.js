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