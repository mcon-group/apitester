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
				scope.execute = false;
				scope.details = false;
				scope.toggleExecute = function() {
					scope.execute = !scope.execute;
				};
				scope.selectMethod = function (method) {
					if(scope.selectedMethod == method) {
						method = 'none';
					}
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
				};
			}
		}
	}
);