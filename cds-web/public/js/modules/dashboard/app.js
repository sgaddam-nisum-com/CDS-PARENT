/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	
	'services/common/serviceLoader',
	'controllers/dashboardController',
	"controllers/headerController",
	"controllers/footerController",
	"directives/navDropdownDirective",
	"angularDashboard",
	"dataModel",
	"angularCookies",
	"angularResource",
	"angularSanitize",
	"angularNvd3",
	
	"widgetOptions"
	], function (angular) {
    var app = angular.module('CDSDASHBOARD', ['ui.router',
    										'uiRouterStyles',
    										'ngRoute',
    										
    										'serviceModule',
    										'controllerModule',
    										'directiveModule',
    										"ui.dashboard",
    										"app.service",
    										"ngCookies",
    										"ngResource",
    										"ngSanitize",
    										"nvd3ChartDirectives",
    										]);
    return app;
});
