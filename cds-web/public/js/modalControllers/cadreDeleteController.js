define(['controllers/controllerModule', "underscore"], function (controllerModule,_) {

	 controllerModule.controller('cadreDeleteController', ["$scope","$modalInstance","callerScope","listService",function($scope, $modalInstance,callerScope,listService){
 		
	 			$scope.showNoRecordsMsg = false;

	 			console.log(listService);

	 			var selectedUsers = callerScope.selectedUsers.join();

	 			var revisedUserArray = angular.copy(callerScope.userList);

	 			console.log(selectedUsers);

	 			console.log(callerScope.userList);



		  		

		  			for(var i = 0; i< callerScope.selectedUsers; i++){
		  			

		  					_.each(callerScope.userList, function(user, index){
		  								


		  								if(callerScope.selectedUsers[i] === user.citizenId ){
		  									
		  									revisedUserArray.splice(index,1);
		  								}
		  					});

		  			}

		  			console.log(revisedUserArray);
		  			//console.log(index);

		  			callerScope.userList = revisedUserArray;




		  $scope.ok = function () {  



		  	listService.deleteCitizen(selectedUsers, function(resp){
		  		console.log(resp);









		  	});
    			$modalInstance.close();
  			};

		  $scope.cancel = function () {			  				  	
		    $modalInstance.dismiss("cancel");
		  };

	}]);

});

