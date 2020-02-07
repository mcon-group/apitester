angular.module("apitester").service("ParamService", function() {
  var service = {
    getDisplayedType: getDisplayedType,
    getEditType: getEditType,
    isReturnParam: isReturnParam,
    setDisplayValues: setDisplayValues,
    shouldUseInput: shouldUseInput,
    shouldUseSelect: shouldUseSelect
  };

  return service;

  /**
   * @name getDisplayedType
   * @description returns the name of the type that is to be displayed
   * @param {obj} param
   * @return {string}
   */
  function getDisplayedType(param) {
    var obj = param;
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
   * @name getEditType
   * @description decides which type of input element to be used.
   * @param {obj} param
   * @return {string} valid values: ['file', 'input', 'select', 'textarea']
   */
  function getEditType(param) {
    var output = "textarea";
    if (param.file) {
      output = "file";
    } else if (service.shouldUseInput(param)) {
      output = "input";
    } else if (service.shouldUseSelect(param)) {
      output = "select";
    }
    return output;
  }

  /**
   * @name isReturnParam
   * @description check whether the parameter is a 'RETURN' parameter or not
   * @param {object} param
   * @return {boolean}
   */
  function isReturnParam(param) {
    return param.paramType === "RETURN";
  }

  /**
   * @name setDisplayValues
   * @description set values in param.display
   * @param {obj} param
   * @return {undefined}
   */
  function setDisplayValues(param) {
    param.display = {
      editType: service.getEditType(param),
      type: service.getDisplayedType(param)
    };
  }

  /**
   * @name shouldUseInput
   * @description check whether input-tag should be used for the parameter
   * @param {obj} param
   * @return {boolean}
   */
  function shouldUseInput(param) {
    return (
      !service.isReturnParam(param) &&
      (param.primitive || param.typeShort === "Date")
    );
  }

  /**
   * @name shouldUseSelect
   * @description check whether select-tag should be used for the parameter
   * @param {obj} param
   * @return {boolean}
   */
  function shouldUseSelect(param) {
    try {
      return !service.isReturnParam(param) && param.values.length;
    } catch (e) {
      return false;
    }
  }
});
