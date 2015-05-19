
'use strict';

define(['controllers/controllerModule','jquery',"underscore"], function (controllerModule,$,_) {

	 controllerModule.controller('dashboardController', ["$scope",
	 													"RandomTimeSeriesDataModel",
	 													"RandomTopNDataModel", 
	 													"$interval",
	 													"stackedAreaChartSampleData",
	 													"pieChartSampleData",
	 													function($scope,
	 														RandomTimeSeriesDataModel,
	 														RandomTopNDataModel,
	 														$interval,
	 														stackedAreaChartSampleData,
	 														pieChartSampleData ){		
	 	var self = this;
	 			

	 	var widgetDefinitions = [
      {
        name: 'Cadre Verifications',
        title : "Cadre Verifications",
        style: {
          width: '33%'
        },
        templateUrl : "views/dashboard/cadre-verifications.html",
        enableVerticalResize : true,
        directive : "cadreVerificationDirective"
      },
       {
        name: 'My Tasks',
        title : "My Tasks",
        style: {
          width: '33%'
        },
        templateUrl : "views/dashboard/self-tasks.html",
        directive : "selfTaskDirective"
      },
      {
        name: 'My Team Tasks',
         title : "My Team Tasks",
        style: {
          width: '33%'
        },
        templateUrl : "views/dashboard/team-tasks.html",
        directive :"teamTasksDirective"
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

// random scope value (scope-watch widget)
    $interval(function () {
      $scope.randomValue = Math.random();
    }, 500);

// percentage (gauge widget, progressbar widget)
    $scope.percentage = 5;
    $interval(function () {
      $scope.percentage = ($scope.percentage + 10) % 100;
    }, 1000);

    // nvd3-stacked-area-chart
    $scope.stackedAreaChartData = stackedAreaChartSampleData;

    $scope.xAxisTickFormat = function () {
      return function (d) {
        return d3.time.format('%x')(new Date(d));
      };
    };

    // pie chart
    $scope.pieChartData = pieChartSampleData;

    /*
     var pieChart = angular.copy(pieChartSampleData);

     $interval(function () { //TODO
     var a = pieChart[0];
     var b = pieChart[1];
     var sum = a.y + b.y;
     a.y = (a.y + 1) % sum;
     b.y = sum - a.y;
     $scope.pieChartData = angular.copy(pieChart);
     }, 500);
     */

    // external controls
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

