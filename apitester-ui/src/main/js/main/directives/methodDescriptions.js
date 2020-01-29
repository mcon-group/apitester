angular.module("apitester").directive("methodDescriptions", function() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      descriptions: "="
    },
    templateUrl: "method_descriptions.html",
    link: function(scope) {
      console.log("method descriptions ", scope.descriptions);
    }
  };
});
