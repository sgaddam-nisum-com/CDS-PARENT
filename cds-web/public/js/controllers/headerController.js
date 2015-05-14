'use strict';
define(['controllers/controllerModule'], function (controllerModule) {

	 controllerModule.controller('headerController', ['$rootScope','$http','$location','cdsService', function($rootScope,$http,$location, cdsService){

		var self = this;
		

		self.navItems = [{name : "Dashboard" , url : "/dashboard"}, {name : "Tasks" , url : "/tasks"}, {name : "Calendar" , url : "/calendar"}];	 			

		cdsService.getUserSession(initiateUserSession);

 		function initiateUserSession(resp){
 			$rootScope.userName = resp.data.userName;	 			
 			$rootScope.defRole = "Citizen" || roleService.getTopRole(resp.data.user.appRoles);
 		
			 			



















 		}

	}]);

});

