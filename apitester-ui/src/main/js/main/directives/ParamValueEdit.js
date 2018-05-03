angular.module(
  'apitester'
).directive('paramValueEdit', function($timeout) {
  return {
    templateUrl: 'param_value_edit.html',
    scope: {
      param: '=',
      blur: '&',
    },
    link: function(scope, elmt) {
      var $textarea;

      scope.addValue = addValue;
      scope.isReturnParam = isReturnParam;
      scope.removeValue = removeValue;
      scope.shouldUseInput = shouldUseInput;
      scope.shouldUseSelect = shouldUseSelect;
      scope.shouldUseTextarea = shouldUseTextarea;
      scope.triggerSelectFile = triggerSelectFile;
      scope.updateBody = updateBody;


      activate();


      /**
       * @name activate
       * @description functions to be called, and values to be set, when
       *    directive is activate
       * @return {undefined}
       */
      function activate() {
        if (scope.param.collection && scope.param.paramType === 'REQUEST') {
          scope.param.collectionValues = [];
          scope.param.newValue = '';
        }

        $timeout(function() {
          $textarea = elmt.find('textarea');
          var $pre = $textarea.closest('.row').find('pre');

          if ($textarea.length && $pre.length) {
            if (scope.param.paramType !== 'RETURN') {
              var value = scope.param.object;
              if (scope.param.collection) {
                value = [value];
              }
              scope.updateBody(JSON.stringify(value));
            }

            $textarea.css({height: $pre.outerHeight()});
          }

          elmt.find('input[type=file]').bind('change', function() {
            var files = elmt.find('input[type=file]')[0].files;
            if (files && files.length) {
              scope.fileName = files[0].name;
              scope.$digest();
            }
          });
        }, 200);
      }

      /**
       * @name addValue
       * @description add newValue to collectionValues
       * @return {undefined}
       */
      function addValue() {
        if (scope.param.newValue) {
          scope.param.collectionValues.push(scope.param.newValue);
          scope.param.newValue = '';
        }
      }

      /**
       * @name isReturnParam
       * @description check whether the parameter is a 'RETURN' parameter
       * @return {boolean}
       */
      function isReturnParam() {
        return scope.param.paramType === 'RETURN';
      }

      /**
       * @name removeValue
       * @description remove a value from collectionValues by index
       * @param {integer} index - index of the value in the collectionValues
       * @return {undefined}
       */
      function removeValue(index) {
        scope.param.collectionValues.splice(index, 1);
      }

      /**
       * @name shouldUseInput
       * @description check whether input-tag should be used for the parameter
       * @return {boolean}
       */
      function shouldUseInput() {
        return (
          !scope.isReturnParam() &&
          (scope.param.primitive || scope.param.typeShort === 'Date')
        );
      }

      /**
       * @name shouldUseSelect
       * @description check whether select-tag should be used for the parameter
       * @return {boolean}
       */
      function shouldUseSelect() {
        try {
          return !scope.isReturnParam() && scope.param.values.length;
        } catch (e) {
          return false;
        }
      }

      /**
       * @name shouldUseTextarea
       * @description check whether textarea-tag should be used for the
       *    parameter
       * @return {boolean}
       */
      function shouldUseTextarea() {
        return !scope.shouldUseInput() && !scope.shouldUseSelect();
      }

      /**
       * @name triggerSelectFile
       * @description trigger the file input button
       * @return {undefined}
       */
      function triggerSelectFile() {
        elmt.find('input[type=file]').click();
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
          console.log(error);
          $textarea.addClass('border-red');
        }
      }
    },
  };
});
