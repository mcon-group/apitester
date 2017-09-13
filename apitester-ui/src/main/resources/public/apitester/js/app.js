angular.module("templates", []).config(function() {
	console.log("templates - config: init()");
});
angular.module("apitester", [ "templates", "ngRoute", "restangular" ]);
angular.module("apitester").config(
		function($httpProvider, $routeProvider, $locationProvider, RestangularProvider) {
			var index = window.location.href.lastIndexOf('/apitester');
			RestangularProvider.setBaseUrl(window.location.href.substr(0, index));
			RestangularProvider.setFullResponse(true);
			RestangularProvider.setPlainByDefault(true);

			$httpProvider.interceptors.push(function($q, $location) {
				return {
					request : function(config) {
						console.log("rest request: ", config,
								window.location.pathname);
						return config;
					},
					response : function(response) {
						return response;
					},
					responseError : function(response) {
						return $q.reject(response);
					}
				}
			});
			$routeProvider.when("/main", {
				"controller" : "EndpointController",
				"templateUrl" : "endpoint_list.html",
			});
			$routeProvider.otherwise({
				redirectTo : '/main'
			});
		});

angular.module("apitester").controller(
	"EndpointController",
	function($route,$scope,EndpointService) {
		console.log("endpoint controller instantiated");

		$scope.search = "";
		$scope.selected = "paths";

		$scope.updateList = function() {
			var ne = [];
			var np = [];
			console.log("checking endpoint: ", $scope.allEndpoints);
			_.each($scope.allEndpoints, function(endpoint) {
				if(endpoint.pattern.indexOf($scope.search)>-1) {
					ne.push(endpoint);
				}
			});
			console.log("checking paths: ", $scope.allPaths);
			_.each($scope.allPaths, function(path) {
				if(path.path.indexOf($scope.search)>-1) {
					np.push(path);
				}
			});
			$scope.paths = np;
			$scope.endpoints = ne;
		}

		$scope.$on("methodSelected", function(e,endpoint) {
			$scope.selectedEndpoint = endpoint;
		})

		EndpointService.listEndpoints(
				function(endpoints) {
					$scope.allEndpoints = endpoints.data;
					$scope.updateList();
				}
		);
		EndpointService.listPaths(
				function(paths) {
					$scope.allPaths = paths.data;
					$scope.updateList();
				}
		);
	}
);
angular.module("apitester").service(
	"EndpointService",
	function($route,Restangular) {
		var pathPrefix = window.location.pathname.substr(1);
		var s = {
			listEndpoints : function(success,error) {
				Restangular.one(pathPrefix, "endpoints").get().then(success,error);
			},
			listPaths : function(success,error) {
				Restangular.one(pathPrefix, "paths").get().then(success,error);
			}
		}
		return s;
	}
);

angular.module("apitester").directive(
  "endpoint",
  function(Restangular) {
    return {
      transclude: true,
      scope: {
        endpoint : "="
      },
      templateUrl : "method_detail.html",
      link : function(scope, elmt) {
        scope.select = function() {
          console.log("method selected ... ");
          scope.$emit("methodSelected",scope.endpoint);
          scope.$broadcast("methodSelected",scope.endpoint);
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
          scope.response = scope.endpoint.methodInfo.returnType;
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
         * @param {object} requestBody - API request parameters
         * @return {undefined}
         */
        function post(apiPath, requestParams, requestBody) {
          return Restangular.one(apiPath)
            .post(null, requestBody, requestParams);
        }

        /**
         * @name put
         * @description Makes a PUT request with Restangular
         * @param {string} apiPath - API path used for Restangular.one()
         * @param {object} requestParams - API request parameters
         * @param {object} requestBody - API request parameters
         * @return {undefined}
         */
        function put(apiPath, requestParams, requestBody) {
          return Restangular.one(apiPath)
            .customPUT(requestBody, null, requestParams);
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
          scope.resetResponse();

          var apiPath = scope.getApiPath();
          var requestBody = scope.getRequestBody();
          var requestParams = scope.getRequestParams();

          var request;

          switch (scope.endpoint.methods[0]) {
            case 'DELETE':
              request = scope.remove(apiPath, requestParams);
              break;
            case 'POST':
              request = scope.post(apiPath, requestParams, requestBody);
              break;
            case 'PUT':
              request = scope.put(apiPath, requestParams, requestBody);
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
          scope.response = _.extend(scope.response, {
            status: response.status,
            value: JSON.stringify(response.data, null, 2),
          });
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

angular.module(
		'apitester'
).provider(
		'markdown', 
		function() {
			var opts = {};
			return {
				config : function(newOpts) {
					opts = newOpts;
				},
				$get : function() {
					return new window.showdown.Converter(opts);
				}
			};
		}
).directive('markdown', function( ) {
	return {
		scope: {
			markdown : "="
		},
		link : function(scope, element, attr) {
			converter = new showdown.Converter();
			scope.html=converter.makeHtml(scope.markdown || '');
			console.log("formatting : ",scope.markdown,scope.html);
			element.html(scope.html);
		}

	}
});
angular.module(
  'apitester'
).directive('paramValue', function() {
  return {
    templateUrl: 'param_value.html',
    scope: {
      param: '=',
    },
  };
});

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
      scope.removeValue = removeValue;
      scope.updateBody = updateBody;


      activate();


      /**
       * @name activate
       * @description functions to be called, and values to be set, when
       *    directive is activate
       * @return {undefined}
       */
      function activate() {
        var values = scope.param.values;
        /*
        if (values && values.length) {
          scope.param.value = values[0];
        }
        */

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
        }, 300);
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
       * @name removeValue
       * @description remove a value from collectionValues by index
       * @param {integer} index - index of the value in the collectionValues
       * @return {undefined}
       */
      function removeValue(index) {
        scope.param.collectionValues.splice(index, 1);
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

angular.module("apitester").directive(
	"path",
	function($route,$templateCache,$controller,$compile) {
		return {
			transclude: true,
			scope: {
				path : "="
			},
			templateUrl : "path_info_detail.html",
			link : function(scope) {
				scope.mappings = [];
				scope.execute = false;
				scope.details = false;
				scope.toggleExecute = function() {
					scope.execute = !scope.execute;
				};
				scope.selectMethod = function (method) {
					if(scope.selectedMethod == method) {
						method = 'none';
					}
					scope.selectedMethod = method; 
					var m = [];
					_.each(scope.path.mappings,function(mapping) {
						if(mapping.methods.includes(method)) {
							console.log(" --- "+method+" --- matches ");
							m.push(mapping);
						} else {
							console.log(" --- "+method+" --- does not match");
						}
					});
					scope.mappings = m;
				};
			}
		}
	}
);