define(['controllers/controllerModule','formValidation','validators/personalValidators', 'errorMessages/personalErrors', 'jquery'], function(controllerModule,formValidation,validationMap, errorJson, $) {

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
            var formStack = formValidation.init("#myTaskForm", validationMap, errorJson, config);
            taskService.getTaskCategories(function(resp) {
                $scope.taskCategoryOptions = resp.data;
            });
            taskService.getTasks(function(resp){
                $scope.taskLists = resp.data;
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
            }
            this.viewTask = function(){
                $state.go('root.viewTasks');
            }

            this.save = function() {
                
                if (formStack.isValid) {

                    var data = new FormData();

                    for (var key in self.user) {
                        data.append(key, self.user[key]);
                    }
                    console.log(data);
                    $.ajax({
                        url: appUrls.saveTaskInfo,
                        type: 'POST',
                        data: data,
                        cache: false,
                        dataType: 'json',
                        processData: false, // Don't process the files
                        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                        success: function(data, textStatus, jqXHR) {
                           
                        },
                        error: function(jqXHR, textStatus, errorThrown) {

                        }
                    });
                }
            };
        }
    ]);

});