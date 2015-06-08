 define(['directives/directiveModule'], function(directiveModule) {
     directiveModule.directive('taskstrendChartDirective', ['dashboardService',
             function(dashboardService) {

                 return {
                     restrict: "A",
                     link: function(scope, elem, attrs) {

                         var trendList,
                             lineData = [],
                             tasksLabels = [];


                         dashboardService.getTasksByTrend(function(resp) {

                             trendList = resp.data;

                             for (var i = 0; i < trendList.length; i++) {
                                 tasksLabels.push(trendList[i].monthName);
                                 lineData.push(trendList[i].count);
                             }



                             scope.labels = tasksLabels;
                             scope.series = ['Monthwise Task Report'];
                             scope.data = [
                                 lineData,
                             ];
                             scope.legend = true;
                             scope.options = {
                                 legend: true,
                                 bezierCurve: true,
                                 //bezierCurveTension: 0.9,
                             };
                             scope.colours = ['#C6781C'];
                             scope.onClick = function(points, evt) {
                                 console.log(points, evt);
                             };


                         });




                     }
                 }
             }
         ]

     );


 });