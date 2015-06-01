
 

define(['controllers/controllerModule','formValidation','validators/voterValidators','errorMessages/voterErrors'], function (controllerModule,formValidation,validationMap,errorJson) {

	controllerModule.controller('voterController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService', function($state,$http,appUrls,cdsService,$scope,registerService){
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
		

			var reqObj = {};

			reqObj.voterCardId = self.user.voterCardId;
			reqObj.treeDataId = self.user.treeDataId;
			reqObj.addressLine1 = self.user.addressLine1;
			reqObj.addressLine2 = self.user.addressLine2;
			reqObj.voterId = self.user.voterId;


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


        function generateParamObject(objString){                    
            objString = objString || "";
            var keysArray = objString.split(",");
            var keysObj = {};                    
            for(var i=0; i<keysArray.length; i++){
                var splitArray = keysArray[i].split(":");
                keysObj[splitArray[0]]=splitArray[1];
            }
            return keysObj;
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
	           	self.user.voterId  = dataJson.voterId;
	           	self.user.treeDataId  = dataJson.treeDataId;
	           	$scope.voterNodeObj = generateParamObject(dataJson.consituency);	          
            });
        }


		
	}]);

});

