/*global define*/
 

define([], function () {
    var app = angular.module('CDSHOME', ['ui.router','uiRouterStyles','ngStorage','serviceModule','controllerModule',"directiveModule"]);		
    return app;
});
