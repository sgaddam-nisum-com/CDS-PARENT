/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/serviceLoader',
	'controllers/signinController'
		], function (angular) {
    var app = angular.module('CDSAUTH', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule','controllerModule']);
console.log(app)
    return app;
});
