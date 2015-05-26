
 

define(['controllers/controllerModule','formValidation','validators/voterValidators','errorMessages/voterErrors'], function (controllerModule,formValidation,validationMap,errorJson) {

	controllerModule.controller('voterController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService','$sessionStorage', function($state,$http,appUrls,cdsService,$scope,registerService,$sessionStorage){
	 		var self = this,
		   dataJson={};


		self.user = {};
		 
      

        handleGetVoter();

		var config = {
            initiate :false,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false
        };
		var formStack = formValidation.init("#voterRegistrationForm", validationMap, errorJson, config);
		
		this.save = function(){
		
			if(formStack.isValid){								

				$http({
					method:dataJson.reqMethod,
					url:dataJson.reqURL,
					data: self.user	
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.profile.editprofile.address');
				}).error(function(data, status, headers, config){
					
				
				});
			} 
		}

	 	function handleGetVoter() {
            registerService.getVoterInfo(function(resp) {
                dataJson= resp.data;

                 if(dataJson.voterId){
                    	dataJson.reqMethod = "PUT";
                    	dataJson.reqURL =appUrls.updateVoterInfo; 
                    }else{
                    	  dataJson.reqMethod = "POST";
        				 dataJson.reqURL = appUrls.saveVoterInfo;
                    }

                           	
	           	self.user.addressLine1 = dataJson.addressLine1;
	           	self.user.addressLine2 = dataJson.addressLine2;
	           	self.user.voterCardId = dataJson.voterCardId;         	
	           	self.user.treeDataId = 35;


            });
        }


      




		
	}]);

});

