 define(['controllers/controllerModule', 'formValidation','validators/registrationValidators', 'errorMessages/registrationErrors','notifications'], function(controllerModule, formValidation, validationMap, errorJson, notifications) {

     controllerModule.controller('forgotpwdController', ['$scope', "$http", "cdsService", "appUrlService", "roleService", "$window", "appModalService",


         function($scope, $http, cdsService, appUrlService, roleService, $window, appModalService) {
            self = this;
            self.userName = "";
            self.successMsg = "";

             var config = {
                 initiate: true,
                 blurValidation: false,
                 htmlValidation: false,
                 submitValidForm: false,
                 runCallBack: false,
             };

            var formStack = formValidation.init("#forgotpwdForm", validationMap, errorJson, config);

             self.save = function() {
                 $scope.$broadcast("clearServiceErrors");

                 if (formStack.isValid && self.isValidForm()) {
                     var requestObj = {};
                     $http.get(appUrlService.forgotpwd, {
                         params: {
                            userName: self.userName,
                            orgId: "2"
                        }
                     }).success(function(resp, status, headers, config) {
                         if (resp.status == "success") {
                                self.successMsg = "success";
                         } else {
                            self.successMsg = "failure";
                         }
                     }).error(function(data, status, headers, config) {
                            self.successMsg = "failure";
                     });


                 } else {
                     self.isNotValid = true;
                 }
             };

             self.isValidForm = function() {
                 if (true) {
                     return true;
                 }
                 return;
             }
         }
     ]);

 });
