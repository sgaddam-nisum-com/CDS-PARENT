define(['services/serviceModule'], function(serviceModule) {

	serviceModule.factory('listService', ['$http', 'appUrlService',
		function($http, appUrlService) {
			return {
				getUserList : function( obj, cb  ){

					$http.get(appUrlService.getUserList, {	
						params: obj
					}).success(function(data) {	
						cb(data);
					});
				},

				getUserTypes : function(cb){

					$http.get(appUrlService.getUserTypes, {	
					
					}).success(function(data) {	
						cb(data);
					});



				}










			}
		}]);

});


