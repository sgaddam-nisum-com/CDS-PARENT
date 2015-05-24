

define(['controllers/controllerModule','jquery',"underscore"], function (controllerModule,$,_) {

	 controllerModule.controller('dashboardController', ["$scope","$interval",function($scope,$interval){		
	 	var self = this;
	 
	 	var widgetDefinitions = [
    /*{
        name: 'Age wise Tasks',
        title : "Age wise Tasks",
        style: {
          width: '33%',
          height:"270px"
        },
        directive :"tasksage-chart-directive",
        templateUrl : "views/dashboard/tasksage-chart.html",
        "class" : "d-widget tasks-age"  
            
      },
       
       {
        name: 'My Tasks View',
        title : "My Tasks",
        style: {
          width: '33%',
          height:"270px"
        },
        directive :"mytasks-chart-directive",
        templateUrl : "views/dashboard/mytasks-chart.html",
          "class" : "d-widget self-tasks"
    
        
      },

       {
        name: 'Tasks trend',
        title : "Tasks trend",
        style: {
          width: '34%',
          height:"270px"
        },
        directive :"taskstrend-chart-directive",
        templateUrl : "views/dashboard/taskstrend-chart.html",
  
          "class" : "d-widget tasks-trend"
    
        
      },*/
      {
        name: 'Cadre Verifications',
        title : "Cadre Verifications",
        style: {
          width: '66%'
        },       
        enableVerticalResize : true,
        directive : "cadre-verification-directive",
        templateUrl : "views/dashboard/cadre-verifications.html",
       
          "class" : "d-widget cadre-verifications"
    
        
      },
     /*  {
        name: 'Alerts / Notifications',
        title : "Alerts / Notifications",
        style: {
          width: '34%'
        },      
        directive : "self-tasks-directive",
        templateUrl : "views/dashboard/self-tasks.html",
  
          "class" : "d-widget notifications"
    
        
      },*/
      {
        name: 'My Team Tasks',
         title : "My Team Tasks",
        style: {
          width: '100%'
        },    
        directive :"team-tasks-directive",
       "class" : "d-widget team-tasks"
        
      }   
    ];


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



	 	

	}]);

});

