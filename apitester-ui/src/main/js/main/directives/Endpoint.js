angular
  .module("apitester")
  .directive("endpoint", function(
    $http,
    $interval,
    $rootScope,
    ParamService,
    Restangular
  ) {
    return {
      transclude: true,
      scope: {
        endpoint: "="
      },
      templateUrl: "endpoint_detail.html",
      link: function(scope, elmt) {
        scope.sendOptions = {
          default: "Send"
        };

        scope.get = get;
        scope.getApiPath = getApiPath;
        scope.getDuration = getDuration;
        scope.getRequestBody = getRequestBody;
        scope.getRequestParams = getRequestParams;
        scope.initSendText = initSendText;
        scope.options = options;
        scope.post = post;
        scope.put = put;
        scope.remove = remove;
        scope.resetResponse = resetResponse;
        scope.selectOption = selectOption;
        scope.sendRequest = sendRequest;
        scope.startTimer = startTimer;
        scope.stopTimer = stopTimer;
        scope.treatErrorResponse = treatErrorResponse;
        scope.treatResponse = treatResponse;
        scope.treatSuccessResponse = treatSuccessResponse;

        activate();

        /**
         * @name activate
         * @description functions to be called, and values to be set, when
         *    directive is activate
         * @return {undefined}
         */
        function activate() {
          scope.details = false;

          var params = scope.endpoint.methodInfo.params;

          _.each(params, function(param) {
            ParamService.setDisplayValues(param);
          });

          scope.pathParams = _.filter(params, function(param) {
            return param.paramType === "PATH";
          });
          scope.headerParams = _.filter(params, function(param) {
            return param.paramType === "HEADER";
          });
          scope.requestParams = _.filter(params, function(param) {
            return param.paramType === "REQUEST";
          });
          scope.requestBody = _.find(params, function(param) {
            return param.paramType === "BODY";
          });
          scope.fileParam = _.find(params, function(param) {
            return param.file;
          });

          scope.response = scope.endpoint.methodInfo.returnType;
          scope.response.paramType = "RETURN";
          ParamService.setDisplayValues(scope.response);

          scope.initSendText();
        }

        /**
         * @name get
         * @description Makes a GET request with Restangular
         * @param {string} apiPath - API path used for Restangular.one()
         * @param {object} requestParams - API request parameters
         * @return {undefined}
         */
        function get(apiPath, requestParams) {
          return Restangular.one(apiPath).get(requestParams);
        }

        /**
         * @name initSendText
         * @description initialize text of sendText
         * @return {undefined}
         */
        function initSendText() {
          var key = "default";
          try {
            if (
              scope.endpoint.method === "GET" &&
              scope.endpoint.methodInfo.returnType.contentTypes.length
            ) {
              key = "default";
            }
          } catch (e) {
            //
          }

          selectOption(key);
        }

        /**
         * @name getApiPath
         * @description Returns the API path having Path Parameters set, if
         *    given
         * @return {string} apiPath - The API path used by Restangular
         */
        function getApiPath() {
          var apiPath = scope.endpoint.pattern;

          _.each(scope.pathParams, function(param) {
            var paramName = param.name;
            var value = param.value;

            if (value) {
              apiPath = apiPath.replace("{" + paramName + "}", value);
            }
          });

          return apiPath;
        }

        /**
         * @name getDuration
         * @description get the duration of the API call
         * @return {string}
         */
        function getDuration() {
          return new Date() - scope.startTime + "";
        }

        /**
         * @name getRequestBody
         * @description Returns the request body as object
         * @return {object}
         */
        function getRequestBody() {
          var requestBody = scope.requestBody;
          if (requestBody) {
            if (requestBody.display.editType === "textarea") {
              try {
                // output[requestBody.name] = JSON.parse(requestBody.value);
                // return output;
                return JSON.parse(requestBody.value);
              } catch (error) {
                console.log(error);
              }
            } else {
              return requestBody.value;
            }
          }
        }

        /**
         * @name getRequestParams
         * @description Returns the request parameters as object, with values
         *     being truthy
         * @return {object}
         */
        function getRequestParams() {
          return _.chain(scope.requestParams)
            .map(function(param) {
              var paramName = param.name;
              var value = param.value;
              var values = param.collectionValues;

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
        }

        /**
         * @name options
         * @description Makes a OPTIONS request with Restangular
         * @param {string} apiPath - API path used for Restangular.one()
         * @param {object} requestParams - API request parameters
         * @return {undefined}
         */
        function options(apiPath, requestParams) {
          return Restangular.one(apiPath).options(requestParams);
        }

        /**
         * @name post
         * @description Makes a POST request with Restangular
         * @param {string} apiPath - API path used for Restangular.one()
         * @param {object} requestParams - API request parameters
         * @param {object} requestBody - API request body
         * @param {boolean} uploadFile - Whether the request uploads a file
         * @return {undefined}
         */
        function post(apiPath, requestParams, requestBody, uploadFile) {
          var formDataHeader = {
            "Content-Type": undefined
          };
          if (uploadFile) {
            if (uploadFile.paramType === "REQUEST") {
              var APIUrl = Restangular.one(apiPath).getRestangularUrl();

              return $http.post(APIUrl, requestParams, {
                transformRequest: angular.identity,
                headers: formDataHeader
              });
            } else {
              return Restangular.one(apiPath)
                .withHttpConfig({ transformRequest: angular.identity })
                .post(null, requestBody, requestParams, formDataHeader);
            }
          } else {
            return Restangular.one(apiPath).post(
              null,
              requestBody,
              requestParams
            );
          }
        }

        /**
         * @name put
         * @description Makes a PUT request with Restangular
         * @param {string} apiPath - API path used for Restangular.one()
         * @param {object} requestParams - API request parameters
         * @param {object} requestBody - API request body
         * @param {boolean} uploadFile - Whether the request uploads a file
         * @return {undefined}
         */
        function put(apiPath, requestParams, requestBody, uploadFile) {
          if (uploadFile) {
            return Restangular.one(apiPath)
              .withHttpConfig({ transformRequest: angular.identity })
              .customPUT(requestBody, null, requestParams, {
                "Content-Type": undefined
              });
          } else {
            return Restangular.one(apiPath).customPUT(
              requestBody,
              null,
              requestParams
            );
          }
        }

        /**
         * @name remove
         * @description Makes a DELETE request with Restangular
         * @param {string} apiPath - API path used for Restangular.one()
         * @param {object} requestParams - API request parameters
         * @return {undefined}
         */
        function remove(apiPath, requestParams) {
          return Restangular.one(apiPath).remove(requestParams);
        }

        /**
         * @name resetResponse
         * @description reset the response fields: value, status
         * @return {undefined}
         */
        function resetResponse() {
          scope.response.headers = null;
          scope.response.status = "";
          scope.response.value = "";
        }

        /**
         * @name selectOption
         * @description select option for the send button
         * @param {string} key - keys from scope.sendOptions
         */
        function selectOption(key) {
          scope.selectedOptionKey = key;
          scope.sendText = scope.sendOptions[key];
        }

        /**
         * @name sendRequest
         * @description Sends the API request, depending on request method
         * @return {undefined}
         */
        function sendRequest() {
          scope.loading = true;
          scope.resetResponse();

          var apiPath = scope.getApiPath();
          var requestBody = scope.getRequestBody();
          var requestParams = scope.getRequestParams();

          var hasFileParam = scope.fileParam;
          if (hasFileParam) {
            var formData = new FormData();
            var file = elmt.find("input[type=file]")[0].files[0];
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

          var request;
          scope.startTimer();

          $rootScope.linkInNewTab = scope.selectedOptionKey === "newTab";
          if ($rootScope.linkInNewTab) {
            request = scope.get(apiPath, requestParams);
          } else {
            switch (scope.endpoint.method) {
              case "DELETE":
                request = scope.remove(apiPath, requestParams);
                break;
              case "POST":
                request = scope.post(
                  apiPath,
                  requestParams,
                  requestBody,
                  hasFileParam
                );
                break;
              case "PUT":
                request = scope.put(
                  apiPath,
                  requestParams,
                  requestBody,
                  hasFileParam
                );
                break;
              case "OPTIONS":
                request = scope.options(apiPath, requestParams);
                break;
              default:
                request = scope.get(apiPath, requestParams);
                break;
            }
          }

          request
            .then(scope.treatSuccessResponse, scope.treatErrorResponse)
            .finally(function() {
              scope.loading = false;
            });
        }

        /**
         * @name startTimer
         * @description start the time counter for the "Send" button
         * @return {undefined}
         */
        function startTimer() {
          scope.startTime = +new Date();
          scope.timerEnabled = true;
          scope.timer = $interval(function() {
            if (scope.timerEnabled) {
              scope.sendButtonTimer = "(" + scope.getDuration() + ")";
            }
          }, 10);
        }

        /**
         * @name stopTimer
         * @description stop the time counter for the "Send" button
         * @return {undefined}
         */
        function stopTimer() {
          clearTimeout(scope.timer);
          scope.sendButtonTimer = "(" + scope.getDuration() + ")";
          scope.timerEnabled = false;
        }

        /**
         * @name treatErrorResponse
         * @description treat API error response
         * @param {object} response - Error response from Restangular
         * @return {undefined}
         */
        function treatErrorResponse(response) {
          scope.stopTimer();
          scope.treatResponse(response);
        }

        /**
         * @name treatResponse
         * @description treat API response
         * @param {object} response - Success or error response from Restangular
         * @return {undefined}
         */
        function treatResponse(response) {
          var data = response.data;

          var hns = _.keys(response.headers());

          var headers = [];

          _.each(hns, function(hn) {
            headers.push({
              name: hn,
              value: response.headers(hn)
            });
          });

          scope.response = _.extend(scope.response, {
            headers: headers,
            apiResponse: response,
            message: data ? data.errorMessage || data.message : "",
            status: response.status,
            value: JSON.stringify(data, null, 2)
          });
          console.log("resp here ", scope.response);
        }

        /**
         * @name treatSuccessResponse
         * @description treat API success response
         * @param {object} response - Success response from Restangular
         * @return {undefined}
         */
        function treatSuccessResponse(response) {
          scope.stopTimer();
          scope.treatResponse(response);
        }
      }
    };
  });
