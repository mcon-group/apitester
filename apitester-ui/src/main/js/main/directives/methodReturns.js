angular.module("apitester").directive("methodReturns", function() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      response: "="
    },
    templateUrl: "method_returns.html",
    link: function(scope) {
      console.log("method returns ", scope.response);
    }
  };
});
