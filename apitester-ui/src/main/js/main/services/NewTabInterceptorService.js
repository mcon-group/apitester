/**
 * @name NewTabInterceptorService
 * @param {object} $rootScope
 * @param {object} $window
 * @return {object}
 */
function NewTabInterceptorService($rootScope, $window) {
  return {
    request: function(config) {
      if ($rootScope.linkInNewTab) {
        var urlParams = config.paramSerializer(config.params);
        if (urlParams) {
          urlParams = "?" + urlParams;
        }
        $window.open(config.url + urlParams, "_blank");
      }
      $rootScope.linkInNewTab = false;
      return config;
    }
  };
}

angular
  .module("apitester")
  .service("NewTabInterceptorService", NewTabInterceptorService)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push(NewTabInterceptorService);
  });
