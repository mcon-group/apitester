angular.module("apitester").directive("returnStatus", function() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      status: "="
    },
    templateUrl: "method_return_status.html",
    link: function(scope) {
      console.log("method status ", scope.status);
    }
  };
});
