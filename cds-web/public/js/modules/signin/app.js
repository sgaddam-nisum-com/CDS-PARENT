/*global define*/
 

define(['uiRouter',
	"ngStorage",
	'uiRouterStyles',
	'services/common/serviceLoader',
	'controllers/signinController',
	"controllers/headerController"	], function () {
    var app = angular.module('CDSSIGNIN', ['ui.router','uiRouterStyles','serviceModule','controllerModule',"ngStorage"]);
    return app;
});
