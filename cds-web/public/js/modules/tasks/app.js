/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	"services/taskService",	
	"controllers/taskController",
	"controllers/headerController",
	"directives/autoCompleteDirective",
	"directives/navDropdownDirective"
	
		], function (angular) {
    var app = angular.module('CDSTASKS', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule',"controllerModule","directiveModule"]);
    return app;
});
