angular.module("apitester").directive(
  "endpoint",
  function($timeout) {
    return {
      transclude: true,
      scope: {
        endpoint : "="
      },
      templateUrl : "method_detail.html",
      link : function(scope, elmt) {
        scope.select = function() {
          console.log("method selected ... ");
          scope.$emit("methodSelected",scope.endpoint);
          scope.$broadcast("methodSelected",scope.endpoint);
        };
        scope.details = false;


        var params = scope.endpoint.methodInfo.params;
        scope.pathParams = _.filter(params, function(param) {
          return param.paramType === 'PATH';
        });
        scope.requestParams = _.filter(params, function(param) {
          return param.paramType === 'REQUEST';
        });
        scope.requestBody = _.find(params, function(param) {
          return param.paramType === 'BODY';
        });
        scope.response = scope.endpoint.methodInfo.returnType;
      },
    };
  }
);
