
 

define(['controllers/controllerModule','formValidation','validators/workValidators','errorMessages/workErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	 controllerModule.controller('workController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService',"$sessionStorage", 
	 	function($state,$http,appUrls,cdsService,$scope,registerService, $sessionStorage){		

		var self = this,
		dataJson = {};
        
         var cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};

         console.log(cdsSession.currentUserId);

        handleUserEdit(cdsSession.currentUserId);
        

		this.age = cdsSession.age;
		this.gender = cdsSession.gender;		
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

/*		registerService.getAreaOfImprovements(function(resp){				
			$scope.areaOfImprovements = resp.data;			
		});
		*/
		
		this.save = function(){
			
			if(formStack.isValid){								
				self.user.userId = cdsSession.currentUserId;				
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

		 function handleUserEdit(currentUserId) {		 	
		 	self.user = {};
           		registerService.getWorkInfo(currentUserId,function(resp) {                                      
           			dataJson = resp.data;
                  	self.user.occupationId = dataJson.occupation.occupationId;                    
                    self.user.workingOrganization = dataJson.workingOrganization;
                    self.user.workingLocation = dataJson.workingLocation;

                    if(dataJson.additionalInfo && dataJson.additionalInfo.length){
	                    self.user.userAdditionalInfo = {};
	                    self.user.userAdditionalInfo.careerAspirationId = dataJson.additionalInfo[0].careerAspirations.careerAspirationId;
	                    self.user.userAdditionalInfo.careerAspiration = dataJson.additionalInfo[0].careerAspiration;
	                    self.user.userAdditionalInfo.skillGapsId = dataJson.additionalInfo[0].skillGaps.skillGapId;
	                    self.user.userAdditionalInfo.skillLevel = dataJson.additionalInfo[0].skillLevel;
	                    self.user.userAdditionalInfo.leadershipPotential = dataJson.additionalInfo[0].leadershipPotential;
                	}

                    
                });
            }


	}]);

});

