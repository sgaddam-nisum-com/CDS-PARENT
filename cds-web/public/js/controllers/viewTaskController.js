define(['controllers/controllerModule', 'jquery'], function(controllerModule, $) {

    controllerModule.controller('viewTaskController', ['$state',"$rootScope", '$http',"$stateParams", "appUrlService", "cdsService", '$scope', "taskService","appModalService",
        function($state,$rootScope, $http,stateParams, appUrls, cdsService, $scope, taskService,appModalService) {
           console.log(stateParams);
            var self = this;

            self.assignedTask = false;

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

                $scope.existingAttachments = resp.data.taskAttachments ;
                $scope.attachmentViewPath = resp.data.rootPath;

                for(var i=0; i<$scope.existingAttachments.length; i++){
                     $scope.existingAttachments[i].filePath = $scope.attachmentViewPath+$scope.existingAttachments[i].attachmentName;
                }


                

                console.log( $scope.existingAttachments);

                self.assigneeObj = generateParamObject(resp.data.taskWorkAllocation.constituency);
                var CitizenIds = resp.data.citizenId;

                cdsService.getUserSession(function( userData ){
                    if(userData.data.user.appUserId === CitizenIds){
                        self.assignedTask = false;
                    }else{
                        self.assignedTask = true;
                    }
                });

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


        




             this.submitAttachments = function(e){

                 this.taskAttachments = [];

                console.log($("#profileHandler").get(0).files);

                     e.preventDefault();
                             //$("#previewHolder").attr("src","images/cds-loader.gif").css({width : "20px", height:"20px"});

                             var formFileObj = new FormData();

                             formFileObj.append("photograph", fileObj);
                             console.log(formFileObj);

                             if (scope.initiateUpload) {
                                 scope.showUploaderOverlay = false;
                                 scope.showLoader = true;
                                 var imageUploadPromise = $.ajax({
                                     xhr: function() {
                                         var xhr = new window.XMLHttpRequest();

                                         xhr.upload.addEventListener("progress", function(evt) {
                                             console.log(evt.loaded);
                                             if (evt.lengthComputable) {

                                                 scope.$apply(function() {
                                                     var percentComplete = (evt.loaded / evt.total) * 100;
                                                     scope.uploadPercentage = scope.uploadStatusMsg = percentComplete + "%";
                                                 });
                                             }
                                         }, false);

                                         xhr.upload.addEventListener("load", function(evt) {
                                             $timeout(function() {
                                                 scope.uploadStatusMsg = "Updation completed."
                                                 $timeout(function() {
                                                     scope.showLoader = false;
                                                 }, 3000);
                                             }, 2000);
                                         });
                                        return xhr;
                                     },
                                     type: "POST",
                                     url: appUrls.updateProfileImage,
                                     data: formFileObj,
                                     processData: false,
                                     contentType: false

                                 }).success(function(resp, status, headers, config) {
                                     scope.initiateUpload = false;

                                 }).error(function() {

                                 });

                             }else{
                                scope.showLoader = true;
                                scope.uploadPercentage = "100%";
                                scope.uploadStatusMsg = "Please choose new image";
                                $timeout(function(){
                                    scope.showLoader = false;
                                },2000);

                             }


                

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

           function generateParamObject(objString){                    
                objString = objString || "";
                var keysArray = objString.split(",");
                var keysObj = {};                    
                for(var i=0; i<keysArray.length; i++){
                    var splitArray = keysArray[i].split(":");
                    keysObj[splitArray[0]]=splitArray[1];
                }
                return keysObj;
            }






        }
    ]);

});