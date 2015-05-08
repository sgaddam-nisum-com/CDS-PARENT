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
		"simplyscroll" : "lib/jquery.simplyscroll"
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
		"uiRouterStyles" : {
			deps :["angular"]
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

    console.log(r);

    function start() {
        require( ['angular', r.module.app, r.module.config ], function ( angular ) {
        	angular.bootstrap(document, [r.module.moduleName]);
           
        } );
    }

    start();


