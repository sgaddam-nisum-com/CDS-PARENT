 define(['directives/directiveModule', "underscore"], function(directiveModule, _) {
     directiveModule.directive('tasksageChartDirective', ['dashboardService',
             function(dashboardService) {




                 return {
                     restrict: "A",
                     link: function(scope, elem, attrs) {


                         var revChartData = {};
                         revChartData.labels = [];
                         revChartData.series = [];
                         revChartData.data = [];
                         dashboardService.getTasksByAge(scope.userRole, function(resp) {
                             chartData = resp.data;
                             var sortedChartArray = _.sortBy(chartData, "priorityId");

                             for (var i = 0; i < sortedChartArray.length; i++) {
                                 revChartData.series.push(sortedChartArray[i].priorityName);
                                 var dataArray = [];
                                 for (var k = 0; k < sortedChartArray[i].taskAgeRangeCounts.length; k++) {
                                     dataArray.push(sortedChartArray[i].taskAgeRangeCounts[k].count);
                                 }
                                 revChartData.data.push(dataArray);
                             }

                             for (var j = 0; j < sortedChartArray[0].taskAgeRangeCounts.length; j++) {
                                 revChartData.labels.push(sortedChartArray[0].taskAgeRangeCounts[j].range);
                             }

                             console.log(revChartData.series);
                             scope.labels = revChartData.labels;
                             scope.series = revChartData.series;
                             scope.data = revChartData.data;
                             scope.options = {
                                 scaleBeginAtZero: true,
                                 scaleShowGridLines: true,
                                 scaleGridLineColor: "rgba(0,0,0,.05)",
                                 scaleGridLineWidth: 1,
                                 scaleShowHorizontalLines: true,
                                 scaleShowVerticalLines: true,
                                 barShowStroke: true,
                                 barStrokeWidth: 1,
                                 barValueSpacing: 5,
                                 barDatasetSpacing: 1,
                                 stacked: true
                             };
                             scope.legend = true;









                         });









                     }
                 }
             }
         ]

     );


 });