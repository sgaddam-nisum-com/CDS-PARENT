define(['services/serviceModule'], function(serviceModule) {
    serviceModule.factory('dashboardService', ['$http', 'appUrlService',
        function($http, appUrlService) {
            return {
                getTasks: function(cb) {
                    $http.get(appUrlService.getTasksList, {


                    }).success(function(resp) {
                        cb(resp);
                    });
                },
                getTasksByAge: function(cb) {
                    $http.get(appUrlService.getTasksList, {


                    }).success(function(resp) {
                        cb(resp);
                    });
                },
                getTasksByTrend: function(cb) {
                    $http.get(appUrlService.getTasksList, {


                    }).success(function(resp) {
                        cb(resp);
                    });
                },

            }

        }
    ]);
});
