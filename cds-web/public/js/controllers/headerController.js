'use strict';
define(['controllers/controllerModule'], function (controllerModule) {

	 controllerModule.controller('headerController', ['$rootScope','$http','$location', function($rootScope,$http,$location){

		var self = this;
		
		


		self.navItems = [{name : "Dashboard" , url : "/dashboard"}, {name : "Tasks" , url : "/tasks"}, {name : "Calendar" , url : "/calendar"}];	 			




	}]);

});

