'use strict';

/* Directives */


angular.module('myApp.directives', ['ngSanitize']).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('prettyprint', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              element[0].innerHTML = prettyPrintOne(element[0].innerHTML);
        }
    };
  })
  .directive('prettyprinthtml', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              element[0].innerHTML = prettyPrintOne(element[0].innerHTML
                                    .replace(/>/g,'&gt;')
                                    .replace(/</g,'&lt;').  
                                    replace(/"/g,'&quot;'));               
        }
    };
  });

  
