'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {
  	var codeEl = document.getElementsByTagName('pre')[0];

  	var html = "<html>" + "\n" +
  			   "\t<head>" + "\n" +
  			   "\t<title>My title</title>" + "\n" +
  			   "</head>" + "\n" +
  			   "<body>" + "\n" +
  			   "\t<a href=''>My link</a>" + "\n" +
               "\t<h1>My header</h1>" + "\n" +
  			   "</body>";

	if (codeEl) {
	  codeEl.innerHTML = html.escapeHTML();
	}
  }]);

String.prototype.escapeHTML = function () {                                        
  return(                                                                 
    this.replace(/>/g,'&gt;').
         replace(/</g,'&lt;').
         replace(/"/g,'&quot;')
  );
};