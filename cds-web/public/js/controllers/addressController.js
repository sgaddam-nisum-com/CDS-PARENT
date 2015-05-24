
 

define(['controllers/controllerModule','formValidation','validators/addressValidators','errorMessages/addressErrors'], function (controllerModule,formValidation,validationMap,errorJson) {

	 controllerModule.controller('addressController', ['$state','$http',"registerService","appUrlService","cdsService","$sessionStorage","$scope", function($state,$http,registerService,appUrls,cdsService,$sessionStorage,$scope){
		var self = this;

        handleUserEdit();

		var config = {
            initiate :false,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false,
        };
		var formStack = formValidation.init("#addressRegistrationForm", validationMap, errorJson, config);
		
			self.user={};
			//For resident country
			self.user.nriAddress = false;
			


		this.save = function(){
			
			if(self.nri) self.nri.nriCountry ="USA"; 

			var requestObj = [];
			
			requestObj[0]={};
			requestObj[0]['userId'] = cdsService.getUserId();
			requestObj[1] = angular.copy(self.user);			
			if(self.nri){
				requestObj[2] = angular.copy(self.nri);
			}

			if(formStack.isValid){								

				$http({
					method: "PUT",
					url: appUrls.updateResidentialAddress,
					data: requestObj	
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.profile.editprofile.volunteer');
				}).error(function(data, status, headers, config){
					
				});
			} 
		}


		   function handleUserEdit() {
                registerService.getAddressInfo( function(resp) {
                    self.user = resp.data;
                });
            }


            function handleUserCreation() {

            }

            function responseParser(resp) {
            	if(resp.length){
            		var modelObj = resp[0];            	
            		//External obj reference            		
            		$scope.voterNodeObj = angular.copy(modelObj.postalAddress);	            		
            		return modelObj;	
            	} 	            	
            }


	}]);

});

