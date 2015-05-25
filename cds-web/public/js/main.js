
var routes = {
        
        /*Home page & static pages*/
        "/": {
            module: {"app":"appHome", "config":"configHome","root" : "home","moduleName":"CDSHOME"}
        },
        "/signin": {
            module: {"app":"appSignin", "config":"configSignin","root" : "home","moduleName":"CDSSIGNIN"}
        },
        "/register": {
            module: {"app":"appRegister", "config":"configRegister","root" : "home","moduleName":"CDSREGISTER"}
        },
        "/calendar": {
            module: {"app":"appCalendar", "config":"configCalendar","root" : "home","moduleName":"CDSCALENDAR"}
        },
        "/inbox": {
            module: {"app":"appInbox", "config":"configInbox","root" : "home","moduleName":"CDSINBOX"}
        },
        "/tasks": {
            module: {"app":"appTasks", "config":"configTasks","root" : "home","moduleName":"CDSTASKS"}
        },
        "/dashboard": {
            module: {"app":"appDashboard", "config":"configDashboard","root" : "home","moduleName":"CDSDASHBOARD"}
        },
        "/profile": {
            module: {"app":"appProfile", "config":"configProfile","root" : "home","moduleName":"CDSUSERPROFILE"}
        },
        "/editprofile": {
        	module: {"app":"editprofile", "config":"configeditprofile","root" : "home","moduleName":"CDSEDITPROFILE"}
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
        require( ["jquery",'angular'], function ( $,angular ) {        	
        	require([r.module.config, cds.depModuleRootPath+"/"+r.module.root+"/dep" ],function(){
        		angular.bootstrap(document, [r.module.moduleName]);	
        	});           
        } );
    }

    start();


