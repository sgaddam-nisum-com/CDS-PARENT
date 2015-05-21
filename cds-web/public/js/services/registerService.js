define(['services/serviceModule'], function(serviceModule) {

	serviceModule.factory('registerService', ['$http', 'appUrlService',
		function($http, appUrlService) {
			return {

				checkUserNameExists: function(userName, cb, userAvailableMsg,userNotAvailableMsg) {
					$http.get(appUrlService.getUserAvailability, {
						params: {
							userName: userName,
							orgId : "2"
						}
					}).success(function(data) {	
						cb(data,userAvailableMsg,userNotAvailableMsg, "userName");
					});
				},

				checkMobileNoExists: function(userMobile, cb,userAvailableMsg,userNotAvailableMsg) {

					$http.get(appUrlService.getMobileAvailability, {
						params: {
						mobileNumber: userMobile,
						orgId : "2"
						}
					}).success(function(data) {
						cb(data,userAvailableMsg,userNotAvailableMsg, "mobileNo");
					});
				},

				checkEmailExists: function(email, cb,userAvailableMsg,userNotAvailableMsg) {
				 $http.get(appUrlService.getEmailAvailability, {
				  params: {
				   email: email,
				   orgId : "2"
				  }
				 }).success(function(data) {
				  cb(data,userAvailableMsg,userNotAvailableMsg, "email");
				 });
				},


				getEducationOptions: function(cb) {

				 $http.get(appUrlService.getEducationOptions, {
				 	params:{
				 		orgId : 2
				 	}

				 }).success(function(resp) {
				  cb(resp)
				 });
				},
				getOccupationOptions: function(cb) {
				 $http.get(appUrlService.getOccupationOptions, {
				 	params:{
				 		orgId : "2"
				 	}

				 }).success(function(resp) {
				  cb(resp);
				 });
				},
				getInterestedAreasOptions: function(cb) {
				 $http.get(appUrlService.getInterestedAreasInfo, {
				 	 params: {
				   			orgId: 2
				  }
				 }).success(function(resp) {
				  cb(resp);
				  
				 });
				},
				getPartyPositionsOptions: function(cb) {
				 $http.get(appUrlService.getPartyPositionsInfo, {

				 }).success(function(resp) {
				  cb(resp);
				  
				 })
				},


				getAddress: function(userInput, cb) {

				 $http.get(appUrlService.getAddress, {
				  params: {
				   q: userInput,
				   orgId :2
				  }
				 }).success(function(data) {
				  cb(data);
				 });
				},

				getConstituencyInfo: function(userInput, cb) {
				 $http.get(appUrlService.getConstituencyInfo, {
				  params: {
				   q: userInput,
				   orgId :2
				  }
				 }).success(function(data) {
				  cb(data);
				 });

				},	
				getVolunteerCategoryOptions: function(cb) {
				 $http.get(appUrlService.getVolunteerCategoryInfo, {

				 }).success(function(resp) {
				  cb(resp);
				  
				 })
				},
				getLeadOptions:function(cb){
					 $http.get(appUrlService.getLeadInfo, {

					 }).success(function(resp) {
					  cb(resp);
					  
					 })
				},
				getPerformanceGradeOptions:function(cb){
					 $http.get(appUrlService.getPerformanceGradeInfo, {

					 }).success(function(resp) {
					  cb(resp);
					  
					 })
				},
				getCareerAspirationOptions:function(cb){
					 $http.get(appUrlService.getCareerAspirationOptions, {

					 	 params: {
				   			orgId: 2
				  	}

					 }).success(function(resp) {
					  cb(resp);					
					 })
				},
				getSkillGapsOptions:function(cb){
					 $http.get(appUrlService.getSkillGapsOptions, {
					 	 params: {
				   			orgId: 2
				  }
					 }).success(function(resp) {
					  cb(resp);
					  
					 })
				},
				getPersonalInfo : function(cb){
					 $http.get(appUrlService.getUserPersonalInfo, {
					 	
					 }).success(function(resp) {
					  cb(resp);					  
					 })		
				},
				getWorkInfo: function(cb){				

					 $http.get(appUrlService.getUserWorkInfo, {
					 	
					 }).success(function(resp) {
					  cb(resp);					  
					 })
				},
				getVoterInfo: function(cb){				

					 $http.get(appUrlService.getUserVoterInfo, {

					 }).success(function(resp) {
					  cb(resp);					  
					 })
				},
				getAddressInfo : function(cb){
					 $http.get(appUrlService.getUserAddressInfo, {

					 }).success(function(resp) {
					  cb(resp);					  
					 })	
				},
				getVolunteerInfo : function(cb){
					 $http.get(appUrlService.getUserVolunteerInfo, {
					 	
					 }).success(function(resp) {
					  cb(resp);					  
					 })	
				},
				getFamilyInfo : function(cb){
					 $http.get(appUrlService.getUserFamilyInfo, {
					 }).success(function(resp) {
					  cb(resp);					  
					 })	
				},
				getCadreInfo : function( cb ){
					 $http.get(appUrlService.getUserCadreInfo, {
					 	
					 }).success(function(resp) {
					  cb(resp);					  
					 })						
				}




   }

  }
 ]);


});