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
            taskService.getMyTasks(function(resp){
                $scope.myTaskLists = resp.data.tasks;               
            });
            taskService.getTaskPriorities(function(resp){
                $scope.taskPriorities = resp.data;
            });
            taskService.getTeamTasks(function(resp){
                $scope.teamTasks = resp.data.tasks;                
            });
            taskService.getAllTasks(function(resp){
                $scope.allTasks = resp.data.tasks;                
            });
           
            this.newTask = function(){
                $state.go('root.addTask');
            };
            this.viewTask = function(params){                
                $state.go('root.viewTasks',{"taskId":params});
            };
            this.viewTeamTasks = function(){
                $state.go('root.teamTasks');                
            };
            this.viewAllTasks = function(){                
                $state.go('root.allTasks');                
            }
            this.deleteTask = function(params){
                taskService.deleteTask(params, function(resp){                     
                    console.log(resp);               
                });                
            }

            this.save = function() { 
            
                var commentsObj= angular.copy(self.user.comments);
                commentsObj.commentTo = 104;
                var commentsArray = [];
                commentsArray.push(commentsObj);
                self.user.comments = commentsArray;

                $http({
                    url : appUrls.saveTaskInfo,                        
                    method : "POST",
                    data: self.user
                }).success(function(data, textStatus, jqXHR) {
                        $state.go("root.allTasks");
                }).error(function(jqXHR, textStatus, errorThrown) {

                })
               
            };
        }
    ]);

});