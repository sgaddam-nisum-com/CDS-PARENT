define(['controllers/controllerModule',"messageHandler"], function (controllerModule, messageHandler) {

	 controllerModule.controller('cadreVerificationController', ["$scope","$http","$modalInstance","callerScope","$rootScope","dashboardService","registerService","appUrlService","$timeout",

	 	function($scope,$http, $modalInstance,callerScope,$rootScope,dashboardService,registerService,appUrlService, $timeout){

 			var currentUserId = callerScope.currentUserId;

 			$scope.showApprovedStatus = false;


 			console.log(currentUserId);

 			registerService.getPartyPositionsOptions(function(resp){									 				 			
					$scope.partyPositionsOptions = resp.data;						
			});

			registerService.getPerformanceGradeOptions(function(resp){								
				$scope.performanceGradeOptions = resp.data;			
			});


			dashboardService.getLeadCadres(function(resp){
				$scope.loopobj = resp.data;
				var myresp = angular.copy(resp.data);
				angular.forEach(resp.data, function(value, key){
					myresp[key].nameid = value.firstName + " " +"(" +value.cadre.partyMembershipId + ")";
				});
				$scope.leadCadres = myresp;
			});

	 		dashboardService.getCadreDetails(function(resp) {                                									 			

				$scope.user = {};
				$scope.user.partyMembershipId = resp.data.partyMembershipId;
				$scope.user.positionId = resp.data.partyDesigination.positionId;
				$scope.user.partyResponsibility = resp.data.partyResponsibility;
				$scope.user.performanceGradeId = resp.data.performanceGradeId;
            },currentUserId);

	 		$scope.hideLeadInfo = true;
	 		$scope.showLeadInfo = function(cid){
 				angular.forEach($scope.loopobj, function( value, key ){
	 				if( cid.cadre.cadreId === value.cadre.cadreId){
	 					$scope.hideLeadInfo = false;
	 					// $scope.leadInfoName = value.firstName;
	 					$scope.leadMobileNum = value.mobileNumber;
	 					if(value.aadharId !== undefined){
	 						$scope.leadAadhar = value.aadharId;
	 					} else {
	 						$scope.leadAadhar = "Not Available";
	 					}
	 				} else if(cid.cadre.cadreId === undefined){
	 					$scope.hideLeadInfo = true;
	 				}
	 			});
	 		}

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
	                	if(resp.status == "success" ){
                        	messageHandler.showInfoStatus("User cadre status is approved successfully",".cadre-status-message");
                        	$timeout(function() {
	                        	$modalInstance.dismiss("cancel");	
                        }, 900);
	                	}else{
	                		messageHandler.showErrorStatus("Something went wrong. Please try again.",".cadre-status-message");
	                	}

    	            }).error(function(jqXHR, textStatus, errorThrown) {

    	            		messageHandler.showErrorStatus("Something went wrong. Please try again.",".cadre-status-message");
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
	                	if(resp.status === "success"){

	                	 messageHandler.showInfoStatus("Current Cadre approval is rejected.",".cadre-status-message");
                        	$timeout(function() {
	                        	$modalInstance.dismiss("cancel");	
                        }, 900);

	                	}else{

	                	 messageHandler.showErrorStatus("Something went wrong. Please try again.",".cadre-status-message");                   	
	                	}
    	            }).error(function(jqXHR, textStatus, errorThrown) {
    	            	messageHandler.showErrorStatus("Something went wrong. Please try again.",".cadre-status-message");
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

