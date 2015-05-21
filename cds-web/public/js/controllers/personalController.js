define(['controllers/controllerModule', 'formValidation', 'validators/personalValidators', 'errorMessages/personalErrors', 'jquery'], function(controllerModule, formValidation, validationMap, errorJson, $) {

    controllerModule.controller('personalController', ['$state', '$http', "appUrlService", "cdsService", '$scope', 'registerService', "$sessionStorage",
        function($state, $http, appUrls, cdsService, $scope, registerService, $sessionStorage) {


            this.showLoader = false;
            this.showImage = true;

            var self = this;
        

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
             
                console.log(self.user);


                if (true) {

                    $.ajax({
                        url: appUrls.updatePersonalInfo,
                        type: 'PUT',
                        data: self.user,
                        cache: false,
                        dataType: 'json',
                        success: function(data, textStatus, jqXHR) {
                            cdsService.setUserId(data.data.id);
                            $state.go('root.register.work');
                        },
                        error: function(jqXHR, textStatus, errorThrown) {



                        }
                    });

                }
            };



            function handleUserEdit() {
                self.showImage = false;                
                registerService.getPersonalInfo(function(resp) {
                    self.user = resp.data;
                });
            }





        }
    ]);

});