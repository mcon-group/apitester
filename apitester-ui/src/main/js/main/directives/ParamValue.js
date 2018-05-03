angular.module(
  'apitester'
).directive('paramValue', function() {
  return {
    templateUrl: 'param_value.html',
    scope: {
      param: '=',
    },
    link: function(scope) {
      scope.getDisplayedType = getDisplayedType;
      scope.isObjectParam = isObjectParam;

      /**
       * @name getDisplayedType
       * @description returns the name of the type that is to be displayed
       * @return {string}
       */
      function getDisplayedType() {
        var obj = scope.param;
        try {
          // RETURN
          if (obj.typeParameters.length) {
            obj = obj.typeParameters[0];
          }
        } catch (e) {
          try {
            if (obj.typeInfo.typeParameters.length) {
              obj = obj.typeInfo.typeParameters[0];
            }
          } catch (e) {
            //
          }
        }

        return obj.typeShort;
      }

      /**
       * @name isObjectParam
       * @return {boolean}
       */
      function isObjectParam() {
        return (
          scope.param.paramType === 'BODY' &&
          !scope.param.primitive &&
          !scope.param.file
        );
      }
    },
  };
});
