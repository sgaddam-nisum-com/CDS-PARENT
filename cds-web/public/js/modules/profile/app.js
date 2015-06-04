/*global define*/
 

define(['angular',
	'uiRouter',
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
	"controllers/cadreController",
	"directives/voterDirective",
	"directives/addressDirective",
	"controllers/listController",
	"services/listService"

	], function (angular) {
    var app = angular.module('CDSUSERPROFILE', ['ui.router','serviceModule',"controllerModule","directiveModule"]);    
    return app;
});
