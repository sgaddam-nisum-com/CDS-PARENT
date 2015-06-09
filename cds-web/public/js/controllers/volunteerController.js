define(['controllers/controllerModule','formValidation','validators/volunteerValidators','errorMessages/volunteerErrors','jquery',"messageHandler"], 
	function (controllerModule,formValidation,validationMap,errorJson,$,messageHandler) {

	 controllerModule.controller('volunteerController', ['$state','$http',"appUrlService",'$scope','registerService',"cdsService","$sessionStorage",

	 	function($state,$http,appUrls,$scope,registerService,cdsService, $sessionStorage){
		

		var self = this,
		dataJson;

		self.isNotValidForm = false;

 		var cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};

        handleUserEdit(cdsSession.currentUserId);

		var config = {
            initiate :true,
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
		

		this.backview = function(e){
			e.preventDefault();
			$state.go("root.profile.editprofile.address");
		}



		this.save = function(){
			

			if(formStack.isValid){	

			var requestObj = {};			

			requestObj.interestedAsVolunteer = self.user.citizen.interestedAsVolunteer;
			requestObj.volunteerInterestedAreas =[];
			requestObj.volunteerInterestedAreas[0]= {interestId : self.user.interestedAreas};
			requestObj.volunteer = {
				"volunteerId":self.user.volunteerId,
				"volunteerCategoryId":self.user.volunteerCategoryId,
				"volunteerLeadId":self.user.volunteerLeadId,
				"volunteerCodeNumber": self.user.volunteerCodeNumber ,
				"performanceGradeId":self.user.performanceGradeId
			};	
			requestObj.userId =cdsSession.currentUserId; 
								

				$http({
					method: dataJson.reqMethod,
					url: dataJson.reqUrl,
					data: requestObj	
				}).success(function(resp, status, headers, config){
					
					if(resp.status == "success"){

						messageHandler.showInfoStatus(errorJson.successfulSave,".status-message-wrapper");
                        setTimeout(function(){
                            messageHandler.clearMessageStatus();                           
                          $state.go('root.profile.editprofile.family');
                        },2000); 



					}else{
						  messageHandler.showErrorStatus(errorJson.submissionError,".status-message-wrapper");
						 setTimeout(function(){
                            messageHandler.clearMessageStatus();                           
                        },2000); 

					}
				}).error(function(data, status, headers, config){
					  messageHandler.showErrorStatus(errorJson.submissionError,".status-message-wrapper");
					 setTimeout(function(){
                            messageHandler.clearMessageStatus();                           
                        },2000); 
				});
		
		}else{
			self.isNotValidForm = true;
		}



	};

		   function handleUserEdit(userId) {

                registerService.getVolunteerInfo(userId,function(resp) {
                	
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

