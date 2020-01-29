angular.module("apitester").directive("methodeHeaders", function() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      headers: "="
    },
    templateUrl: "method_headers.html",
    link: function(scope) {
      console.log("method headers ", scope.headers);
    }
  };
});
