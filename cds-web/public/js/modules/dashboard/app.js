

define(['angular',
	'uiRouter',
	'services/common/serviceLoader',
	"services/dashboardWidgetService",
	'services/dashboardService',
	'controllers/dashboardController',
	"controllers/headerController",
	"controllers/footerController",
	"directives/dashboard/cadreVerificationAllDirective",
	"directives/dashboard/cadreVerificationOfficeDirective",
	"directives/dashboard/cadreVerificationSelfDirective",	
	"directives/dashboard/tasksageChartDirective",
	"directives/dashboard/mytasksChartDirective",
	"directives/dashboard/taskstrendChartDirective",
	"directives/dashboard/selfTasksDirective",
	"directives/dashboard/teamTasksDirective",
	"directives/dashboard/notificationsDirective",
	"directives/dashboard/eventsBannerDirective",
	"directives/navDropdownDirective",
	"angularDashboard",
	"angularResource",
	"angularSanitize",
	"widgetOptions",
	"angularCharts",
	"angularGrid"
	], function (angular) {
    var app = angular.module('CDSDASHBOARD', ['ui.router',
    										"chart.js",
    										'serviceModule',
    										'controllerModule',
    										'directiveModule',
    										"ui.dashboard",
    										"ngResource",
    										"ngSanitize",
    										'ngTouch', 
    										'ui.grid', 
    										'ui.grid.pagination',
    										"ui.bootstrap"
    										]);
    return app;
});
