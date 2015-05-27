define(['services/serviceModule'], function(serviceModule) {
    serviceModule.factory('dashboardService', ['$http', 'appUrlService',
        function($http, appUrlService) {
            return {

                getMyTasks: function(cb) {
                    $http.get(appUrlService.getMyTasksList, {

                    }).success(function(resp) {
                      cb(resp)
                    });
                },
                getTeamTasks : function(cb){
                    $http.get(appUrlService.getTeamTasks,{
                        
                    }).success(function(resp){
                        cb(resp);
                    });
                },

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
                },
                getAllCadreVerifications:function(cb){
                    $http.get(appUrlService.getCadreVerifications, {
                        params: {
                            type:'All'
                        }
                    }).success(function(resp) {
                        cb(resp);
                    });
                },
                 getSelfCadreVerifications:function(cb){
                    $http.get(appUrlService.getCadreVerifications, {
                        params: {
                            type:'AssignedToMe'
                        }
                    }).success(function(resp) {
                        cb(resp);
                    });
                },
                 getOfficeCadreVerifications:function(cb){
                    $http.get(appUrlService.getCadreVerifications, {
                        params: {
                            type:'ServiceCenter'
                        }
                    }).success(function(resp) {
                        cb(resp);
                    });
                },
                getNotifications:function(cb){
                     $http.get(appUrlService.getNotifications, {
                    }).success(function(resp) {
                        cb(resp);
                    });

                }

            }

        }
    ]);
});
