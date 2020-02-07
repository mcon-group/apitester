angular
  .module("apitester")
  .service("EndpointService", function($route, Restangular) {
    var s = {
      listEndpoints: function(success, error) {
        Restangular.one("apitester/endpoints")
          .get()
          .then(success, error);
      },
      listPaths: function(success, error) {
        Restangular.one("apitester/paths")
          .get()
          .then(success, error);
      }
    };
    return s;
  });
