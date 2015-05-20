/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	'services/registerService',
	"controllers/profileController",
	"directives/resourceDirective",
	"directives/datePickerDirective",
	"directives/navDropdownDirective",
	"controllers/headerController",
	"directives/accordionDirective",
	"controllers/leftNavController",
	"controllers/personalController",
	"controllers/workController",
	"controllers/voterController",
	"controllers/addressController",
	"controllers/volunteerController",
	"controllers/familyController",
	"controllers/cadreController"

	], function (angular) {
    var app = angular.module('CDSUSERPROFILE', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule',"controllerModule","directiveModule"]);    
    return app;
});
