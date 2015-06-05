
 

define(['controllers/controllerModule','jquery'], function (controllerModule,$) {

	 controllerModule.controller('profileController', ["$stateParams",'$state','$http',"appUrlService","cdsService",'$scope',"roleService", "$window", 
	 						function($stateParams,$state,$http,appUrlService,cdsService,$scope, roleService, $window){		
	 
	 		console.log($stateParams);

	 		var self = this,
	 		currentCitizenId = $stateParams.citizenId;


			cdsService.getProfileInfo(currentCitizenId,initiateProfile);

			function initiateProfile(resp){
				console.log(resp);
				self.user = resp.data;
			}	 		




	}]);

});

