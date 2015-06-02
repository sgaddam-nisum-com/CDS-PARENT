define(['controllers/controllerModule'], function (controllerModule) {

	 controllerModule.controller('cadreListController', ["$scope","$modalInstance","$rootScope","taskService",function($scope, $modalInstance,$rootScope,taskService){

 		
	 			$scope.showNoRecordsMsg = false;

	 		   function cadreStringifier(cadreArray) {
                    var cadreObjArray = [];

                    for (var i = 0; i < cadreArray.length; i++) {
                        var cadreObj = {};
                        var cadreString = "";
                        cadreString = cadreArray[i].firstName+","+cadreArray[i].lastName+","+cadreArray[i].mobileNumber;
                        cadreObj.value = cadreArray[i].firstName+","+cadreArray[i].lastName;
                        cadreObj.label = cadreString;

                        cadreObj.fieldValueObj = cadreArray[i];
                        cadreObj.model = cadreArray[i].citizenId;                                             
                        cadreObjArray.push(cadreObj);
                    };
                    return cadreObjArray;
                }  


               var queryString = $rootScope.queryString;

			  taskService.getCadres(queryString, function(resp) {                                
				
				$scope.cadreList = cadreStringifier(resp.data);
				if(!$scope.cadreList.length){
					$scope.showNoRecordsMsg = true;
				}


            });


			  

		

			  $scope.ok = function (value, id) {  
			  	
			  	var selObj = {value : value, id:id};

			  	$rootScope.selectedCadreValue = selObj.value;
    			$modalInstance.close(selObj);

  			};

			  $scope.cancel = function () {			  	
			  	$scope.showNoRecordsMsg = false;			  	 			   			    
			    $modalInstance.dismiss("cancel");
			  };




	}]);

});

