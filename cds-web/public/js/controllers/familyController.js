define(['controllers/controllerModule', 'formValidation', 'validators/familyValidators', 'errorMessages/familyErrors', 'jquery', "messageHandler", 'notifications'],

    function(controllerModule, formValidation, validationMap, errorJson, $, messageHandler, notifications) {

        controllerModule.controller('familyController', ['$state', '$http', "appUrlService", "cdsService", '$scope', 'registerService', "$sessionStorage",

            function($state, $http, appUrls, cdsService, $scope, registerService, $sessionStorage) {

                var self = this,
                    dataJson = {};
                self.isNotValidForm = false;

                var cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};

                var reqMethod = "PUT";
                var reqURL = appUrls.updateFamily;


                handleGetFamily(cdsSession.currentUserId);

                var config = {
                    initiate: true,
                    blurValidation: false,
                    htmlValidation: false,
                    submitValidForm: false,
                    runCallBack: false,
                };

                registerService.getEducationOptions(function(resp) {
                    $scope.educationOptions = resp.data;
                });

                var formStack = formValidation.init("#familyRegistrationForm", validationMap, errorJson, config);


                this.backview = function(e) {
                    e.preventDefault();
                    $state.go("root.profile.editprofile.volunteer");
                }

                this.save = function() {

                    if (formStack.isValid) {

                        var requestData = [];
                        var spouseObj = {};
                        var childObj = {};

                        spouseObj.educationId = self.user.spouseData.education.educationId;
                        spouseObj.firstName = self.user.spouseData.firstName;
                        spouseObj.lastName = self.user.spouseData.lastName;
                        spouseObj.middleName = self.user.spouseData.middleName;
                        spouseObj.gender = self.user.spouseData.gender;
                        console.log(spouseObj.gender);
                        if (spouseObj.gender == 'M') {
                            spouseObj.relationType = "Husband";
                        } else {
                            spouseObj.relationType = "Wife";
                        }
                        spouseObj.marriageDate = self.user.spouseData.marriageDate;
                        spouseObj.dateOfBirth = self.user.spouseData.dateOfBirth;
                        requestData.push(spouseObj);

                        if (self.user.childData.length && self.user.childData[0].firstName) {

                            for (var j = 0; j < self.user.childData.length; j++) {
                                childObj.relationType = "Kid";
                                childObj.educationId = self.user.childData[j].education.educationId;
                                childObj.firstName = self.user.childData[j].firstName;
                                childObj.middleName = self.user.childData[j].middleName;
                                childObj.lastName = self.user.childData[j].lastName;
                                childObj.gender = self.user.childData[j].gender;
                                childObj.marriageDate = self.user.childData[j].marriageDate;
                                childObj.dateOfBirth = self.user.childData[j].dateOfBirth;
                                requestData.push(childObj);
                            }

                        }
                        var familyReqObj = {};
                        familyReqObj.data = requestData;
                        familyReqObj.userId = cdsSession.currentUserId;

                        $http({
                            method: reqMethod,
                            url: reqURL,
                            data: familyReqObj
                        }).success(function(resp, status, headers, config) {
                            if (resp.status == "success") {
                                messageHandler.showInfoStatus(notifications.family_successfulSave, ".status-message-wrapper");
                                setTimeout(function() {
                                    messageHandler.clearMessageStatus();
                                    $state.go('root.profile.editprofile.cadre');
                                }, 3000);

                            } else {
                                messageHandler.showErrorStatus(notifications.submissionError, ".status-message-wrapper");
                                setTimeout(function() {
                                    messageHandler.clearMessageStatus();
                                }, 3000);
                            }

                        }).error(function(data, status, headers, config) {
                            messageHandler.showErrorStatus(notifications.submissionError, ".status-message-wrapper");
                            setTimeout(function() {
                                messageHandler.clearMessageStatus();
                            }, 3000);
                        });

                    } else {
                        self.isNotValidForm = true;
                    }
                }


                function handleGetFamily(userId) {
                    registerService.getFamilyInfo(userId, function(resp) {



                        dataJson = resp.data;
                        self.user = {};
                        self.user.childData = [];
                        /*To show primary field*/
                        if (dataJson.length < 2 || !dataJson.length) {
                            self.user.childData = [{}];
                        }

                        if (resp.status == "success") {

                            self.users = resp.data;

                            for (var i = 0; i < self.users.length; i++) {
                                if (self.users[i].relationType == "Wife") {
                                    self.user.spouseData = self.users[i];
                                } else {
                                    self.user.childData.push(self.users[i]);
                                }
                            };


                        }

                    });

                }

            }
        ]);

    });
