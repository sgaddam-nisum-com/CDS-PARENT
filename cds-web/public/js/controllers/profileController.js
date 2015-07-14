define(['controllers/controllerModule', 'jquery', 'notifications'], function(controllerModule, $, notifications) {

    controllerModule.controller('profileController', ["$stateParams", '$state', '$http', "appUrlService", "cdsService", '$scope', "roleService", "$window", "$sessionStorage", "appModalService",
        function($stateParams, $state, $http, appUrlService, cdsService, $scope, roleService, $window, $sessionStorage, appModalService) {


            var self = this,
                currentCitizenId = $stateParams.citizenId,
                children = [],
                regConfModalConfig = {
                    keyboard: true,
                    class: "registration-confirm-overlay",
                    backdrop: true
                },
                cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};
            $scope.register_title = notifications.register_title;
            $scope.register_thanksmsg = notifications.register_thanksmsg;
            $scope.register_successmsg = notifications.register_successmsg;
            $scope.currentProfileImage = "img-placeholder.jpg";
            cdsService.getProfileInfo(currentCitizenId, initiateProfile);


            function generateParamObject(objString) {
                objString = objString || "";
                var keysArray = objString.split(",");
                var keysObj = {};
                for (var i = 0; i < keysArray.length; i++) {
                    var splitArray = keysArray[i].split(":");
                    keysObj[splitArray[0]] = splitArray[1];
                }
                return keysObj;
            }

            function initiateProfile(resp) {



                if (resp.data) {

                    if (resp.data.gender == "M") {
                        resp.data.gender = "MALE";
                    } else if (resp.data.gender == "F") {

                        resp.data.gender = "FEMALE"
                    } else {
                        resp.data.gender = "NOT DISCLOSED";
                    }


                    self.user = resp.data;
                    self.user.cadre.citizen.healthInsurance = ((self.user.cadre.citizen.healthInsurance == 0) ? "No" : "Yes");
                    self.user.cadre.citizen.lifeInsurance = ((self.user.cadre.citizen.lifeInsurance == 0) ? "No" : "Yes");
                    self.user.volunteer.citizen.interestedAsVolunteer = ((self.user.volunteer.citizen.interestedAsVolunteer == 0) ? "No" : "Yes");
                    $scope.voterNodeObj = generateParamObject(resp.data.voter.consituency);

                    children = angular.copy(resp.data.tblCitizenRelation);
                    children.shift();
                    $scope.children = children;
                    $scope.currentProfileImage = resp.data.photograph;

                }


            }
            self.navEditProfile = function($event) {

                cdsSession.currentUserId = $stateParams.citizenId;

                var choice = $event.target.attributes.id.value;

                switch (choice) {
                    case 'personal':
                        $state.go('root.profile.editprofile.personal');
                        break;
                    case 'work':
                        $state.go('root.profile.editprofile.work');
                        break;
                    case 'voter':
                        $state.go('root.profile.editprofile.voter');
                        break;
                    case 'address':
                        $state.go('root.profile.editprofile.address');
                        break;
                    case 'volunteer':
                        $state.go('root.profile.editprofile.volunteer');
                        break;
                    case 'family':
                        $state.go('root.profile.editprofile.family');
                        break;
                    case 'cadre':
                        $state.go('root.profile.editprofile.cadre');
                        break;

                }
            }

            self.showImageUpdateOverlay = function() {

                var registerModel = appModalService.init("registerOverlay.html", "registerOverlayController", $scope, regConfModalConfig)();



            }




        }
    ]);

});
