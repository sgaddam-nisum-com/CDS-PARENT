
 

define(['controllers/controllerModule','jquery'], function (controllerModule,$) {

	 controllerModule.controller('profileController', ["$stateParams",'$state','$http',"appUrlService","cdsService",'$scope',"roleService", "$window", 
	 						function($stateParams,$state,$http,appUrlService,cdsService,$scope, roleService, $window){		
	 
	 		console.log($stateParams);

	 		var self = this,
	 		currentCitizenId = $stateParams.citizenId;


			cdsService.getProfileInfo(currentCitizenId,initiateProfile);

			function initiateProfile(resp){
				console.log(resp);
				
				if(resp.data){

					if(resp.data.gender = "M"){
						resp.data.gender = "MALE";
					}else if(resp.data.gender = "F"){

						resp.data.gender = "FEMALE"
					}else{
						resp.data.gender = "NOT DISCLOSED";
					}

						self.user = resp.data;

				}


			}	 		




	}]);

});

