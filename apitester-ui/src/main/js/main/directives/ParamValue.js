angular.module("apitester").directive("paramValue", function() {
  return {
    templateUrl: "param_value.html",
    scope: {
      param: "="
    }
  };
});
