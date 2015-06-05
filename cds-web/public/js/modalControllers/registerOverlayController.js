define(['controllers/controllerModule'], function(controllerModule) {

    controllerModule.controller('registerOverlayController', ["$scope", "$modalInstance", "$rootScope", "callerScope", "$window", "appUrlService", "cdsService", 
        function($scope, $modalInstance, $rootScope, callerScope, $window, appUrlService, cdsService) {

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
