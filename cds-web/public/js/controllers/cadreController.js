define(['controllers/controllerModule','formValidation','validators/cadreValidators','errorMessages/cadreErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	controllerModule.controller('cadreController', ['$state','$http',"appUrlService",'$scope','registerService',"cdsService","$sessionStorage", function($state,$http,appUrls,$scope,registerService,cdsService,$sessionStorage){
		

		var self = this,
		   dataJson={};
        
		self.user = {};
		self.user.cadre={};        
        dataJson.reqMethod = "POST";
        dataJson.reqURL = appUrls.saveCadre;
        handleGetCadre();
        
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
		
		
		this.save = function(){
			self.user.userId = cdsService.getUserId();
			if(formStack.isValid){								

				$http({
					method: dataJson.reqMethod,
					url: dataJson.reqURL,
					data: self.user	
				}).success(function(data, status, headers, config){
					console.log("success");
					//$state.go('root.register.personal');
				}).error(function(data, status, headers, config){
					
				});
			} 
		}


		  function handleGetCadre() {
            
                registerService.getCadreInfo( function(resp) {                  
                    dataJson= resp.data;

                    if(dataJson.cadreId){
                    	dataJson.reqMethod = "PUT";
                    	dataJson.reqURL =appUrls.updateCadre; 
                    }
               
                self.user.cadre = {};    
	        	self.user.interestedAsCadre = "1";    
	            self.user.healthInsurance = dataJson.citizen.healthInsurance;
	            self.user.lifeInsurance = dataJson.citizen.lifeInsurance;
	            self.user.bloodGroupId =dataJson.citizen.bloodGroup.bloodGroupId;	            
	            self.user.cadre.positionId =dataJson.partyDesigination.positionId;
	            self.user.cadre.partyMembershipId =dataJson.partyMembershipId;
	            self.user.cadre.partyResponsibility =dataJson.partyResponsibility;
				self.user.cadre.performanceGradeId =dataJson.performanceGradeId;
				 


				 });
            }

             function handleUserEdit() {





             }
         



	}]);

});

