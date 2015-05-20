'use strict';
define(['controllers/controllerModule'], function (controllerModule) {

	 controllerModule.controller('headerController', ['$rootScope','$http','$location','cdsService',"roleService", function($rootScope,$http,$location, cdsService,roleService){

		var self = this;
		self.showHeader = false;
		
		cdsService.getUserSession(initiateUserSession);

 		function initiateUserSession(resp){
 			 

 			self.showHeader = true;
 			
 			if(resp.status == "failure"){
 				self.isUserAuthenticated = false; 				
 				return;
 			}
 				self.isUserAuthenticated = true;
 				
 			$rootScope.userName = resp.data.user.citizen.firstName;	 			
 			var defRole = $rootScope.defRole = roleService.getTopRole(resp.data.user.appRoles);
 			self.navItems = roleService.getNavArray(defRole);
 			for(var i=0; i<self.navItems.length; i++){
 				self.navItems[i].activeHeader = false; 				
 				if(location.href.toLowerCase().indexOf(self.navItems[i].name.toLowerCase())>-1){
 					self.navItems[i].activeHeader = true;
 				}
 			}
		}






	}]);

});

