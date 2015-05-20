/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	'services/registerService',
	"controllers/profileController",
	"directives/resourceDirective",
	"directives/datePickerDirective",
	"directives/navDropdownDirective",
	"controllers/headerController",
	"directives/accordionDirective"
	], function (angular) {
    var app = angular.module('CDSUSERPROFILE', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule',"controllerModule","directiveModule"]);    
    return app;
});
