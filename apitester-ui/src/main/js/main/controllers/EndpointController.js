angular
  .module("apitester")
  .controller("EndpointController", function($route, $scope, EndpointService) {
    console.log("endpoint controller instantiated");

    $scope.search = "";
    $scope.selected = "paths";

    $scope.updateList = function() {
      var ne = [];
      var np = [];
      console.log("checking endpoint: ", $scope.allEndpoints);
      _.each($scope.allEndpoints, function(endpoint) {
        if (endpoint.pattern.indexOf($scope.search) > -1) {
          ne.push(endpoint);
        }
      });
      console.log("checking paths: ", $scope.allPaths);
      _.each($scope.allPaths, function(path) {
        if (path.path.indexOf($scope.search) > -1) {
          np.push(path);
        }
      });
      $scope.paths = np;
      $scope.endpoints = ne;
    };

    EndpointService.listEndpoints(function(endpoints) {
      $scope.allEndpoints = endpoints.data;
      $scope.updateList();
    });

    EndpointService.listPaths(function(paths) {
      $scope.allPaths = paths.data;
      $scope.updateList();
    });
  });
