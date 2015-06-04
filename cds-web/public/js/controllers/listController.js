define(['controllers/controllerModule'], function (controllerModule) {

 	controllerModule.controller('listController', [ '$scope', '$state', '$http', 'listService',
 		function( $scope, $state, $http, listService ){


			this.minAge = 18;
			this.maxAge = 50;
		 	this.filter = false;
		 	this.showImage= true;
		 	this.selected = {};
		 	var that = this;

			this.render = function(){
			 	listService.getUserList({ q: "", page:1 }, this, function(resObj) {
					that.userList = resObj.data.searchResults;
				});
			};
			
			this.render();
			
			this.search = function(){
				if(typeof this.searchQ == "undefined" || this.searchQ == "") return;
				this.selectedGender = this.selectedUserTypes = false;
				this.minAge = this.maxAge = "";
				
				listService.getUserList({ q: this.searchQ, page:1 }, this, function(resObj) { 
					that.userList = resObj.data.searchResults;
					
				});
			};

			this.editUserInfo = function(citizenId){				
				$state.go('root.profile.editprofile.personal', {"userId" : citizenId});
			}
	}]);
});






	

