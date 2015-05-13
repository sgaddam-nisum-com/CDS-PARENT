/*global define*/
'use strict';

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
	"directives/navDropdownDirective"
	], function (angular) {
    var app = angular.module('CDSUSERPROFILE', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule',"controllerModule","directiveModule"]);
    
    return app;
});
