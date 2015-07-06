define(['controllers/controllerModule', 'formValidation', 'validators/voterValidators', 'errorMessages/voterErrors', "messageHandler", 'notifications'],

    function(controllerModule, formValidation, validationMap, errorJson, messageHandler, notifications) {

        controllerModule.controller('voterController', ['$state', '$http', "appUrlService", "cdsService", '$scope', 'registerService', "$sessionStorage",
            function($state, $http, appUrls, cdsService, $scope, registerService, $sessionStorage) {

                var self = this,
                    dataJson = {};

                var cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};
                self.user = {};

                handleGetVoter(cdsSession.currentUserId);

                var config = {
                    initiate: true,
                    blurValidation: false,
                    htmlValidation: false,
                    submitValidForm: false,
                    runCallBack: false
                };
                var formStack = formValidation.init("#voterRegistrationForm", validationMap, errorJson, config);

                this.save = function() {


                    var reqObj = {};

                    reqObj.voterCardId = self.user.voterCardId;
                    reqObj.treeDataId = self.user.treeDataId;
                    reqObj.addressLine1 = self.user.addressLine1;
                    reqObj.addressLine2 = self.user.addressLine2;
                    reqObj.voterId = self.user.voterId;
                    reqObj.userId = cdsSession.currentUserId;



                    $http({
                        method: dataJson.reqMethod,
                        url: dataJson.reqURL,
                        data: reqObj
                    }).success(function(resp, status, headers, config) {

                        if (resp.status == "success") {

                            messageHandler.showInfoStatus(notifications.voter_successfulSave, ".status-message-wrapper");
                            setTimeout(function() {
                                messageHandler.clearMessageStatus();
                                $state.go('root.profile.editprofile.address');
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



                }


                function generateParamObject(objString) {
                    objString = objString || "";
                    var keysArray = objString.split(",");
                    var keysObj = {};
                    for (var i = 0; i < keysArray.length; i++) {
                        var splitArray = keysArray[i].split(":");
                        keysObj[splitArray[0]] = splitArray[1];
                    }
                    return keysObj;
                }

                function handleGetVoter(userId) {
                    registerService.getVoterInfo(userId, function(resp) {
                        dataJson = resp.data;

                        if (dataJson.voterId) {
                            dataJson.reqMethod = "PUT";
                            dataJson.reqURL = appUrls.updateVoterInfo;
                        } else {
                            dataJson.reqMethod = "POST";
                            dataJson.reqURL = appUrls.saveVoterInfo;
                        }


                        self.user.addressLine1 = dataJson.addressLine1;
                        self.user.addressLine2 = dataJson.addressLine2;
                        self.user.voterCardId = dataJson.voterCardId;
                        self.user.voterId = dataJson.voterId;
                        self.user.treeDataId = dataJson.treeDataId;
                        $scope.voterNodeObj = generateParamObject(dataJson.consituency);
                    });
                }



            }
        ]);

    });
