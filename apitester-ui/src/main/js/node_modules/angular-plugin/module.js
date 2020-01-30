angular.module("mcg-automation").requires.push("angular-plugin");

angular.module("angular-plugin",["ngRoute"]);


angular.module("angular-plugin")
.config(function($routeProvider,$locationProvider) {
		$locationProvider.hashPrefix('');
		angular.module("angular-plugin").routeProvider = $routeProvider;
});