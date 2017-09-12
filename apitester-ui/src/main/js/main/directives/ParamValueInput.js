angular.module(
  'apitester'
).directive('paramValueInput', function() {
  return {
    templateUrl: 'param_value_input.html',
    scope: {
      param: '=',
    },
  };
});
