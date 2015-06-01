define(['controllers/controllerModule', 'formValidation', 'validators/addressValidators', 'errorMessages/addressErrors'], function(controllerModule, formValidation, validationMap, errorJson) {

    controllerModule.controller('addressController', ['$state', '$http', "registerService", "appUrlService", "cdsService", "$scope",
        function($state, $http, registerService, appUrls, cdsService, $scope) {
            var self = this,
                dataJson = {};
                 self.user = {};

            handleUserEdit();

            var config = {
                initiate: false,
                blurValidation: false,
                htmlValidation: false,
                submitValidForm: false,
                runCallBack: false,
            };
            var formStack = formValidation.init("#addressRegistrationForm", validationMap, errorJson, config);

           
           
            this.save = function() {
             
                var requestObj = [];

                requestObj[0] = {};
                requestObj[0].postalAddress ={};

        	 if (self.user.iaddressarray.length && self.user.iaddressarray[0].addressLine1)  {       
                console.log("hello");
                requestObj[0].addressLine1 = self.user.iaddressarray[0].addressLine1;
                requestObj[0].addressLine2 = self.user.iaddressarray[0].addressLine2;
                
                requestObj[0].postalAddress.postalAddressId = self.user.postalAddress.postalAddressId ;
                requestObj[0]['nriAddress'] = false;
               
             if (formStack.isValid) {

                    $http({
                        method: "PUT",
                        url: appUrls.updateResidentialAddress,
                        data: requestObj
                    }).success(function(data, status, headers, config) {
                        console.log("success");
                        $state.go('root.profile.editprofile.volunteer');
                    }).error(function(data, status, headers, config) {

                    });
                }
            }
            }


            function handleUserEdit() {
                registerService.getAddressInfo(function(resp) {
                    self.user.iaddressarray = [];                    
                    self.user.postalAddress = {};
                    
                    self.user.iaddressarray.push({});
                    /*self.user.naddressarray.push({});*/
                    self.showSubAddressInfo = false;



                    if (resp.status == "success") {


                         if(resp.data.length){ 
                              
                                    $scope.voterNodeObj = resp.data[0].postalAddress;    
                                
                                
                        }

                        console.log(resp)


                    	self.showSubAddressInfo = true;
                        dataJson = resp.data;
                       	self.user.iaddressarray = [];  

                        self.user.postalAddress = {};
                        self.user.postalAddress.postalAddressId = resp.data[0].postalAddress.postalAddressId;

                        console.log(self.user.postalAddress.postalAddressId);

                        /*Set address array to 1 now . Need to confirm on tiles integration*/
                        for (var i = 0; i < 1; i++) {
                            if (!dataJson[i].nriAddress) {
                                self.user.iaddressarray.push(dataJson[i]);
                            } else {
                                self.user.naddressarray.push(dataJson[i]);
                            }
                        }

                    }

                        console.log(self.user);



                });
            }


   

        }
    ]);

});