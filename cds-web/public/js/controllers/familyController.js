define(['controllers/controllerModule','formValidation','validators/familyValidators','errorMessages/familyErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	controllerModule.controller('familyController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService',function($state,$http,appUrls,cdsService,$scope,registerService){
		
		var self = this,
		   dataJson={};


		var reqMethod = "PUT";
        var reqURL = appUrls.updateFamily;
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


/*			for(var j=0; j<self.user.childData.length; j++){				
				requestData.push(self.user.childData[j]);		
			}
*/			

			var spouseObj = {};

			spouseObj.relationType = self.user.spouseData.relationType;
			spouseObj.educationId = self.user.spouseData.educationId;
			spouseObj.firstName = self.user.spouseData.firstName;
			spouseObj.lastName = self.user.spouseData.lastName;
			spouseObj.middleName = self.user.spouseData.middleName;
			spouseObj.gender = self.user.spouseData.gender;		
			spouseObj.marriageDate = self.user.spouseData.marriageDate;
			spouseObj.dateOfBirth = self.user.spouseData.dateOfBirth;

			requestData.push(spouseObj);





			console.log(dataJson);

			$http({
				method: reqMethod,
				 url: reqURL,
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
				
				console.log(resp);                 

                 dataJson= resp.data;
                 self.user = {};
                 /*To show primary field*/
                 self.user.childData = [{}];
                 
                 if(resp.status=="success"){

                 self.users = resp.data; 

                 for(var i=0; i<self.users.length; i++){
                 	if(self.users[i].relationId==1){
                 		self.user.spouseData = self.users[i];                 		
                 	}else{
                 		self.user.childData.push(self.users[i]);                 		
                 	}
                 };
       

             	}

				 });

          }

	}]);

});

