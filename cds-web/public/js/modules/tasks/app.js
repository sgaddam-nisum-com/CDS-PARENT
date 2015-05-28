/*global define*/
 

define([
	'angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	"services/taskService",	
	"controllers/taskController",
	"controllers/viewTaskController",
	"controllers/headerController",
	"directives/autoCompleteDirective",
	"directives/navDropdownDirective",
	"directives/datePickerDirective",
	"angularBootstrap"	
	], function (angular) {
    var app = angular.module('CDSTASKS', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule',"controllerModule","directiveModule","ui.bootstrap"]);
    return app;
});
