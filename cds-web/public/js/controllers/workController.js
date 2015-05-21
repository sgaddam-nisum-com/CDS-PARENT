
'use strict';

define(['controllers/controllerModule','formValidation','validators/workValidators','errorMessages/workErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	 controllerModule.controller('workController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService','$sessionStorage', function($state,$http,appUrls,cdsService,$scope,registerService,$sessionStorage){		

		var self = this;
        

        handleUserEdit();
        

		this.age = cdsService.age;
		this.gender = cdsService.gender;		
		var config = {
            initiate :false,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false,
        };
		var formStack = formValidation.init("#workRegistrationForm", validationMap, errorJson, config);
		
		registerService.getOccupationOptions(function(resp){				
			$scope.occupationOptions = resp.data;			
		});
		
		registerService.getCareerAspirationOptions(function(resp){				
			$scope.careerAspirationOptions = resp.data;			
		});
		registerService.getSkillGapsOptions(function(resp){				
			$scope.skillGapsOptions = resp.data;			
		});
		
		this.save = function(){
			
			if(formStack.isValid){								
				self.user.userId = cdsService.getUserId();				
				$http({
					method: "PUT",
					url: appUrls.updateWorkInfo,
					data: self.user	
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.profile.editprofile.voter');
				}).error(function(data, status, headers, config){
					console.log("failed");
				

				});
			} 
		}

		 function handleUserEdit() {		 	

           		registerService.getWorkInfo(function(resp) {                   
                    self.user = resp.data;
                    self.user.occupationId = resp.data.occupation.occupationId;                    
                    
                });
            }


            function handleUserCreation() {

            	


            }

            function responseParser(resp) {



            }



	}]);

});

