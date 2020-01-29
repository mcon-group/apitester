angular.module("apitester").directive("methodController", function() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      controller: "="
    },
    templateUrl: "method_controller.html",
    link: function(scope) {
      console.log("method controller ", scope.controller);
    }
  };
});
