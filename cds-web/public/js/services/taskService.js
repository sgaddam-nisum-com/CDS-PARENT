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
				getMyTasks: function(cb) {
					$http.get(appUrlService.getMyTasksList, {

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
				getTaskDetails : function(taskId, cb){
					$http.get(appUrlService.getTaskDetails,{
						params: {
						   id:taskId
						}
					}).success(function(resp){
						cb(resp);
					});
				},
				getTeamTasks : function(cb){
					$http.get(appUrlService.getTeamTasks,{
						
					}).success(function(resp){
						cb(resp);
					});
				},
				getAllTasks : function(cb){
					$http.get(appUrlService.getAllTasks,{
						
					}).success(function(resp){
						cb(resp);
					});
				},
				getTaskStatuses: function(cb){
					$http.get(appUrlService.getTaskStatuses,{
						params: {
						   statustype:"task",
						   orgId:2
						}
						
					}).success(function(resp){
						cb(resp);
					});
				},
				deleteTask:function(taskId, cb){
					$http.get(appUrlService.deleteTask,{
						params: {
						   id:taskId
						}
						
					}).success(function(resp){
						cb(resp);
					});
				},
				
   			}

  		}
 	]);
});