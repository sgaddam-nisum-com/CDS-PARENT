/*global define*/
 

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	'services/registerService',
	"controllers/registerController",
	"directives/resourceDirective",
	"directives/datePickerDirective",
	"controllers/headerController"
	], function (angular) {
    var app = angular.module('CDSREGISTER', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule',"controllerModule","directiveModule"]);
    
    return app;
});
