define(['controllers/controllerModule','formValidation','validators/cadreValidators','errorMessages/cadreErrors','jquery',"messageHandler"], 
	function (controllerModule,formValidation,validationMap,errorJson,$,messageHandler) {

	controllerModule.controller('cadreController', ['$state','$http',"appUrlService",'$scope','registerService',"cdsService","$sessionStorage", 


		function($state,$http,appUrls,$scope,registerService,cdsService, $sessionStorage){
		


		 var cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};
		var self = this,
		   dataJson={};
        
		self.user = {};
		self.user.cadre={};
		self.isNotValidForm = false;


        handleGetCadre(cdsSession.currentUserId);
        
		var config = {
            initiate :true,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false,
        };
		var formStack = formValidation.init("#cadreRegistrationForm", validationMap, errorJson, config);
		
		registerService.getPartyPositionsOptions(function(resp){				
			$scope.partyPositionsOptions = resp.data;			
		});
		registerService.getPerformanceGradeOptions(function(resp){				
			$scope.performanceGradeOptions = resp.data;			
		});

		self.user = {};

		this.backview = function(e){
			e.preventDefault();
			$state.go("root.profile.editprofile.family");
		}
				
		this.save = function(){
			self.user.userId = cdsService.getUserId();
			if(formStack.isValid){	
				self.user.userId = cdsSession.currentUserId;							
				$http({
					method: dataJson.reqMethod,
					url: dataJson.reqURL,
					data: self.user	
				}).success(function(resp, status, headers, config){	
				    if(resp.status ==="success"){			
					if(self.user.userId){
						messageHandler.showInfoStatus(errorJson.successfulSave,".status-message-wrapper");
                        setTimeout(function(){
                            messageHandler.clearMessageStatus();                           
                           $state.go("root.profileLookup", {citizenId : self.user.userId});  
                        },2000); 
					}else{
						messageHandler.showInfoStatus(errorJson.successfulSave,".status-message-wrapper");
                        setTimeout(function(){
                            messageHandler.clearMessageStatus();                           
                          $state.go('root.profile');  
                        },2000); 						
					}}else{						
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
		}


		  function handleGetCadre(userId) {
            
                registerService.getCadreInfo( userId,function(resp) {                  
                    dataJson= resp.data;

                    if(dataJson.cadreId){
                    	dataJson.reqMethod = "PUT";
                    	dataJson.reqURL =appUrls.updateCadre; 
                    }else{
                    	 dataJson.reqMethod = "POST";
        				 dataJson.reqURL = appUrls.saveCadre;		
                    }
               
                self.user.cadre = {};    
	        	self.user.interestedAsCadre = "1";  

	        	if(dataJson.citizen){  
	            self.user.healthInsurance = dataJson.citizen.healthInsurance;
	            self.user.lifeInsurance = dataJson.citizen.lifeInsurance;
	            self.user.bloodGroupId =dataJson.citizen.bloodGroup.bloodGroupId;	            
	        	}

	            self.user.cadre.positionId =dataJson.partyDesigination.positionId || "";
	            self.user.cadre.partyMembershipId =dataJson.partyMembershipId;
	            self.user.cadre.partyResponsibility =dataJson.partyResponsibility;
				self.user.cadre.performanceGradeId =dataJson.performanceGradeId;

				 });
            }

             function handleUserEdit() {





             }
         



	}]);

});

