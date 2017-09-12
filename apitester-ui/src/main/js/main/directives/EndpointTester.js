angular.module("apitester").directive(
  "endpointTester",
  function(Restangular) {
    return {
      transclude: true,
      scope: {
        endpointTester : "="
      },
      templateUrl : "method_tester.html",
      link : function(scope) {
        scope.endpoint = scope.endpointTester;
        scope.data = {};
        scope.methodParams = scope.endpoint.methodInfo.params;
        scope.methodParams.forEach(
          function (each) {
            console.log(each.name+" : "+each.type);
            if(each.collection) {
              scope.data[each.name] = [];
            } else {
              scope.data[each.name] = "";
            }
          }
        );

        scope.get = get;
        scope.getApiPath = getApiPath;
        scope.getRequestBody = getRequestBody;
        scope.getRequestParams = getRequestParams;
        scope.post = post;
        scope.sendRequest = sendRequest;
        scope.treatErrorResponse = treatErrorResponse;
        scope.treatSuccessResponse = treatSuccessResponse;


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
         *     given
         * @return {string} apiPath - The API path used by Restangular
         */
        function getApiPath() {
          var apiPath = scope.endpoint.pattern;

          _.chain(scope.methodParams)
            .filter(function(param) {
              return param.paramType === 'PATH';
            })
            .each(function(param) {
              var paramName = param.name;
              var value = scope.data[paramName];

              if (value) {
                apiPath = apiPath.replace('{' + paramName + '}', value);
              }
            })
            .value()
          ;

          return apiPath;
        }

        /**
         * @name getRequestBody
         * @description Returns the request body as object
         * @return {object}
         */
        function getRequestBody() {
          var bodies = _.chain(scope.methodParams)
            .filter(function(param) {
              return param.paramType === 'BODY';
            })
            .map(function(param) {
              var paramName = param.name;
              var value = scope.data[paramName];

              return value;
            })
            .value()
          ;

          if (bodies && bodies.length) {
            // TODO: JSON UI???
            return JSON.parse(_.first(bodies));
          }
        }

        /**
         * @name getRequestParams
         * @description Returns the request parameters as object, with values
         *     being truthy
         * @return {object}
         */
        function getRequestParams() {
          return _.chain(scope.methodParams)
            .filter(function(param) {
              return param.paramType === 'REQUEST';
            })
            .map(function(param) {
              var paramName = param.name;
              var value = scope.data[paramName];

              if (value) {
                return [paramName, value];
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
         * @param {object} requestBody - API request parameters
         * @return {undefined}
         */
        function post(apiPath, requestParams, requestBody) {
          return Restangular.one(apiPath)
            .post(null, requestBody, requestParams);
        }

        /**
         * @name sendRequest
         * @description Sends the API request, depending on request method
         * @return {undefined}
         */
        function sendRequest() {
          var apiPath = scope.getApiPath();
          var requestBody = scope.getRequestBody();
          var requestParams = scope.getRequestParams();

          var request;

          switch (scope.endpoint.methods[0]) {
            case 'POST':
              request = scope.post(apiPath, requestParams, requestBody);
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
          scope.apiResponse = response.data;
        }

        /**
         * @name treatSuccessResponse
         * @description treat API success response
         * @param {object} response - Success response from Restangular
         * @return {undefined}
         */
        function treatSuccessResponse(response) {
          scope.apiResponse = response;
        }
      }
    }
  }
);
