/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',	
	'services/common/serviceLoader',
	'services/dashboardService',
	'controllers/dashboardController',
	"controllers/headerController",
	"controllers/footerController",
	"directives/dashboard/cadreVerificationDirective",
	"directives/dashboard/tasksageChartDirective",
	"directives/dashboard/mytasksChartDirective",
	"directives/dashboard/taskstrendChartDirective",
	"directives/dashboard/selfTasksDirective",
	"directives/navDropdownDirective",
	"angularDashboard",
	"dataModel",
	"angularCookies",
	"angularResource",
	"angularSanitize",
	"angularNvd3",	
	"widgetOptions",
	"angularCharts",
	"angularGrid"
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
    										'ngTouch', 
    										'ui.grid', 
    										'ui.grid.pagination'
    										]);
    return app;
});
