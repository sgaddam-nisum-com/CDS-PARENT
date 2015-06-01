define(['controllers/controllerModule','formValidation','validators/volunteerValidators','errorMessages/volunteerErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	 controllerModule.controller('volunteerController', ['$state','$http',"appUrlService",'$scope','registerService',"cdsService",function($state,$http,appUrls,$scope,registerService,cdsService){
		var self = this,
		dataJson;



        handleUserEdit();

		var config = {
            initiate :false,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false,
        };
		var formStack = formValidation.init("#volunteerRegistrationForm", validationMap, errorJson, config);
		
		registerService.getInterestedAreasOptions(function(resp){				
			$scope.interestedAreasOptions = resp.data;			
		});
		registerService.getVolunteerCategoryOptions(function(resp){				
			$scope.volunteerCategoryOptions = resp.data;			
		});
		registerService.getLeadOptions(function(resp){				
			$scope.leadOptions = resp.data;			
		});
		registerService.getPerformanceGradeOptions(function(resp){				
			$scope.performanceGradeOptions = resp.data;			
		});
		
		this.save = function(){
			self.user.userId = cdsService.getUserId();
			var requestObj = {};
			requestObj = angular.copy(self.user);
			requestObj.volunteerInterestedAreas =[];
			requestObj.volunteerInterestedAreas[0]= angular.copy(self.user.volunteerInterestedAreas);
			
			
			console.log(requestObj);
			if(formStack.isValid){								

				$http({
					method: "PUT",
					url: appUrls.updateVolunteer,
					data: requestObj	
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.profile.editprofile.family');
				}).error(function(data, status, headers, config){
					

				});
			} 
		};

		   function handleUserEdit() {

                registerService.getVolunteerInfo(function(resp) {
                	
                	dataJson = resp.data;
                	if(resp.data.volunteerId){
                		dataJson.reqMethod = "PUT";
                		dataJson.reqUrl = appUrls.updateVolunteer;
                	}else{
	              		dataJson.reqMethod = "POST";
                		dataJson.reqUrl = appUrls.saveVolunteer;
                	}
                		
                	self.user= {};

                	self.user = resp.data;
                	self.user.interestedAreas = resp.data.volunteerInterestedAreas[0].interestId;	
                	self.user.volunteerCategoryId = resp.data.volunteerCategory.voluteerCatergoryId;	
                	self.user.volunteerLeadId = resp.data.volunteerLeadId;
                });
  

            }


         

	}]);

});

