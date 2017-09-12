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

        scope.treatErrorResponse = treatErrorResponse;
        scope.treatSuccessResponse = treatSuccessResponse;
        scope.get = get;
        scope.getApiPath = getApiPath;
        scope.getRequestParams = getRequestParams;
        scope.sendRequest = sendRequest;


        /**
         * @name treatErrorResponse
         * @description
         * @param {object} response - Error response from Restangular
         * @return {undefined}
         */
        function treatErrorResponse(response) {
          scope.apiResponse = response.data;
        }

        /**
         * @name treatSuccessResponse
         * @description
         * @param {object} response - Success response from Restangular
         * @return {undefined}
         */
        function treatSuccessResponse(response) {
          scope.apiResponse = response;
        }

        /**
         * @name get
         * @description Makes a GET request with Restangular
         * @param {string} apiPath - API path used for Restangular.one()
         * @param {object} queryParams - API request parameters
         * @return {undefined}
         */
        function get(apiPath, queryParams) {
          return Restangular.one(apiPath).get(queryParams);
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
         * @name sendRequest
         * @description Sends the API request, depending on request method
         * @return {undefined}
         */
        function sendRequest() {
          var apiPath = scope.getApiPath();
          var requestParams = scope.getRequestParams();

          var request;

          // TODO: use switch, and use GET as default
          if (scope.endpoint.methods[0] === 'GET') {
            request = scope.get(apiPath, requestParams);
          }

          request.then(
            scope.treatSuccessResponse,
            scope.treatErrorResponse
          );
        }
      }
    }
  }
);
