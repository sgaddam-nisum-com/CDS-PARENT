'use strict';
define(['controllers/controllerModule','formValidation', 'validators/personalValidators', 'errorMessages/personalErrors', 'jquery'], function (controllerModule,formValidation, validationMap, errorJson, $) {

	 controllerModule.controller('registerController', ['$scope','$location',"registerService","cdsService","appUrlService", function($scope, $location,registerService, cdsService,appUrlService){
		

		 	this.showLoader = false;
            this.showImage = true;

            var self = this;

            this.user = {};                                
            this.user.InterestedAreas = [{ interestId : "1", label : "Registration"},
                                                { interestId : "2", label : "Registrati22"},
                                                { interestId : "3", label : "Infra Arrangements"},
                                                {interestId : "4", label : "Meeting organizations"}];

            this.user.volunteerInterestedAreas = this.user.InterestedAreas[0];

            var self = this;
            var config = {
                initiate: false,
                blurValidation: false,
                htmlValidation: false,
                submitValidForm: false,
                runCallBack: false,
            };
            var formStack = formValidation.init("#registrationForm", validationMap, errorJson, config);

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

                if (formStack.isValid) {

                    var data = new FormData();

                    for (var key in self.user) {
                        data.append(key, self.user[key]);
                    }

                    if (fileObj.value) {
                        data.append(fileObj.name, fileObj.value);
                    }
                    $.ajax({
                        url: appUrlService.quickReg,
                        type: 'POST',
                        data: data,
                        cache: false,
                        dataType: 'json',
                        processData: false, // Don't process the files
                        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                        success: function(data, textStatus, jqXHR) {
/*                            cdsService.setUserId(data.data.id);
                            $state.go('root.register.work');
*/
                            console.log(data);

                        },
                        error: function(jqXHR, textStatus, errorThrown) {

                        }
                    });

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

