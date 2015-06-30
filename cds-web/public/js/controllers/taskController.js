define(['controllers/controllerModule', 'formValidation', 'validators/addtaskValidators', 'errorMessages/addtaskErrors', 'jquery', "messageHandler"], function(controllerModule, formValidation, validationMap, errorJson, $, messageHandler) {

    controllerModule.controller('taskController', ["$rootScope",'$state', '$http', "appUrlService", "cdsService", '$scope', "taskService", "appModalService",
        function($rootScope,$state, $http, appUrls, cdsService, $scope, taskService,appModalService) {
           
   
            var self = this;
            self.isNotValidForm = false;
            var config = {
                initiate: true,
                blurValidation: false,
                htmlValidation: false,
                submitValidForm: false,
                runCallBack: false,
            };

            cdsService.getUserSession(function( userData ){
                $scope.userData = userData;
                var appRoles = userData.data.user.appRoles;
                // To display username ONLOAD in Add New Task PAGE, Assign To field
                self.assignedToCitizenName = userData.data.user.citizen.firstName + "" +userData.data.user.citizen.lastName;

                var topRole, rolesArray=[];
                appRoles = appRoles || [];
                
                for(var i=0; i<appRoles.length; i++){
                    rolesArray.push(appRoles[i].roleName);
                }

                if(rolesArray.indexOf("MP") > -1){
                    $scope.topRole = "MP";
                }
            });
                 self.user = {}

            

            self.user.taskWorkAllocation = {};
            self.user.taskWorkAllocation.citizenId = $rootScope.assignedCitizenName;
            
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
            taskService.getsupervisorAllTasks(function(resp){
                $scope.supervisorTaskLists = resp.data.tasks;
            });

            this.showCadresList = function(queryString){
                $rootScope.queryString = queryString;
                cadreModal = appModalService.init("cadreList.html","cadreListController", $rootScope,{class:"cadre-overlay"} )();


                console.log(cadreModal);

                cadreModal.result.then(function(selObj){
                    self.assignedToCitizenName = selObj.value;
                    self.user.taskWorkAllocation.citizenId = selObj.id;                    
                },function(){                               
                    self.assignedToCitizenName ="";
                    self.user.taskWorkAllocation.citizenId = null;
                });
             
            }


           
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
            this.supervisorviewAllTasks = function(){
                $state.go('root.supervisorviewAllTasks');
            }
            this.deleteTask = function(params){
                taskService.deleteTask(params, function(resp){                     
                    console.log(resp);               
                });                
            }

            

            var formStack = formValidation.init("#myTaskForm", validationMap, errorJson, config);
            this.save = function() { 

                if (formStack.isValid) {
                    if(self.user.comments != undefined){
                        var commentsObj= angular.copy(self.user.comments);
                        commentsObj.commentTo = 104;
                        var commentsArray = [];

                        commentsArray.push(commentsObj);
                        self.user.comments = commentsArray;
                    }

                    if(self.user.taskWorkAllocation.citizenId === undefined){
                        
                        console.log($scope.userData);
                        self.user.taskWorkAllocation.citizenId = $scope.userData.data.user.appUserId;
                    }

                    $http({
                        url : appUrls.saveTaskInfo,                        
                        method : "POST",
                        data: self.user
                    }).success(function(resp, textStatus, jqXHR) {
                        if(resp.status === "success"){
                            messageHandler.showErrorStatus(errorJson.successfulSave,".status-message-wrapper");
                                setTimeout(function(){
                                messageHandler.clearMessageStatus();                           
                            },2000);
                            $state.go("root.tasks");
                        }else{
                            messageHandler.showErrorStatus(errorJson.submissionError,".status-message-wrapper");
                                setTimeout(function(){
                                messageHandler.clearMessageStatus();                           
                            },2000);
                        }
                    }).error(function(jqXHR, textStatus, errorThrown) {
                        messageHandler.showErrorStatus(errorJson.submissionError,".status-message-wrapper");
                        setTimeout(function(){
                            messageHandler.clearMessageStatus();                           
                        },2000);
                    })
                }else{
                    self.isNotValidForm = true;
                }
            };
        }
    ]);

});