define(['controllers/controllerModule', 'formValidation', 'validators/personalValidators', 'errorMessages/personalErrors', 'jquery',"messageHandler"], 

    function(controllerModule, formValidation, validationMap, errorJson, $, messageHandler) {

    controllerModule.controller('personalController', ['$state', '$http', "appUrlService", "cdsService", '$scope', 'registerService',"$stateParams","$sessionStorage", 
            function($state, $http, appUrls, cdsService, $scope, registerService,$stateParams, $sessionStorage) {

            var cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};               
           
            this.showLoader = false;
            this.showImage = true;

            var self = this,
            dataJson={};
        

            handleUserEdit(cdsSession.currentUserId);



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
                    cdsSession.gender = "female";
                } else {
                    cdsSession.gender = "";
                }
            }

            this.getAge = function(userDate){
               
                var selectedDate =userDate.split('/'), 
                    birthDate = new Date(selectedDate[2],selectedDate[1],selectedDate[0]),
                    today = new Date(),
                    diff =  today - birthDate,
                    age = Math.floor(diff/31536000000);                             
                    cdsSession.age = age;
                    return age;
            }

            this.save = function() {

                self.user.userId = cdsSession.currentUserId;

                $http({
                    method: "PUT",
                    url: appUrls.updatePersonalInfo,
                    data: self.user 
                }).success(function(resp, status, headers, config){
                    
                    if(resp.status ==="success"){
                        messageHandler.showInfoStatus(errorJson.successfulSave,".status-message-wrapper");
                        setTimeout(function(){
                            messageHandler.clearMessageStatus();
                            cdsService.isMarried = self.user.maritalStatus;  
                            $state.go('root.profile.editprofile.work');    
                        },2000);                                                   

                    }else{
                        messageHandler.showErrorStatus(errorJson.submissionError,".status-message-wrapper");
                    }

                }).error(function(data, status, headers, config){
                   

                });


             
            };



            function handleUserEdit(currentUserId) {
                self.showImage = false;                
                self.user = {};
                registerService.getPersonalInfo(currentUserId,function(resp) {
                  
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
                    self.user.educationId = dataJson.education.educationId;  
                    cdsSession.isMarried = cdsService.isMarried = self.user.maritalStatus ;                  
                    cdsSession.gender = dataJson.gender;
                    cdsSession.age = self.getAge(self.user.dateOfBirth);
                });
            }





        }
    ]);

});