angular.module('apitester').directive(
  'endpoint',
  function(Restangular) {
    return {
      transclude: true,
      scope: {
        endpoint: '=',
      },
      templateUrl: 'method_detail.html',
      link: function(scope) {
        scope.select = function() {
          console.log('method selected ... ');
          scope.$emit('methodSelected', scope.endpoint);
          scope.$broadcast('methodSelected', scope.endpoint);
        };

        scope.get = get;
        scope.getApiPath = getApiPath;
        scope.getRequestBody = getRequestBody;
        scope.getRequestParams = getRequestParams;
        scope.post = post;
        scope.put = put;
        scope.remove = remove;
        scope.resetResponse = resetResponse;
        scope.sendRequest = sendRequest;
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
          scope.pathParams = _.filter(params, function(param) {
            return param.paramType === 'PATH';
          });
          scope.requestParams = _.filter(params, function(param) {
            return param.paramType === 'REQUEST';
          });
          scope.requestBody = _.find(params, function(param) {
            return param.paramType === 'BODY';
          });
          scope.fileParam = _.find(params, function(param) {
            return param.file;
          });
          if (scope.fileParam) {
            scope.fileParam.fileContent = '';
          }
          scope.response = scope.endpoint.methodInfo.returnType;
          scope.response.paramType = 'RETURN';
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
              apiPath = apiPath.replace('{' + paramName + '}', value);
            }
          });

          return apiPath;
        }

        /**
         * @name getRequestBody
         * @description Returns the request body as object
         * @return {object}
         */
        function getRequestBody() {
          var requestBody = scope.requestBody;
          if (requestBody) {
            var output = {};
            try {
              output[requestBody.name] = JSON.parse(requestBody.value);
              return output;
            } catch (error) {
              console.error(error);
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
            .value()
          ;
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
          if (uploadFile) {
            return Restangular
              .one(apiPath)
              .withHttpConfig({transformRequest: angular.identity})
              .post(null, requestBody, requestParams, {
                'Content-Type': undefined,
              });
          } else {
            return Restangular
              .one(apiPath)
              .post(null, requestBody, requestParams)
            ;
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
            return Restangular
              .one(apiPath)
              .withHttpConfig({transformRequest: angular.identity})
              .customPUT(requestBody, null, requestParams, {
                'Content-Type': undefined,
              });
          } else {
            return Restangular
              .one(apiPath)
              .customPUT(requestBody, null, requestParams);
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
          scope.response.value = '';
          scope.response.status = '';
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

            formData.append(hasFileParam.name, hasFileParam.fileContent);
            if (hasFileParam.paramType === 'REQUEST') {
              _.each(requestParams, function(value, key) {
                formData.append(key, value);
              });
              requestParams = formData;
            }
            if (hasFileParam.paramType === 'BODY') {
              requestBody = formData;
            }
          }

          var request;

          switch (scope.endpoint.methods[0]) {
            case 'DELETE':
              request = scope.remove(apiPath, requestParams);
              break;
            case 'POST':
              request = scope.post(apiPath, requestParams, requestBody,
                hasFileParam);
              break;
            case 'PUT':
              request = scope.put(apiPath, requestParams, requestBody,
                hasFileParam);
              break;
            default:
              request = scope.get(apiPath, requestParams);
              break;
          }

          request.then(
            scope.treatSuccessResponse,
            scope.treatErrorResponse
          );
        }

        /**
         * @name treatErrorResponse
         * @description treat API error response
         * @param {object} response - Error response from Restangular
         * @return {undefined}
         */
        function treatErrorResponse(response) {
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
          scope.response = _.extend(scope.response, {
            apiResponse: response,
            message: data ? (data.errorMessage || data.message) : '',
            status: response.status,
            value: JSON.stringify(data, null, 2),
          });
          scope.loading = false;
        }

        /**
         * @name treatSuccessResponse
         * @description treat API success response
         * @param {object} response - Success response from Restangular
         * @return {undefined}
         */
        function treatSuccessResponse(response) {
          scope.treatResponse(response);
        }
      },
    };
  }
);
