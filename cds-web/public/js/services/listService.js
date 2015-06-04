define(['services/serviceModule'], function(serviceModule) {

	serviceModule.factory('listService', ['$http', 'appUrlService',
		function($http, appUrlService) {
			return {
				getUserList : function( obj, ageobj, cb  ){
					var qq = obj.q;
					// var page = obj.page;
					$http.get(appUrlService.getUserList, {	
						params: {
							q: qq,
							userType : "2",
							minAge : 25,
							maxAge : 50,
							limit : 5
						}
					}).success(function(data) {	
						cb(data);
					});
				}
			}
		}]);

});


