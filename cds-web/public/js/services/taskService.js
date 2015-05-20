define(['services/serviceModule'], function(serviceModule) {

	serviceModule.factory('taskService', ['$http', 'appUrlService',
		function($http, appUrlService) {
			return {
				getTaskCategories: function(cb) {
					$http.get(appUrlService.getTaskCategories, {
						params: {
					   		orgId: 2
					  	}

					}).success(function(resp) {
					  cb(resp)
					});
				},
				getTasks: function(cb) {
					$http.get(appUrlService.getTasksList, {


					}).success(function(resp) {
					  cb(resp)
					});
				},
				getTaskPriorities : function(cb){
					$http.get(appUrlService.getTaskPriorities,{
						params: {
					   		orgId: 2
					  	}
					}).success(function(resp){
						cb(resp);
					});
				},
				getCadres : function(userInput, cb){
					$http.get(appUrlService.getCadreList,{
						params: {
						   q: userInput
						}
					}).success(function(resp){
						cb(resp);
					});
				},

				// getCadreNames : function(cb){
				// 	$http.get(appUrlService.getCadreLeads,{

				// 	}).success(function(resp){
				// 		console.log(resp);
				// 		cb(resp);
				// 	})
				// }
   			}

  		}
 	]);
});