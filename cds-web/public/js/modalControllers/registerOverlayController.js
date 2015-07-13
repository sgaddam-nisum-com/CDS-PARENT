define(['controllers/controllerModule'], function(controllerModule) {

    controllerModule.controller('registerOverlayController', ["$scope", "$modalInstance", "$rootScope", "callerScope", "$window", "appUrlService", "cdsService",
        function($scope, $modalInstance, $rootScope, callerScope, $window, appUrlService, cdsService) {


            // i18n messages
            $scope.register_title = "Update Image Profile";
            $scope.register_thanksmsg = "Welcome to contribute in constituency development";
            $scope.register_successmsg = "";

            var userType = callerScope.userType;
            $scope.currentProfileImage = callerScope.currentProfileImage || "img-placeholder.jpg";
            $scope.display = function() {

                $window.location.href = "/profile";
                /*if(userType == "NEW"){
            $window.location.href = "/profile";
            }else{
            $window.location.href = "/profile";
            }*/
            };

        }
    ]);

});