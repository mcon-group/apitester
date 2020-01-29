angular
  .module("apitester")
  .provider("markdown", function() {
    var opts = {};
    return {
      config: function(newOpts) {
        opts = newOpts;
      },
      $get: function() {
        return new window.showdown.Converter(opts);
      }
    };
  })
  .directive("markdown", function() {
    return {
      scope: {
        markdown: "="
      },
      link: function(scope, element) {
        var converter = new window.showdown.Converter();
        scope.html = converter.makeHtml(scope.markdown || "");
        element.html(scope.html);
      }
    };
  });
