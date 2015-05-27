

define(['controllers/controllerModule','jquery',"underscore"], function (controllerModule,$,_) {

	 controllerModule.controller('dashboardController', ["$scope","$interval","dashboardWidgetService",function($scope,$interval,dashboardWidgetService){		
	 	
    var self = this;
   
    $scope.dashboardOptions ={};    
    self.widgetDefinitions=[];
    self.defaultWidgets=[];


   $scope.$on("userAuthenticated", function(e, userRole){
     
        console.log(userRole);

      if(userRole == "Cadre"){
        self.widgetDefinitions =dashboardWidgetService.cadre; 
      }else if(userRole == "Office Executive"){
        self.widgetDefinitions =dashboardWidgetService.officeExecutive; 
      }else if(userRole == "Office Manager"){
        self.widgetDefinitions =dashboardWidgetService.officeManager;
      }

      console.log(userRole);
      console.log(self.widgetDefinitions);

     self.defaultWidgets = _.map(self.widgetDefinitions, function (widgetDef) {
        return {
          name: widgetDef.name
        };
    });


    $scope.dashboardOptions = {
      widgetButtons: false,
      widgetDefinitions: self.widgetDefinitions,
      defaultWidgets: self.defaultWidgets,
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

