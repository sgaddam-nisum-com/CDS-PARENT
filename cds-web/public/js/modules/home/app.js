/*global define*/
 

define(['directives/verticalScrollDirective',
	'directives/slickGalleryDirective',
	"directives/galleryDirective",
	'controllers/headerController',
	'controllers/homeController',
	"directives/navDropdownDirective",
	'uiRouter',
	'uiRouterStyles',
	"ngStorage",
	'services/common/serviceLoader',
	"services/common/messageService"], function () {
    var app = angular.module('CDSHOME', ['ui.router','uiRouterStyles','ngStorage','serviceModule','controllerModule',"directiveModule"]);		
    return app;
});
