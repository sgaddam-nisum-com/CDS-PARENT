define(['controllers/controllerModule'], function (controllerModule) {

	 controllerModule.controller('cadreVerificationController', ["$scope","$http","$modalInstance","callerScope","$rootScope","dashboardService","registerService","appUrlService",

	 	function($scope,$http, $modalInstance,callerScope,$rootScope,dashboardService,registerService,appUrlService){

 			var currentUserId = callerScope.currentUserId;

 			$scope.showApprovedStatus = true;


 			console.log(currentUserId);

 			registerService.getPartyPositionsOptions(function(resp){									 				 			
					$scope.partyPositionsOptions = resp.data;						
			});

			registerService.getPerformanceGradeOptions(function(resp){								
				$scope.performanceGradeOptions = resp.data;			
			});


			dashboardService.getLeadCadres(function(resp){
				console.log(resp);
				$scope.leadCadres = resp.data;

			});

	 		dashboardService.getCadreDetails(function(resp) {                                									 			

				$scope.user = {};
				$scope.user.partyMembershipId = resp.data.partyMembershipId;
				$scope.user.positionId = resp.data.partyDesigination.positionId;
				$scope.user.partyResponsibility = resp.data.partyResponsibility;
				$scope.user.performanceGradeId = resp.data.performanceGradeId;
            },currentUserId);



	 		$scope.approve = function(){
	 			var reqObj = {};

	 			reqObj.cadre = {};
	 			reqObj.cadre.positionId = $scope.user.positionId;
	 			reqObj.cadre.partyMembershipId = $scope.user.partyMembershipId;
	 			reqObj.cadre.partyResponsibility = $scope.user.partyResponsibility;
	 			reqObj.cadre.performanceGradeId = $scope.user.performanceGradeId;
	 			reqObj.cadre.reportsTo = $scope.user.reportsTo || null;
	 			reqObj.interestedAsCadre = "1";
	 			reqObj.userId = currentUserId;
	 			

	 				$http({
	 					url : appUrlService.approveAsCadre,
	 					method :"PUT",
	 					data : reqObj						
	                }).success(function(resp, textStatus, jqXHR) {
                        	
                        	console.log(resp);


    	            }).error(function(jqXHR, textStatus, errorThrown) {

                	}) 

	 		}



	 		



			$scope.reject = function(){

				var reqObj={};
				reqObj.userId = currentUserId;
				reqObj.comment = $scope.user.rejectComment;


				$http({
	 					url : appUrlService.rejectCadre,
	 					method :"PUT",
	 					data : reqObj						
	                }).success(function(resp, textStatus, jqXHR) {
                        	
                        	console.log(resp);


    	            }).error(function(jqXHR, textStatus, errorThrown) {

                	}) 



			}









	 	  	$scope.ok = function (value, id) {  			  	
    			$modalInstance.close();
  			};

 			$scope.cancel = function () {	
				
			 
			var reqObj={};
				reqObj.userId = currentUserId;
				reqObj.comment = $scope.user.rejectComment;		

				dashboardService.updateCadreStatus({
                                 userId: currentUserId,
                                 type: "cancelled"
                             },function(resp){

                             	console.log(resp);

                             	$modalInstance.dismiss("cancel");


                             });





			 }

	}]);

});

