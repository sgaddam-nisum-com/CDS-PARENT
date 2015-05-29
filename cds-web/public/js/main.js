
var routes = {
        
        /*Home page & static pages*/
        "/": {
            module: {"app":"appHome", "config":"configHome","root" : "home","moduleName":"CDSHOME"}
        },
        "/signin": {
            module: {"app":"appSignin", "config":"configSignin","root" : "signin","moduleName":"CDSSIGNIN"}
        },
        "/register": {
            module: {"app":"appRegister", "config":"configRegister","root" : "register","moduleName":"CDSREGISTER"}
        },
        "/calendar": {
            module: {"app":"appCalendar", "config":"configCalendar","root" : "calendar","moduleName":"CDSCALENDAR"}
        },
        "/inbox": {
            module: {"app":"appInbox", "config":"configInbox","root" : "inbox","moduleName":"CDSINBOX"}
        },
        "/tasks": {
            module: {"app":"appTasks", "config":"configTasks","root" : "tasks","moduleName":"CDSTASKS"}
        },
        "/dashboard": {
            module: {"app":"appDashboard", "config":"configDashboard","root" : "dashboard","moduleName":"CDSDASHBOARD"}
        },
        "/profile": {
            module: {"app":"appProfile", "config":"configProfile","root" : "profile","moduleName":"CDSUSERPROFILE"}
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
        require( ["jquery",'angular',"require"], function ( $,angular,require ) {        	
        	require([r.module.config, cds.depModuleRootPath+"/"+r.module.root+"/dep" ],function(){
        		angular.bootstrap(document, [r.module.moduleName]);	
        	});           
        } );
    }

    start();


