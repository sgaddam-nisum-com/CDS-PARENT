

define(['controllers/controllerModule','jquery',"underscore"], function (controllerModule,$,_) {

	 controllerModule.controller('dashboardController', ["$scope","$compile","$interval","dashboardWidgetService",function($scope,$compile,$interval,dashboardWidgetService){		
	 	
    var self = this;
   
    $scope.dashboardOptions ={};    
    self.widgetDefinitions=[];
    self.defaultWidgets=[];


   $scope.$on("userAuthenticated", function(e, userRole){
     
        console.log(userRole);

        var userRole = "Office Manager"

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
     var dashboardEl = $compile( "<div dashboard='dashboardOptions'></div>" )( $scope );
    $("#dashboardWidget").html(dashboardEl);

   });

	}]);

});

