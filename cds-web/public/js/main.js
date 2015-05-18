/*global require*/
'use strict';


require.config({
	baseUrl : "js",
	paths: {

		"appHome" : "modules/home/app",
		"configHome" : "modules/home/config",
		
		"appSignin" : "modules/signin/app",
		"configSignin" : "modules/signin/config",
		
		"appRegister" : "modules/register/app",
		"configRegister" : "modules/register/config",
		
		"appCalendar" : "modules/calendar/app",
		"configCalendar" : "modules/calendar/config",

		"appInbox" : "modules/inbox/app",
		"configInbox" : "modules/inbox/config",

		"appTasks":"modules/tasks/app",
		"configTasks":"modules/tasks/config",

		"appDashboard":"modules/dashboard/app",
		"configDashboard":"modules/dashboard/config",

		"appProfile":"modules/profile/app",
		"configProfile":"modules/profile/config",


		/*Services, Controllers & directives*/		 		 		 
		 "angular": 'lib/angular',
		'angularRoute' : 'lib/angular-route',
		'angularAnimate' : 'lib/angular-animate',
		'angularResource' : 'lib/angular-resource',
		"services":"services",
		"directives":"directives",
		"controllers":"controllers",
		"uiRouter": "lib/angular-ui-router",
		"jquery" : "lib/min/jquery-1.11.2.min",
		"underscore" : "lib/min/underscore-min",
		"ngDialog" : "lib/ngDialog",
		"validation":"lib/validation",
		"formValidation":"lib/formValidation",
		"core" : "lib/jqueryui/core",
        "widget": "lib/jqueryui/widget",
        "tooltip" : "lib/jqueryui/tooltip",
        "autocomplete" :"lib/jqueryui/autocomplete",
        "datepicker" : "lib/jqueryui/datepicker",
        "position" : "lib/jqueryui/position",
        "inputTooltip" : "lib/inputTooltip",
		"menu" :"lib/jqueryui/menu",
		"uiRouterStyles" : "lib/ui-router-styles",
		"validators" :"lib/validators",
		"errorMessages" : "lib/errorMessages",
		"ngStorage" : "lib/ngStorage",
		/*Foundation*/		
		"slick" : "lib/slick",
		"simplyscroll" : "lib/jquery.simplyscroll",
		"gallery" : "lib/jqueryGallery",

		/*Dashboard*/

		"angularDashboard" : "lib/dashboard/angular-dashboard",
		"dataModel" : "lib/dashboard/datamodel",
		"angularCookies" : "lib/dashboard/angular-cookies",
		"angularResource" : "lib/dashboard/angular-resource",
		"angularSanitize" : "lib/dashboard/angular-sanitize",
		"angularNvd3" :"lib/dashboard/angularjs-nvd3-directives",
		"d3" : "lib/dashboard/d3",
		"nvd3" : "lib/dashboard/nv.d3",
		"angularBootstrap" : "lib/dashboard/ui-bootstrap-tpls",
		"angularSortable" : "lib/dashboard/sortable",
		"jqueryUI" : "lib/dashboard/jquery-ui",
		"angularWidgets" : "lib/dashboard/angular-widgets",
		"angularTable" : "lib/dashboard/angular-table",
		"pnotifyCore" :"lib/dashboard/pnotify.core",
		"pnotify" : "lib/dashboard/pnotify",
		"visibly" : "lib/dashboard/visibly",
		"visibilityCore" : "lib/dashboard/visibility.core",
		"widgetOptions" :"lib/dashboard/widgetOptions"

	},
	shim: {
		angular: {
			exports: 'angular'
		},
		'angularAnimate' : {
			exports : 'angular-animate',
			deps : ['angular']
		},
		'angularResource' : {
			exports : 'resource',
			deps: ['angular']
		},
		'angularRoute': {
			deps: ['angular']
		},
		'uiRouter':{
            deps: ['angular']
        },
		'underscore' : {
            exports : '_'
		},
		'ngDialog' : {
			deps : ['angular']
		},
		'ngStorage' : {
			deps : ['angular']
		},
		"foundation" : {
			deps : ["jquery"]
		},
		"slick" : {
			deps:["jquery"]
		},
		"simplyscroll" : {
			deps:["jquery"]
		},
		"uiRouterStyles" : {
			deps :["angular"]
		},
		"gallery/jquery.galleriffic" : {
			deps:["jquery"]
		},
		"gallery/jquery.history" : {
			deps:["jquery"]
		},
		"gallery/jquery.opacityrollover" : {
			deps:["jquery"]
		}

	}
});



var routes = {
        
        /*Home page & static pages*/
        "/": {
            module: {"app":"appHome", "config":"configHome","moduleName":"CDSHOME"}
        },
        "/signin": {
            module: {"app":"appSignin", "config":"configSignin","moduleName":"CDSSIGNIN"}
        },
        "/register": {
            module: {"app":"appRegister", "config":"configRegister","moduleName":"CDSREGISTER"}
        },
        "/calendar": {
            module: {"app":"appCalendar", "config":"configCalendar","moduleName":"CDSCALENDAR"}
        },
        "/inbox": {
            module: {"app":"appInbox", "config":"configInbox","moduleName":"CDSINBOX"}
        },
        "/tasks": {
            module: {"app":"appTasks", "config":"configTasks","moduleName":"CDSTASKS"}
        },
        "/dashboard": {
            module: {"app":"appDashboard", "config":"configDashboard","moduleName":"CDSDASHBOARD"}
        },
        "/profile": {
            module: {"app":"appProfile", "config":"configProfile","moduleName":"CDSUSERPROFILE"}
        }                  
    };

    function getRoute() {
        var module;
        if ( typeof routes[ location.pathname ] !== "undefined" ) {
            module = routes[ location.pathname ];
        }
        return module;
    }

    var r = getRoute();
    function start() {
        require( ["jquery",'angular', r.module.app, r.module.config ], function ( $,angular ) {
        	angular.bootstrap(document, [r.module.moduleName]);
           
        } );
    }

    start();


