define(['services/serviceModule'], function(serviceModule) {

	serviceModule.factory('taskService', ['$http', 'appUrlService',
		function($http, appUrlService) {
			return {
				getTaskCategories: function(cb) {
					$http.get(appUrlService.getEducationInfo, {


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
   			}

  		}
 	]);
});