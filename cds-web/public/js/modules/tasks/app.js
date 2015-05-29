/*global define*/
 

define([
	'uiRouter',
	'services/common/serviceLoader',
	"services/taskService",	
	"controllers/taskController",
	"controllers/viewTaskController",
	"controllers/headerController",
	"directives/autoCompleteDirective",
	"directives/navDropdownDirective",
	"directives/datePickerDirective",
	"angularBootstrap",
	"services/common/appModalService",
	"modalControllers/cadreListController"	
	], function () {
    var app = angular.module('CDSTASKS', ['ui.router','serviceModule',"controllerModule","directiveModule","ui.bootstrap"]);
    return app;
});
