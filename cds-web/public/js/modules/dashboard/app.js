/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	'controllers/dashboardController',
	"directives/fixedFooterDirective"
	], function (angular) {
    var app = angular.module('CDSDASHBOARD', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule','controllerModule','directiveModule']);
    return app;
});
