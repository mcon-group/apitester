import { HttpClient } from "@angular/common/http";
import { Restangular } from "ngx-restangular";
import { ParamService } from "./../param.service";
import { Component, OnInit, Input, Renderer2, ElementRef } from "@angular/core";
import { _ } from "underscore";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-method",
  templateUrl: "./method.component.html",
  styleUrls: ["./method.component.css"]
})
export class MethodComponent implements OnInit {
  @Input() private method: any;
  private details: false;
  private pathParams;
  private headerParams;
  private requestParams;
  private requestBody;
  private fileParam;
  private response;
  private selectedOptionKey;
  private sendText;
  private startTime;
  private sendOptions = {
    default: "Send"
  };
  private loading;
  private timerEnabled;
  private timer;
  private sendButtonTimer;

  constructor(
    private paramService: ParamService,
    private restangular: Restangular,
    private element: Renderer2,
    private http: HttpClient,
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer
  ) {
    this.details = false;
  }

  /**
   * @name ngOnInit
   * @description functions to be called, and values to be set, when
   *    directive is activate
   * @return {undefined}
   */

  ngOnInit() {
    console.log("THE METHOD : ", this.method);

    this.details = false;

    let params = this.method.methodInfo.params;

    _.each(params, param => {
      this.paramService.setDisplayValues(param);
    });

    this.pathParams = _.filter(params, param => {
      return param.paramType === "PATH";
    });
    console.log("PATH PARAMS : ", this.pathParams);

    this.headerParams = _.filter(params, param => {
      return param.paramType === "HEADER";
    });
    console.log("HEADER PARAMS : ", this.headerParams);

    this.requestParams = _.filter(params, param => {
      return param.paramType === "REQUEST";
    });
    console.log("REQUEST PARAMS : ", this.requestParams);

    this.requestBody = _.find(params, param => {
      return param.paramType === "BODY";
    });
    console.log("REQUEST BODY : ", this.requestBody);

    this.fileParam = _.find(params, param => {
      return param.file;
    });
    console.log("FILE PARAMS : ", this.fileParam);

    this.response = this.method.methodInfo.returnType;
    this.response.paramType = "RETURN";
    this.paramService.setDisplayValues(this.response);

    this.initSendText();
  }

  /**
   * @name initSendText
   * @description initialize text of sendText
   * @return {undefined}
   */
  initSendText = () => {
    let key = "default";
    try {
      if (
        this.method.method === "GET" &&
        this.method.methodInfo.returnType.contentTypes.length
      ) {
        key = "default";
      }
    } catch (e) {
      //
    }

    this.selectOption(key);
  };

  /**
   * @name selectOption
   * @description select option for the send button
   * @param {string} key - keys from scope.sendOptions
   */
  selectOption = key => {
    this.selectedOptionKey = key;
    this.sendText = this.sendOptions[key];
  };

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
      .map(function(param) {
        let paramName = param.name;
        let value = param.value;
        let values = param.collectionValues;

        if (value) {
          return [paramName, value];
        }

        if (values) {
          return [paramName, values];
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
    console.log("-----------------------------------------------------");
    console.log("GET REQUEST : ");
    console.log("API PATH", apiPath);
    console.log("PARAMS ", requestParams);
    console.log("-----------------------------------------------------");
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

        return this.http.post(APIUrl, requestParams, {
          headers: formDataHeader
        });
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

      console.log("THE SUBMITED FILE", file);

      formData.append(hasFileParam.name, file);

      if (hasFileParam.paramType === "REQUEST") {
        _.each(requestParams, function(value, key) {
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

    console.log("THE METHOD : ", this.method.method);

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

    request.then(this.treatResponse, this.treatErrorResponse).finally(() => {
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
    console.log("STOPING THE TIMER ...");
    clearTimeout(this.timer);
    this.sendButtonTimer = "(" + this.getDuration() + ")";
    this.timerEnabled = false;
  };

  /**
   * @name treatErrorResponse
   * @description treat API error response
   * @param {object} response - Error response from Restangular
   * @return {undefined}
   */
  treatErrorResponse = response => {
    console.log("THE ERROR RESPONSE : ", response);
    this.stopTimer();
    if (response && response.data instanceof Blob) {
      let reader = new FileReader();

      reader.addEventListener("loadend", () => {
        response.data = JSON.parse(reader.result as string);
        this.treatResponse(response);
      });

      reader.readAsText(response.data);
    } else {
      this.treatResponse(response);
    }
  };

  /**
   * @name treatResponse
   * @description treat API response
   * @param {object} response - Success or error response from Restangular
   * @return {undefined}
   */
  treatResponse = response => {
    console.log("THE TREATED RESPONSE : ", response);

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

    console.log("THE TREATED RESPONSE AFTER EXTENDING: ", this.response);
  };
}
