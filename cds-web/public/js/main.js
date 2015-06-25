var routes = {

    /*Home page & static pages*/
    "/": {
        module: {
            "app": "appHome",
            "config": "configHome",
            "moduleName": "CDSHOME"
        }
    },
    "/signin": {
        module: {
            "app": "appSignin",
            "config": "configSignin",
            "moduleName": "CDSSIGNIN"
        }
    },
    "/register": {
        module: {
            "app": "appRegister",
            "config": "configRegister",
            "moduleName": "CDSREGISTER"
        }
    },
    "/calendar": {
        module: {
            "app": "appCalendar",
            "config": "configCalendar",
            "moduleName": "CDSCALENDAR"
        }
    },
    "/inbox": {
        module: {
            "app": "appInbox",
            "config": "configInbox",
            "moduleName": "CDSINBOX"
        }
    },
    "/tasks": {
        module: {
            "app": "appTasks",
            "config": "configTasks",
            "moduleName": "CDSTASKS"
        }
    },
    "/dashboard": {
        module: {
            "app": "appDashboard",
            "config": "configDashboard",
            "moduleName": "CDSDASHBOARD"
        }
    },
    "/profile": {
        module: {
            "app": "appProfile",
            "config": "configProfile",
            "moduleName": "CDSUSERPROFILE"
        }
    },
    "/requests": {
        module: {
            "app": "appRequests",
            "config": "configRequests",
            "moduleName": "CDSREQUESTS"
        }
    }
};

function getRoute() {
    var module;
    if (typeof routes[location.pathname] !== "undefined") {
        module = routes[location.pathname];
    }
    return module;
}

var r = getRoute();

function start() {
    require(["jquery", 'angular'], function($, angular) {

        require([r.module.config], function() {
            angular.bootstrap(document, [r.module.moduleName]);
        });
    });
}

start();
