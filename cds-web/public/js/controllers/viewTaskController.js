define(['controllers/controllerModule', 'jquery'], function(controllerModule, $) {

    controllerModule.controller('viewTaskController', ['$state', '$http',"$stateParams", "appUrlService", "cdsService", '$scope', "taskService", "$sessionStorage",
        function($state, $http,stateParams, appUrls, cdsService, $scope, taskService, $sessionStorage) {
           console.log(stateParams);
            var self = this;
            var taskId = stateParams.taskId;
            var config = {
                initiate: false,
                blurValidation: false,
                htmlValidation: false,
                submitValidForm: false,
                runCallBack: false,
            };            
            taskService.getTaskDetails(taskId, function(resp){
                self.taskDetails = resp.data;
            });  
            taskService.getTaskStatuses(function(resp){
                self.taskStatuses = resp.data; 
            });  
            taskService.getTaskPriorities(function(resp){
                self.taskPriorities = resp.data;
            });   
            taskService.getTaskPriorities(function(resp){
                self.taskPriorities = resp.data;
            });

        }
    ]);

});