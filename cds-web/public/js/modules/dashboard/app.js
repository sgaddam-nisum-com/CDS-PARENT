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
	"directives/dashboard/cadreVerificationDirective",
	"directives/dashboard/tasksageChartDirective",
	"directives/dashboard/mytasksChartDirective",
	"directives/dashboard/taskstrendChartDirective",
	"directives/navDropdownDirective",
	"angularDashboard",
	"dataModel",
	"angularCookies",
	"angularResource",
	"angularSanitize",
	"angularNvd3",	
	"widgetOptions",
	"angularCharts"
	], function (angular) {
    var app = angular.module('CDSDASHBOARD', ['ui.router',
    										'uiRouterStyles',
    										'ngRoute',
    										"chart.js",
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
