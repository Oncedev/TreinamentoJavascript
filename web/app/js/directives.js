'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('prettyprint', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              prettyPrint();
        }
    };
  })
  .directive('prettyprinthtml', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              element[0].innerHTML = element[0].innerHTML
                                    .replace(/>/g,'&gt;')
                                    .replace(/</g,'&lt;').  
                                    replace(/"/g,'&quot;'); 
              prettyPrint();
        }
    };
  });

  
