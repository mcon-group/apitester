import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ParamService {
  constructor() {}

  /**
   * @name getDisplayedType
   * @description returns the name of the type that is to be displayed
   * @param {obj} param
   * @return {string}
   */
  getDisplayedType(param) {
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
  getEditType(param) {
    var output = "textarea";
    if (param.file) {
      output = "file";
    } else if (this.shouldUseInput(param)) {
      output = "input";
    } else if (this.shouldUseSelect(param)) {
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
  isReturnParam(param) {
    return param.paramType === "RETURN";
  }

  /**
   * @name setDisplayValues
   * @description set values in param.display
   * @param {obj} param
   * @return {undefined}
   */
  setDisplayValues(param) {
    param.display = {
      editType: this.getEditType(param),
      type: this.getDisplayedType(param)
    };
  }

  /**
   * @name shouldUseInput
   * @description check whether input-tag should be used for the parameter
   * @param {obj} param
   * @return {boolean}
   */
  shouldUseInput(param) {
    return (
      !this.isReturnParam(param) &&
      (param.primitive || param.typeShort === "Date")
    );
  }

  /**
   * @name shouldUseSelect
   * @description check whether select-tag should be used for the parameter
   * @param {obj} param
   * @return {boolean}
   */
  shouldUseSelect(param) {
    try {
      return !this.isReturnParam(param) && param.values.length;
    } catch (e) {
      return false;
    }
  }
}
