angular.module("templates", []);
angular.module("apitester", ["templates", "ngRoute", "restangular"]);
angular
  .module("apitester")
  .config(function($httpProvider, $routeProvider, RestangularProvider) {
    var index = window.location.href.lastIndexOf("apitester");

    var prefix = window.location.href.substr(0, index);
    console.log("prefix: " + prefix);

    RestangularProvider.setBaseUrl(prefix);

    RestangularProvider.setFullResponse(true);
    RestangularProvider.setPlainByDefault(true);

    RestangularProvider.addResponseInterceptor(function(
      data,
      operation,
      what,
      url,
      response,
      deferred
    ) {
      console.log("INTERCEPT THE RESPONSE", response);
      //check if its Blob
      if (response && response.data instanceof Blob) {
        if (response.data.type.indexOf("image/") >= 0) {
          console.log(" ==== INTERCEPT THE IMAGE ==== ");
          //create a blob url to the image, that i can use anywhere
          var imgUrl = window.URL.createObjectURL(response.data);
          //put an imgUrl into the response
          response.data = imgUrl;
          response.isBinary = true;
          return response.data;
        } else {
          console.log(" ==== INTERCEPT SIMPLE RESPONSE ==== ");
          var reader = new FileReader();

          reader.addEventListener("loadend", function() {
            console.log("GET THE INTERCEPTED RESULT AS TEXT", reader.result);
            response.data = JSON.parse(reader.result);
            console.log("PARSE THE INTERCEPTED RESULT AS JSON", response.data);
            return response.data;
          });

          reader.readAsText(response.data);
        }
      } else {
        return response.data;
      }
    });

    RestangularProvider.setErrorInterceptor(function(response) {
      console.log("INTERCEPT THE ERROR ", response.data);

      //check if its Blob
      if (response && response.data instanceof Blob) {
        console.log(" ==== INTERCEPT SIMPLE ERROR ==== ");
        var reader = new FileReader();

        reader.addEventListener("loadend", function() {
          console.log(
            "GET THE INTERCEPTED ERROR RESULT AS TEXT",
            reader.result
          );
          response.data = JSON.parse(reader.result);
          console.log(
            "PARSE THE INTERCEPTED ERROR RESULT AS JSON",
            response.data
          );
          return response.data;
        });

        reader.readAsText(response.data);
      } else {
        return response.data;
      }
    });

    $httpProvider.interceptors.push(function($q) {
      return {
        request: function(config) {
          console.log("rest request: ", config, window.location.pathname);
          return config;
        },
        response: function(response) {
          return response;
        },
        responseError: function(response) {
          return $q.reject(response);
        }
      };
    });
    $routeProvider
      .when("/main", {
        controller: "EndpointController",
        templateUrl: "endpoint_list.html"
      })
      .otherwise({
        redirectTo: "/main"
      });
  });
