/*global define*/
 

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	'controllers/signinController',
	"controllers/headerController"	
	], function (angular) {
    var app = angular.module('CDSSIGNIN', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule','controllerModule']);
    return app;
});
