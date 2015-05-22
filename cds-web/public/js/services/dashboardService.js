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
                    $http.get(appUrlService.getTasksByAge, {
                        params: {
                            criteria: 'all'
                        }

                    }).success(function(resp) {
                        cb(resp);
                    });
                },
                getTasksByTrend: function(cb) {
                    $http.get(appUrlService.getTasksByTrend, {
                        params: {
                            type: 'all'
                        }

                    }).success(function(resp) {
                        cb(resp);
                    });
                },
                getTaskState: function(cb) {
                    $http.get(appUrlService.getTaskState, {
                        params: {
                            type: 'all'
                        }

                    }).success(function(resp) {
                        cb(resp);
                    });
                }

            }

        }
    ]);
});
