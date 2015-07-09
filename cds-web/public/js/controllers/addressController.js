define(['controllers/controllerModule', 'formValidation', 'validators/addressValidators', 'errorMessages/addressErrors', "messageHandler", 'notifications'],
    function(controllerModule, formValidation, validationMap, errorJson, messageHandler, notifications) {

        controllerModule.controller('addressController', ['$state', '$http', "registerService", "appUrlService", "cdsService", "$scope", "$sessionStorage", "$rootScope", "appModalService",
            function($state, $http, registerService, appUrls, cdsService, $scope, $sessionStorage, $rootScope, appModalService) {
                var self = this,
                    dataJson = {};
                self.user = {};
                self.user.postalAddressId = "";
                self.hideAddrFields = true;

                $scope.voterNodeObj = {};
                var cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};

                handleUserEdit(cdsSession.currentUserId);

                this.searchAddress = function(addrsearchtext) {

                    $rootScope.addrsearchtext = addrsearchtext;
                    addressModal = appModalService.init("addressSearchTemplate.html", "addressSearchController", $rootScope, {
                        class: "cadre-overlay"
                    })();
                    addressModal.result.then(function(seladdr) {
                        self.user.postalAddressId = seladdr.fieldValueObj.postalAddressId;
                        self.voterNodeObj = seladdr.fieldValueObj;
                        self.hideAddrFields = false;
                    });
                }

                function handleUserEdit(userId) {

                    if (self.user.postalAddressId == null || self.user.postalAddressId == "") {
                        self.hideAddrFields = true;
                    } else {
                        self.hideAddrFields = false;
                    }
                    registerService.getAddressInfo(userId, function(resp) {

                        self.user.iaddressarray = [];
                        self.user.postalAddress = {};
                        self.user.iaddressarray.push({});
                        self.showSubAddressInfo = false;

                        if (resp.status == "success") {
                            if (resp.data.length) {
                                self.voterNodeObj = resp.data[0].postalAddress;
                            }

                            self.showSubAddressInfo = true;
                            dataJson = resp.data;
                            self.user.iaddressarray = [];
                            self.user.postalAddress = {};
                            self.user.postalAddressId = resp.data[0].postalAddress.postalAddressId;

                            self.hideAddrFields = false;
                            for (var i = 0; i < 1; i++) {
                                if (!dataJson[i].nriAddress) {
                                    self.user.iaddressarray.push(dataJson[i]);
                                } else {
                                    self.user.naddressarray.push(dataJson[i]);
                                }
                            }
                        }
                    });
                }

                var config = {
                    initiate: true,
                    blurValidation: false,
                    htmlValidation: false,
                    submitValidForm: false,
                    runCallBack: false,
                };

                this.save = function() {
                    var formStack = formValidation.init("#addressRegistrationForm", validationMap, errorJson, config);
                    if (formStack.isValid) {
                        var requestObj = [];
                        requestObj[0] = {};
                        requestObj[0].postalAddress = {};

                        if (self.user.iaddressarray.length && self.user.iaddressarray[0].addressLine1) {
                            requestObj[0].addressLine1 = self.user.iaddressarray[0].addressLine1;
                            requestObj[0].addressLine2 = self.user.iaddressarray[0].addressLine2;
                            requestObj[0].postalAddress.postalAddressId = self.user.postalAddressId;
                            requestObj[0]['nriAddress'] = false;
                            var addressReq = {};
                            addressReq.data = requestObj;
                            addressReq.userId = cdsSession.currentUserId;

                        }

                        $http({
                            method: "PUT",
                            url: appUrls.updateResidentialAddress,
                            data: addressReq
                        }).success(function(resp, status, headers, config) {

                            if (resp.status === "success") {

                                messageHandler.showInfoStatus(notifications.address_successfulSave, ".status-message-wrapper");
                                setTimeout(function() {
                                    messageHandler.clearMessageStatus();
                                    $state.go('root.profile.editprofile.volunteer');
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
                        self.isNotValidForm = false;
                    } else {
                        self.isNotValidForm = true;
                    }
                }

            }
        ]);

    });
