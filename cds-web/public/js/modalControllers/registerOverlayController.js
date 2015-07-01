define(['controllers/controllerModule', 'notifications'], function(controllerModule, notifications) {

    controllerModule.controller('registerOverlayController', ["$scope", "$modalInstance", "$rootScope", "callerScope", "$window", "appUrlService", "cdsService", 
        function($scope, $modalInstance, $rootScope, callerScope, $window, appUrlService, cdsService) {
            
            // i18n messages
            $scope.register_title = notifications.register_title;
            $scope.register_thanksmsg = notifications.registerthanksmsg;
            $scope.register_successmsg = notifications.register_successmsg;

             var userType=callerScope.userType;
        console.log(callerScope.userType);
        $scope.display = function() {
        	
            $window.location.href = "/profile";
            /*if(userType == "NEW"){
            $window.location.href = "/profile";
        	}else{
        	$window.location.href = "/profile";
        	}*/
        };

    }]);

});
