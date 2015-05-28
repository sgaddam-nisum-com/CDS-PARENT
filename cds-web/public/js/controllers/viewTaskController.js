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
            this.save = function() {            

                console.log(cdsService.userInfo);
                console.log(self.taskDetails);
                var reqObj={}
              
              reqObj.statusId = self.taskDetails.taskWorkAllocation.statusId;
              reqObj.completedPercent = self.taskDetails.taskWorkAllocation.completedPercent; 
              reqObj.priorityId =self.taskDetails.taskWorkAllocation.priorityId; 
              reqObj.citizenId = cdsService.userInfo.appUserId;
              reqObj.taskId = taskId;

              $http({
                    url : appUrls.updateTask,                        
                    method : "PUT",
                    data: reqObj
                }).success(function(data, textStatus, jqXHR) {
                        $state.go("root.allTasks");
                }).error(function(jqXHR, textStatus, errorThrown) {

                })  
           


            };

             this.saveComment= function(){

      
                var currentComment = {};
                currentComment.commentDescription = self.comments.commentDescription;
                currentComment.commentBy = cdsService.userInfo.appUserId;
                currentComment.commentType = "public";
                currentComment.taskId = taskId;
                
      
                $http({
                    url : appUrls.addCommentToTask,                        
                    method : "POST",
                    data: currentComment
                }).success(function(data, textStatus, jqXHR) {
                    
                    console.log(currentComment);
                    self.taskDetails.comments.push(currentComment);
                }).error(function(jqXHR, textStatus, errorThrown) {
                    
                });
                self.comments.commentDescription = "";
            }

            this.clear = function(){
                self.comments.commentDescription = "";
            }




        }
    ]);

});