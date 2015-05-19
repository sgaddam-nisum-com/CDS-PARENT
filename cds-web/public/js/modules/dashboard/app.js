/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
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
	'angularWidgets',
	"widgetOptions"
	], function (angular) {
    var app = angular.module('CDSDASHBOARD', ['ui.router',
    										'uiRouterStyles',
    										'ngRoute',
    										'ngStorage',
    										'serviceModule',
    										'controllerModule',
    										'directiveModule',
    										"ui.dashboard",
    										"app.service",
    										"ngCookies",
    										"ngResource",
    										"ngSanitize",
    										"nvd3ChartDirectives",
    										"ui.widgets",
    										"ui.models"
    										]);
    return app;
});
