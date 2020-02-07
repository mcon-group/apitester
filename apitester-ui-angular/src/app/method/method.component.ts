import { HttpClient } from "@angular/common/http";
import { Restangular } from "ngx-restangular";
import { ParamService } from "./../param.service";
import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { _ } from "underscore";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-method",
  templateUrl: "./method.component.html",
  styleUrls: ["./method.component.css"]
})
export class MethodComponent implements OnInit {
  @Input() method: any;
  private pathParams;
  private headerParams;
  private requestParams;
  private requestBody;
  private fileParam;
  private response;
  private startTime;
  private loading;
  private timerEnabled;
  private timer;
  private sendButtonTimer;

  constructor(
    private paramService: ParamService,
    private restangular: Restangular,
    private http: HttpClient,
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer
  ) {}

  /**
   * @name ngOnInit
   * @description functions to be called, and values to be set, when
   *    directive is activate
   * @return {undefined}
   */

  ngOnInit() {
    console.log("THE METHOD : ", this.method);

    let params = this.method.methodInfo.params;

    _.each(params, param => {
      this.paramService.setDisplayValues(param);
    });

    this.pathParams = _.filter(params, param => {
      return param.paramType === "PATH";
    });

    this.headerParams = _.filter(params, param => {
      return param.paramType === "HEADER";
    });

    this.requestParams = _.filter(params, param => {
      return param.paramType === "REQUEST";
    });

    this.requestBody = _.find(params, param => {
      return param.paramType === "BODY";
    });

    this.fileParam = _.find(params, param => {
      return param.file;
    });

    this.response = this.method.methodInfo.returnType;

    this.response.paramType = "RETURN";

    this.paramService.setDisplayValues(this.response);
  }

  /**
   * @name getApiPath
   * @description Returns the API path having Path Parameters set, if
   *    given
   * @return {string} apiPath - The API path used by Restangular
   */
  getApiPath = () => {
    let apiPath = this.method.pattern;

    _.each(this.pathParams, param => {
      let paramName = param.name;
      let value = param.value;

      if (value) {
        apiPath = apiPath.replace("{" + paramName + "}", value);
      }
    });

    return apiPath;
  };

  /**
   * @name getDuration
   * @description get the duration of the API call
   * @return {string}
   */
  getDuration = () => {
    return (new Date() as any) - this.startTime + "";
  };

  /**
   * @name getRequestBody
   * @description Returns the request body as object
   * @return {object}
   */
  getRequestBody = () => {
    let requestBody = this.requestBody;
    if (requestBody) {
      if (requestBody.display.editType === "textarea") {
        try {
          return JSON.parse(requestBody.value);
        } catch (error) {
          console.log(error);
        }
      } else {
        return requestBody.value;
      }
    }
  };

  /**
   * @name getRequestParams
   * @description Returns the request parameters as object, with values
   *     being truthy
   * @return {object}
   */
  getRequestParams = () => {
    return _.chain(this.requestParams)
      .map(param => {
        let paramName = param.name;
        let value = param.value ? param.value : param.collectionValues;

        if (value) {
          return [paramName, value];
        }
      })
      .compact()
      .object()
      .value();
  };

  /**
   * @name get
   * @description Makes a GET request with Restangular
   * @param {string} apiPath - API path used for Restangular.one()
   * @param {object} requestParams - API request parameters
   * @return {undefined}
   */

  get = (apiPath, requestParams) => {
    return this.restangular
      .one(apiPath)
      .withHttpConfig({ responseType: "blob" })
      .get(requestParams)
      .toPromise();
  };

  /**
   * @name options
   * @description Makes a OPTIONS request with Restangular
   * @param {string} apiPath - API path used for Restangular.one()
   * @param {object} requestParams - API request parameters
   * @return {undefined}
   */
  options = (apiPath, requestParams) => {
    return this.restangular
      .one(apiPath)
      .options(requestParams)
      .toPromise();
  };

  /**
   * @name post
   * @description Makes a POST request with Restangular
   * @param {string} apiPath - API path used for Restangular.one()
   * @param {object} requestParams - API request parameters
   * @param {object} requestBody - API request body
   * @param {boolean} uploadFile - Whether the request uploads a file
   * @return {undefined}
   */
  post = (apiPath, requestParams, requestBody, uploadFile) => {
    let formDataHeader = {
      "Content-Type": undefined
    };
    if (uploadFile) {
      if (uploadFile.paramType === "REQUEST") {
        let APIUrl = this.restangular.one(apiPath).getRestangularUrl();

        console.log("THE REQUESTR PARAM", requestParams);
        return this.restangular
          .one(apiPath)
          .customPOST(requestParams, undefined, undefined, formDataHeader)
          .toPromise();

        /*
        return this.http
          .post(APIUrl, requestParams, {
            headers: formDataHeader
          })
          .toPromise();*/
      } else {
        return this.restangular
          .one(apiPath)
          .post(null, requestBody, requestParams, formDataHeader)
          .toPromise();
      }
    } else {
      return this.restangular
        .one(apiPath)
        .post(null, requestBody, requestParams)
        .toPromise();
    }
  };

