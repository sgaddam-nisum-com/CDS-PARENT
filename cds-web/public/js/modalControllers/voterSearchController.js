define(['controllers/controllerModule', 'notifications'], function (controllerModule, notifications) {

	 controllerModule.controller('voterSearchController', ["$scope","$modalInstance","$rootScope","registerService",
	 	function($scope, $modalInstance,$rootScope, registerService){


	 		// $scope.addtask_cadre_search = notifications.addtask_cadre_search;
	 		// 	$scope.addtask_cadre_title = notifications.addtask_cadre_title;


	 			$scope.showNoRecordsMsg = false;

	 			var queryString = $rootScope.votersearchtext;

	 			$scope.votersearchtext = queryString;
	 			




	 			// function addressStringifier(addressArray,userInput) {
     //                var addressObjArray = [];

     //                for (var i = 0; i < addressArray.length; i++) {
     //                    var addressObj = {};
     //                    // var addressString = "";
     //                    // addressString = addressArray[i].constituency;
     //                    // addressObj.label = addressString;
     //                    // addressObj.fieldValueObj = generateParamObject(addressString);
     //                    // addressObj.model = addressArray[i].treeDataId;
     //                    // addressObj.value = userInput;
     //                    // addressObjArray.push(addressObj);
     //                };
     //                return addressObjArray;
     //            }



                function generateParamObject(objString){                    
                    objString = objString || "";
                    var keysArray = objString.split(",");
                    var keysObj = {};                    
                    for(var i=0; i<keysArray.length; i++){
                        var splitArray = keysArray[i].split(":");
                        keysObj[splitArray[0]]=splitArray[1];
                    }
                    return keysObj;
                }

                function addressStringifier(respObj){
                    var resultInfo = "",
                        resultInfoArray = [];
                    for (var i=0; i < respObj.data.length; i++) {
                        resultInfo = "";
                        for (var j=0; j < respObj.data[i].constituency.length; j++){
                            
                            console.log(respObj.data[i].constituency[j]);
                            resultInfo += respObj.data[i].constituency[j].value + ",";
                        };
                        resultInfoArray.push( resultInfo );
                    };
                    return resultInfoArray;
                }

			  registerService.getConstituencyInfo(queryString, function(resp) {
					// console.log(resp);
                    var myres = addressStringifier(resp);
                    console.log(myres);
                    $scope.results = myres;
                    // var addressMap = addressStringifier(resp.data, queryString);
                });

			  $scope.ok = function (okresp) {  
			  	console.log(okresp);
    			$modalInstance.close(okresp);

  			};

			  $scope.cancel = function () {			  	
			  	$scope.showNoRecordsMsg = false;			  	 			   			    
			    $modalInstance.dismiss("cancel");
			  };




	}]);

});

