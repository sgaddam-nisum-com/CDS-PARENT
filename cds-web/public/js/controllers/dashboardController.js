

define(['controllers/controllerModule','jquery',"underscore"], function (controllerModule,$,_) {

	 controllerModule.controller('dashboardController', ["$scope","$rootScope","$interval","dashboardWidgetService","cdsService",function($scope,$rootScope,$interval,dashboardWidgetService,cdsService){		
	 	var self = this;
   
    $scope.dashboardOptions ={};
    

   $scope.$on("userAuthenticated", function(e, userRole){

      var widgetDefinitions=[];

      if(userRole == "Cadre"){
        widgetDefinitions =dashboardWidgetService.cadre; 
      }else if(userRole == "Office Executive"){
        widgetDefinitions =dashboardWidgetService.officeExecutive; 
      }else if(userRole == "Office Manager"){
        widgetDefinitions =dashboardWidgetService.officeManager;
      }

    var defaultWidgets = _.map(widgetDefinitions, function (widgetDef) {
      return {
        name: widgetDef.name
      };
    });


    $scope.dashboardOptions = {
      widgetButtons: false,
      widgetDefinitions: widgetDefinitions,
      defaultWidgets: defaultWidgets,
      hideWidgetName : true,
      hideWidgetSettings : true,
      enableEditTitle : false
    };



    $scope.addWidget = function (directive) {
      $scope.dashboardOptions.addWidget({
        name: directive
      });
    };
  
  $scope.addWidgetScopeWatch = function () {
      $scope.dashboardOptions.addWidget({
        name: 'scope-watch',
        attrs: {
          value: 'randomValue'
        }
      });
    };


 $scope.values = ['option1', 'option2', 'option3'];
    $scope.value = $scope.values[0];


   });

	}]);

});

