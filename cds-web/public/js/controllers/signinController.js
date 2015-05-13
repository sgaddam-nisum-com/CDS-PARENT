
'use strict';

define(['controllers/controllerModule','jquery'], function (controllerModule,$) {

	 controllerModule.controller('signinController', ['$state','$http',"appUrlService","cdsService",'$scope','$sessionStorage',"roleService", "$window", function($state,$http,appUrlService,cdsService,$scope,$sessionStorage, roleService, $window){		
	 	var self = this;
	 		self.orgId = "2";	
	 
		this.signin = function(){
			$http.post(appUrlService.signin, self.user)
			.success(function(resp){												
				if(resp.status == "success"){
					$window.location.href = "/dashboard";
				}else{					
					self.user={};
					console.log("invalid credentials")
				}				
			})
			.error(function(){
				
			});	
		}
		
	

	 	

	}]);

});

