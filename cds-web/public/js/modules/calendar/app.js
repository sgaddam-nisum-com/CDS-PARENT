/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
		], function (angular) {
    var app = angular.module('CDSCALENDAR', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule']);
    return app;
});
