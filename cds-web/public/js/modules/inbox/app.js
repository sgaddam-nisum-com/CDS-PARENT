/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
		], function (angular) {
    var app = angular.module('CDSINBOX', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule']);
    return app;
});
