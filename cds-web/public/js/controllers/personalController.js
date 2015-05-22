define(['controllers/controllerModule', 'formValidation', 'validators/personalValidators', 'errorMessages/personalErrors', 'jquery'], function(controllerModule, formValidation, validationMap, errorJson, $) {

    controllerModule.controller('personalController', ['$state', '$http', "appUrlService", "cdsService", '$scope', 'registerService', "$sessionStorage",
        function($state, $http, appUrls, cdsService, $scope, registerService, $sessionStorage) {


            this.showLoader = false;
            this.showImage = true;

            var self = this,
            dataJson;
        

            handleUserEdit();

            $('#left-nav-mobile').change(function() {
                $state.go('root.register.work');
            });

            registerService.getEducationOptions(function(resp) {
                $scope.educationOptions = resp.data;
            });


            var self = this;
            var config = {
                initiate: false,
                blurValidation: false,
                htmlValidation: false,
                submitValidForm: false,
                runCallBack: false,
            };
            var formStack = formValidation.init("#personalRegistrationForm", validationMap, errorJson, config);

            var fileObj = {};

            $(".mock-browse").on("click", function() {
                $('#profilePhoto').trigger("click");
            });

            $('#profilePhoto').on('change', prepareUpload);

            function prepareUpload(event) {
                var pathValue = $(this).val().replace("C:\\fakepath\\", "");
                $(".mock-input").val(pathValue);
                fileObj.name = event.target.name;
                fileObj.value = event.target.files[0];
            }

            this.getGender = function(val) {
                if (val == "F") {
                    cdsService.gender = "female";
                } else {
                    cdsService.gender = "";
                }
            }

            this.save = function() {

                cdsService.isRegistered = true;

                $http({
                    method: "PUT",
                    url: appUrls.updatePersonalInfo,
                    data: self.user 
                }).success(function(data, status, headers, config){
                    console.log("success");
                    $state.go('root.profile.editprofile.work');
                }).error(function(data, status, headers, config){
                   

                });


             
            };



            function handleUserEdit() {
                self.showImage = false;                
                self.user = {};
                registerService.getPersonalInfo(function(resp) {
                  
                    $scope.dataJson = dataJson = resp.data;

                    self.user.firstName = dataJson.firstName;
                    self.user.middleName = dataJson.middleName;
                    self.user.lastName = dataJson.lastName;
                    self.user.loginId = dataJson.loginId;
                    self.user.gender = dataJson.gender;
                    self.user.dateOfBirth = dataJson.dateOfBirth;
                    self.user.mobileNumber = dataJson.mobileNumber;
                    self.user.phoneNumber = dataJson.phoneNumber;
                    self.user.emailId = dataJson.emailId;
                    self.user.skypeId = dataJson.skypeId;
                    self.user.maritalStatus = dataJson.maritalStatus;
                    self.user.educationId = dataJson.educationId;


                });
            }





        }
    ]);

});