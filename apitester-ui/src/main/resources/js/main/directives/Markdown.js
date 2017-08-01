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