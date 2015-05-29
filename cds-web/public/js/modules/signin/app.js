/*global define*/
 

define(['uiRouter',
	'uiRouterStyles',
	'services/common/serviceLoader',
	'controllers/signinController',
	"controllers/headerController"	], function () {
    var app = angular.module('CDSSIGNIN', ['ui.router','uiRouterStyles','serviceModule','controllerModule']);
    return app;
});
