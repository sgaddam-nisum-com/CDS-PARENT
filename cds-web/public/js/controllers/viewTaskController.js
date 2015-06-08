define(['controllers/controllerModule', 'jquery'], function(controllerModule, $) {

    controllerModule.controller('viewTaskController', ['$state',"$rootScope", '$http',"$stateParams", "appUrlService", "cdsService", '$scope', "taskService","appModalService",
        function($state,$rootScope, $http,stateParams, appUrls, cdsService, $scope, taskService,appModalService) {
           console.log(stateParams);
            var self = this;

            self.taskDetails = {};
            self.taskDetails.taskWorkAllocation = {};

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
                self.assignedToCitizenName = angular.copy(self.taskDetails.taskWorkAllocation.firstName) +" "+ angular.copy(self.taskDetails.taskWorkAllocation.lastName);
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



            this.showCadresList = function(queryString){
                $rootScope.queryString = queryString;
                $rootScope.name="helllo";
                cadreModal = appModalService.init("cadreList.html","cadreListController", $rootScope,{class:"cadre-overlay"} )();

                cadreModal.result.then(function(selObj){
                    self.assignedToCitizenName = selObj.value;                    
                    self.taskDetails.taskWorkAllocation.reassignedTo =selObj.id; 
                },function(){                               
                    self.assignedToCitizenName ="";                    
                });
             
            }


            this.save = function() {            

                console.log(cdsService.userInfo);
                console.log(self.taskDetails);
                var reqObj={}
              
              reqObj.statusId = self.taskDetails.taskWorkAllocation.statusId;
              reqObj.completedPercent = self.taskDetails.taskWorkAllocation.completedPercent; 
              reqObj.priorityId =self.taskDetails.taskWorkAllocation.priorityId; 
              reqObj.citizenId = self.taskDetails.taskWorkAllocation.citizenId;
              reqObj.reassignedTo=self.taskDetails.taskWorkAllocation.reassignedTo || self.taskDetails.taskWorkAllocation.citizenId;
              reqObj.taskId = taskId;

              $http({
                    url : appUrls.updateTask,                        
                    method : "PUT",
                    data: reqObj
                }).success(function(data, textStatus, jqXHR) {
                        $state.go("root.tasks");
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
                }).success(function(resp, textStatus, jqXHR) {
                    currentComment.commentedByFN = resp.data.commentedByFN;
                    currentComment.commentedByLN = resp.data.commentedByLN;
                    currentComment.commentedOn = resp.data.commentedOn;
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