  /**
   * @name put
   * @description Makes a PUT request with Restangular
   * @param {string} apiPath - API path used for Restangular.one()
   * @param {object} requestParams - API request parameters
   * @param {object} requestBody - API request body
   * @param {boolean} uploadFile - Whether the request uploads a file
   * @return {undefined}
   */
  put = (apiPath, requestParams, requestBody, uploadFile) => {
    if (uploadFile) {
      return this.restangular
        .one(apiPath)
        .customPUT(requestBody, null, requestParams, {
          "Content-Type": undefined
        })
        .toPromise();
    } else {
      return this.restangular
        .one(apiPath)
        .customPUT(requestBody, null, requestParams)
        .toPromise();
    }
  };

  /**
   * @name remove
   * @description Makes a DELETE request with Restangular
   * @param {string} apiPath - API path used for Restangular.one()
   * @param {object} requestParams - API request parameters
   * @return {undefined}
   */
  remove = (apiPath, requestParams) => {
    return this.restangular
      .one(apiPath)
      .remove(requestParams)
      .toPromise();
  };

  /**
   * @name resetResponse
   * @description reset the response fields: value, status
   * @return {undefined}
   */
  resetResponse = () => {
    this.response.headers = null;
    this.response.status = "";
    this.response.value = "";
  };

  /**
   * @name sendRequest
   * @description Sends the API request, depending on request method
   * @return {undefined}
   */
  sendRequest = e => {
    e.preventDefault();
    this.loading = true;
    this.resetResponse();

    let apiPath = this.getApiPath();
    let requestBody = this.getRequestBody();
    let requestParams = this.getRequestParams();

    let hasFileParam = this.fileParam;

    if (hasFileParam) {
      let formData = new FormData();

      const file = this.elementRef.nativeElement.querySelectorAll(
        "input[type=file]"
      )[0].files[0];

      formData.append(hasFileParam.name, file);

      if (hasFileParam.paramType === "REQUEST") {
        _.each(requestParams, (value, key) => {
          formData.append(key, value);
        });
        requestParams = formData;
      }
      if (hasFileParam.paramType === "BODY") {
        requestBody = formData;
      }
    }

    let request;

    this.startTimer();

    switch (this.method.method) {
      case "DELETE":
        request = this.remove(apiPath, requestParams);
        break;
      case "POST":
        request = this.post(apiPath, requestParams, requestBody, hasFileParam);
        break;
      case "PUT":
        request = this.put(apiPath, requestParams, requestBody, hasFileParam);
        break;
      case "OPTIONS":
        request = this.options(apiPath, requestParams);
        break;
      default:
        request = this.get(apiPath, requestParams);
        break;
    }

    request.then(this.treatResponse, this.treatResponse).finally(() => {
      this.loading = false;
    });
  };

  /**
   * @name startTimer
   * @description start the time counter for the "Send" button
   * @return {undefined}
   */
  startTimer = () => {
    this.startTime = +new Date();
    this.timerEnabled = true;
    this.timer = setTimeout(() => {
      if (this.timerEnabled) {
        this.sendButtonTimer = "(" + this.getDuration() + ")";
      }
    }, 10);
  };

  /**
   * @name stopTimer
   * @description stop the time counter for the "Send" button
   * @return {undefined}
   */
  stopTimer = () => {
    clearTimeout(this.timer);
    this.sendButtonTimer = "(" + this.getDuration() + ")";
    this.timerEnabled = false;
  };

  convertResponse = response => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      if (response.data instanceof Blob) {
        if (response.data.type.indexOf("image/") >= 0) {
          response.data = window.URL.createObjectURL(response.data);
          response.isBinary = true;
          resolve(response);
        } else {
          reader.addEventListener("loadend", () => {
            if (reader.result)
              response.data = JSON.parse(<string>reader.result);
            resolve(response);
          });

          reader.readAsText(response.data);
        }
      } else {
        resolve(response);
      }
    });
  };

  /**
   * @name treatResponse
   * @description treat API response
   * @param {object} response - Success or error response from Restangular
   * @return {undefined}
   */
  treatResponse = response => {
    this.stopTimer();
    console.log("BEFORE THE FINAL RESULT ", response);
    this.convertResponse(response).then(result => {
      console.log("THE FINAL RESULT ", response);
      let data = response.data;
      let hns = [];

      response.headers.forEach((key, value, map) => {
        hns.push(key);
      });

      let headers: object[] = [];

      _.each(hns, hn => {
        headers.push({
          name: hn,
          value: response.headers.get(hn)
        });
      });

      const isBinary = response.isBinary;

      if (isBinary) {
        data = this.sanitizer.bypassSecurityTrustUrl(data);
      }

      this.response = _.extend(this.response, {
        headers: headers,
        apiResponse: response,
        message: data ? data.errorMessage || data.message : "",
        status: response.status,
        value: isBinary ? data : JSON.stringify(data, null, 2)
      });
    });
  };
}
