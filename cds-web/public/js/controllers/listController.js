define(['controllers/controllerModule'], function(controllerModule) {

    controllerModule.controller('listController', ['$scope', '$state', '$http', 'listService',"$sessionStorage",
 				function($scope, $state, $http, listService, $sessionStorage) {

            this.minAge = 18;
            this.maxAge = 50;
            this.filter = false;
            this.showImage = true;
            this.selected = {};
            var cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};

            var selectedUsers = [];

	        var that = this;

            this.render = function() {
                listService.getUserList({
                    q: "",
                    page: 1
                }, this, function(resObj) {
                    that.userList = resObj.data.searchResults;
                });
            };

            this.render();

            this.search = function() {
                if (typeof this.searchQ == "undefined" || this.searchQ == "") return;
                this.selectedGender = this.selectedUserTypes = false;
                this.minAge = this.maxAge = "";

                listService.getUserList({
                    q: this.searchQ,
                    page: 1
                }, this, function(resObj) {
                    that.userList = resObj.data.searchResults;

                });
            };

            this.editUserInfo = function(citizenId) {
                $state.go('root.profile.editprofile.personal', {
                    "userId": citizenId
                });
            }


            this.viewProfile = function(citizenId) {
                $state.go('root.profileLookup', {
                    "citizenId": citizenId
                });
            }


            console.log(this.selectedUsers);





            this.enableDisableOption = function(citizenId) {

                if (selectedUsers.indexOf(citizenId) < 0) {
                    selectedUsers.push(citizenId);
                } else {
                    var currentEleIndex = selectedUsers.indexOf(citizenId);
                    selectedUsers.splice(currentEleIndex, 1);
                }

                console.log(selectedUsers);
                this.disableEdit = (selectedUsers.length > 1) ? "grey" : "";
            }



            this.editCurrentUser = function() {                
                if (selectedUsers.length == 1) {
                    cdsSession.currentUserId = selectedUsers[0];
                    $state.go('root.profile.editprofile.personal');
                } else {
                    console.log("please select only one user");
                }
            }


        }
    ]);
});