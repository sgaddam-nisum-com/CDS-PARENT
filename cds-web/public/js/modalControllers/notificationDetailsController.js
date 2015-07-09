define(['controllers/controllerModule',"messageHandler"], function (controllerModule, messageHandler) {

	 controllerModule.controller('notificationDetailsController', ["$scope","$http","$modalInstance","callerScope","$rootScope","dashboardService","appUrlService","$timeout",

	 	function($scope,$http, $modalInstance,callerScope,$rootScope,dashboardService,appUrlService, $timeout){
			var inboxId = callerScope.inboxId;

	 		dashboardService.getNotificationDetails(inboxId, function(resp) {                                									 			
				$scope.notificationDetails = resp.data.body;
				$scope.subject = resp.data.subject;
				console.log(' ==================== ' + $scope.notificationDetails);
				console.log(' ==================== ' + $scope.subject);
            });

  			$scope.cancel = function () {	
               	$modalInstance.dismiss("cancel");
			 }

	}]);

});

