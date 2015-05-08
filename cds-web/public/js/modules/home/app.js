/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	'controllers/homeController',
	'directives/fixedFooterDirective',
	'directives/verticalScrollDirective',

	], function (angular) {
    var app = angular.module('CDSHOME', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule','controllerModule',"directiveModule"]);		
    return app;
});
