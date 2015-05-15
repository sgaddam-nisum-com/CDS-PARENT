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
	"directives/autoCompleteDirective",
		], function (angular) {
    var app = angular.module('CDSTASKS', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule',"controllerModule","directiveModule"]);
    return app;
});
