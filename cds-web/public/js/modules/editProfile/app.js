
/*global define*/
 

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	'controllers/leftNavController',
	'controllers/personalController',
	'controllers/headerController',
	"services/registerService"
	], function (angular) {
    var app = angular.module('CDSEDITPROFILE', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule','controllerModule']);		
    return app;
});

