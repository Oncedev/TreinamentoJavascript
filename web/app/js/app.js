'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/historia', {templateUrl: 'partials/historia.html', controller: 'MyCtrl1'});
  $routeProvider.when('/por-que-o-javascript-esta-sendo-tao-usado', 
  	{templateUrl: 'partials/por-que-o-javascript-esta-sendo-tao-usado.html', controller: 'MyCtrl1'});
  $routeProvider.when('/estrutura-lexica', 
  	{templateUrl: 'partials/estrutura-lexica.html', controller: 'MyCtrl1'});
  $routeProvider.when('/tipos', 
    {templateUrl: 'partials/tipos.html', controller: 'MyCtrl1'});
  $routeProvider.when('/numeros', 
    {templateUrl: 'partials/numeros.html', controller: 'MyCtrl1'});
  $routeProvider.when('/strings', 
    {templateUrl: 'partials/strings.html', controller: 'MyCtrl1'});
  $routeProvider.when('/expressoes-regulares', 
    {templateUrl: 'partials/expressoes-regulares.html', controller: 'MyCtrl1'});
  $routeProvider.when('/objeto-global', 
    {templateUrl: 'partials/objeto-global.html', controller: 'MyCtrl1'});
  $routeProvider.when('/escopo-variaveis', 
    {templateUrl: 'partials/escopo-variaveis.html', controller: 'MyCtrl1'});
  $routeProvider.when('/igualdade-diferenca', 
    {templateUrl: 'partials/igualdade-diferenca.html', controller: 'MyCtrl1'});
  $routeProvider.when('/objetos', 
    {templateUrl: 'partials/objetos.html', controller: 'MyCtrl1'});
  $routeProvider.when('/arrays', 
    {templateUrl: 'partials/arrays.html', controller: 'MyCtrl1'});
  $routeProvider.when('/funcoes', 
    {templateUrl: 'partials/funcoes.html', controller: 'MyCtrl1'});
  $routeProvider.when('/classes', 
    {templateUrl: 'partials/classes.html', controller: 'MyCtrl1'});
  $routeProvider.when('/namespaces', 
    {templateUrl: 'partials/namespaces.html', controller: 'MyCtrl1'});
  $routeProvider.when('/motivos-para-usar', 
    {templateUrl: 'partials/motivos-para-usar.html', controller: 'MyCtrl1'});
  $routeProvider.when('/primeiro-script', 
    {templateUrl: 'partials/primeiro-script.html', controller: 'MyCtrl2'});
  $routeProvider.when('/seletores-css', 
    {templateUrl: 'partials/seletores-css.html', controller: 'MyCtrl1'});
  $routeProvider.when('/filtros', 
    {templateUrl: 'partials/filtros.html', controller: 'MyCtrl1'});
  
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
