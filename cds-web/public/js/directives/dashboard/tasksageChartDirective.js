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
                             scope.legend = true;
                             scope.colours = [{

                                 fillColor: "#c6781c",
                                 highlightFill: "rgba(224, 108, 112, 1)",


                             }, {
                                 fillColor: "rgba(49,105,181,0.9)",
                                 highlightFill: "rgba(49,105,181,1)",

                             }, {
                                 fillColor: "rgba(140,182,66,0.9)",
                                 highlightFill: "rgba(140,182,66,1)",

                             }];




                         });









                     }
                 }
             }
         ]

     );


 });