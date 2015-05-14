'use strict';
define(['controllers/controllerModule','formValidation', 'validators/personalValidators', 'errorMessages/personalErrors', 'jquery'], function (controllerModule,formValidation, validationMap, errorJson, $) {

	 controllerModule.controller('registerController', ['$scope','$location',"registerService","cdsService","appUrlService", function($scope, $location,registerService, cdsService,appUrlService){

		 	this.showLoader = false;
            this.showImage = true;

            var self = this;
            self.user = {}; 
            self.user.orgId = 2;
            self.user.sourceOfRegistration = "ONLINE";
            self.isValidUsername = true;
            self.isValidEmail = true;
            self.isValidMobileNo = true;                         
            self.isNotValid = false;
            registerService.getInterestedAreasOptions(function(resp){
                self.InterestedAreas = resp.data;
            });                                    
            

            self.isValidForm = function(){
            	if(self.isValidUsername && self.isValidEmail && self.isValidMobileNo){
            		return true;
            	}
            	return;
            }




            var config = {
                initiate: true,
                blurValidation: false,
                htmlValidation: false,
                submitValidForm: false,
                runCallBack: false,
            };

            var formStack = formValidation.init("#registrationForm", validationMap, errorJson, config);


            $scope.$on("clearErrors", function(){
            	formStack.clearErrorClass(formStack,false);
            	self.isNotValid = false;
            });


            self.getGender = function(val) {
                if (val == "F") {
                    cdsService.gender = "female";
                } else {
                    cdsService.gender = "";
                }
            }


            self.trackMembershipType = function(selectedId){
               if(selectedId == "1"){                    
                    self.hideCadreRole = true;
                }else{
                    self.hideCadreRole = false;
                   self.user.cadreType = "NEW";
                }

            }

            self.save = function() {

            	$scope.$broadcast("clearServiceErrors");

                if (formStack.isValid && self.isValidForm()) {

                    var requestObj = {};

                   $.ajax({
                        url: appUrlService.quickReg,
                        type: 'POST',
                        data: self.user,
                        dataType: 'json',
                        success: function(data, textStatus, jqXHR) {

                        },
                        error: function(jqXHR, textStatus, errorThrown) {

                        }
                    });

                }else{
                	self.isNotValid = true;
                }
            };



            function handleUserEdit() {
                self.showImage = false;
                var currentUserId = sessionObj.userId;
                registerService.getPersonalInfo(currentUserId, function(resp) {
                    self.user = resp.data;

                });
            }


            function handleUserCreation() {




            }

            function responseParser(resp) {



            }


	}]);

});

