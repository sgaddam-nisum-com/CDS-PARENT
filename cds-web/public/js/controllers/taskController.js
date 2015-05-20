define(['controllers/controllerModule', 'jquery'], function(controllerModule, $) {

    controllerModule.controller('taskController', ['$state', '$http', "appUrlService", "cdsService", '$scope', "taskService", "$sessionStorage",
        function($state, $http, appUrls, cdsService, $scope, taskService, $sessionStorage) {
           
            var self = this;
            var config = {
                initiate: false,
                blurValidation: false,
                htmlValidation: false,
                submitValidForm: false,
                runCallBack: false,
            };
            
            taskService.getTaskCategories(function(resp) {
                $scope.taskCategoryOptions = resp.data;
            });
            taskService.getTasks(function(resp){
                $scope.taskLists = resp.data;
            });
            taskService.getTaskPriorities(function(resp){
                $scope.taskPriorities = resp.data;
            });
            
             $scope.taskLists = [{

                status:"OPEN",
                Priority: "MEDIUM",
                AssignedTo:"Jon Steve",
                AssignedDate :" 5/14/2015",
                TargetDate:"5/20/2015",
                location: "Hyderabad",
                createdBy : "Rao on mar 23 2015"
                
            }, {
                status:"IN_PROGRESS",
                Priority: "MEDIUM",
                AssignedTo:"Jon Steve",
                AssignedDate :" 5/14/2015",
                TargetDate:"5/20/2015",
                location: "Hyderabad",
                createdBy : "Rao on mar 23 2015"
            }, {
                status:"ASSIGNED",
                Priority: "MEDIUM",
                AssignedTo:"Jon Steve",
                AssignedDate :" 5/14/2015",
                TargetDate:"5/20/2015",
                location: "Hyderabad",
                createdBy : "Rao on mar 23 2015"
            }];

            this.newTask = function(){
                $state.go('root.addTask');
            };
            this.viewTask = function(){
                $state.go('root.viewTasks');
            };

            this.save = function() {             
                   
                   $http.post(
                        appUrls.saveTaskInfo,                        
                    {
                        data: self.user,
                        cache: false,
                        dataType: 'json',
                        processData: false, // Don't process the files
                        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                    }).success(function(data, textStatus, jqXHR) {
                            
                     }).error(function(jqXHR, textStatus, errorThrown) {

                     })
               
            };
        }
    ]);

});