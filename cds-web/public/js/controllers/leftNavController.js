'use strict';
define(['controllers/controllerModule'], function (controllerModule) {

	 controllerModule.controller('leftNavController', ['$http','$location',"cdsService",'$rootScope', function($http,$location,cdsService,$rootScope){
		var self =this;
		this.items = [
			{path: '/personal', title: 'Personal'},
			{path: '/work', title:'Work Information'},
			{path: '/voter', title: 'Voter Information'},
			{path: '/address', title:'Residential Address'},
			{path: '/volunteer',title:'Volunteer'},
			{path:'/family',title:'Family'},
			{path:'/cadre',title:'Cadre Information'}
		];
		
		this.isActive = function(item){
			if (item.path == $location.path()) {				
				return true;
			}
			return false;
		},		
		
		$rootScope.$on('$locationChangeSuccess', function(){			
			//self.isRegistered = cdsService.isRegistered;		
			
		});
	}]);

});

