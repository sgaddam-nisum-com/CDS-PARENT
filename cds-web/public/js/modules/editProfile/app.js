
/*global define*/
'use strict';

define(['angular',
	'uiRouter',
	'uiRouterStyles',
	'angularRoute',
	"ngStorage",
	'services/common/serviceLoader',
	'controllers/leftNavController',
	'controllers/personalController',
	"services/registerService"
	], function (angular) {
    var app = angular.module('CDSEDITPROFILE', ['ui.router','uiRouterStyles','ngRoute','ngStorage','serviceModule','controllerModule']);		
    return app;
});

// 'use strict';

// define(['angular',
// 	'uiRouter',
// 	'uiRouterStyles',
// 	'angularRoute',
// 	'ngStorage',
// 	'services/common/serviceLoader',
// 	'controllers/leftNavController',
// 	'controllers/headerController',
// 	'controllers/personalController',
// 	'controllers/workController',
// 	'controllers/voterController',
// 	'controllers/addressController',
// 	'controllers/volunteerController',
// 	'controllers/familyController',
// 	'controllers/cadreController',
// 	], function (angular) {
// 		var app = angular.module('CDSEDITPROFILE', ['ui.router', 'ngRoute',	'ngStorage', 'serviceModule', 'controllerModule']);	
// 		return app;
// 	});

