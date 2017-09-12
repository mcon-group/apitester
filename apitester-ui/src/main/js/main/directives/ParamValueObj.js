angular.module(
  'apitester'
).directive('paramValueObj', function($timeout) {
  return {
    templateUrl: 'param_value_obj.html',
    scope: {
      param: '=',
      blur: '&',
    },
    link: function(scope, elmt) {
      var $textarea;

      scope.updateBody = updateBody;


      activate();


      /**
       * @name activate
       * @description functions to be called, and values to be set, when
       *    directive is activate
       * @return {undefined}
       */
      function activate() {
        $timeout(function() {
          $textarea = elmt.find('textarea');

          if (scope.param.paramType !== 'RETURN') {
            scope.updateBody(JSON.stringify(scope.param.object));
          }

          var $pre = $textarea.closest('.row').find('pre');
          $textarea.css({height: $pre.outerHeight()});
        }, 300);
      }

      /**
       * @name updateBody
       * @description udpate value for request body
       * @param {string} [value=param.value] - The stringified
       * body
       * @return {undefined}
       */
      function updateBody(value) {
        if (!value) {
          value = scope.param.value;
        }

        $textarea.removeClass('border-red');
        try {
          scope.param.value = JSON.stringify(
            JSON.parse(value.replace(/(\r\n|\n|\r)/gm, '')),
            null,
            2
          );
        } catch (error) {
          console.error(error);
          $textarea.addClass('border-red');
        }
      }
    },
  };
});
