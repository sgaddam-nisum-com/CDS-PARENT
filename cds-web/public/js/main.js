
var routes = {
        
        /*Home page & static pages*/
        "/": {
            module: {"app":"appHome", "config":"configHome","root" : "home","moduleName":"CDSHOME"}
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
        },
        "/editprofile": {
        	module: {"app":"editprofile", "config":"configeditprofile","moduleName":"CDSEDITPROFILE"}
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


