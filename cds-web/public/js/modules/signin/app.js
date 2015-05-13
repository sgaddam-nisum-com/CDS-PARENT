/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	'controllers/signinController',
	'directives/fixedFooterDirective',
	"controllers/headerController"
	], function (angular) {
    var app = angular.module('CDSSIGNIN', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule','controllerModule','directiveModule']);
    return app;
});
