define(['controllers/controllerModule','formValidation','validators/familyValidators','errorMessages/familyErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	controllerModule.controller('familyController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService',function($state,$http,appUrls,cdsService,$scope,registerService){
		
		var self = this,
		   dataJson={};
		
		dataJson.reqMethod = "POST";
        dataJson.reqURL = appUrls.saveCadre;
        handleGetFamily();

		var config = {
            initiate :false,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false,
        };
		
		registerService.getEducationOptions(function(resp){				
			$scope.educationOptions = resp.data;			
		});
		var formStack = formValidation.init("#familyRegistrationForm", validationMap, errorJson, config);
		
		this.save = function(){
			
			var requestData = [];
			
			requestData.push(self.user.spouseData);
			
			for(var j=0; j<self.user.childData.length; j++){
				requestData.push(self.user.childData[j]);		
			}
			
			$http({
				method: "POST",
				url: appUrls.updateFamily,
				data: requestData
			}).success(function(data, status, headers, config){

				
			}).error(function(data, status, headers, config){
				

			});




		/*	
			if(self.user.spouse) {
				self.user.spouse.relationType = "Wife";
				self.user.spouse.citizenId = cdsService.getUserId();
			}
			if(self.user.child) {				
				self.user.child.relationType = "Kid";
				self.user.child.citizenId = cdsService.getUserId();				
			}
			requestObj[0] = {};			
			requestObj[0]['userId'] = cdsService.getUserId();
			requestObj[1] = angular.copy(self.user.spouse);		
			
			requestObj[2] = angular.copy(self.user.child);
			
			if(formStack.isValid){								

				$http({
					method: "PUT",
					url: appUrls.updateFamily,
					data: requestObj
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.profile.editprofile.cadre');
				}).error(function(data, status, headers, config){
					

				});
			} */
		




		}


		  function handleGetFamily() {             
              	registerService.getFamilyInfo( function(resp) {                  
                 dataJson= resp.data;
                 self.user = {};
                 self.user.childData = [];
                 self.users = resp.data;        

                 for(var i=0; i<self.users.length; i++){
                 	if(self.users[i].relationId==1){
                 		self.user.spouseData = self.users[i];                 		
                 	}else{
                 		self.user.childData.push(self.users[i]);                 		
                 	}
                 };

				 });

          }

	}]);

});

