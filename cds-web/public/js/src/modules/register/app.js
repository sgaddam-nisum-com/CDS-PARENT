/*global define*/
 

define(['uiRouter',
	'services/common/serviceLoader',
	'services/registerService',
	"controllers/registerController",
	"directives/resourceDirective",
	"directives/datePickerDirective",
	"controllers/headerController"], function () {
    var app = angular.module('CDSREGISTER', ['ui.router','serviceModule',"controllerModule","directiveModule"]);
    return app;
});
