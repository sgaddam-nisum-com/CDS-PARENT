'use strict';

define(['directives/directiveModule'], function(directiveModule) {
    directiveModule.directive('taskstrendChartDirective', ['dashboardService',
            function(dashboardService) {
                var trendList,
                    lineData = [];
                dashboardService.getTasksByTrend(function(resp) {
                    trendList = resp.data;
                    for (var i = 0; i < trendList.length; i++) {
                        if (trendList[i].monthName == "Jan") {
                            lineData[0] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Feb") {
                            lineData[1] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Mar") {
                            lineData[2] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Apr") {
                            lineData[3] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "May") {
                            lineData[4] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Jun") {
                            lineData[5] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Jul") {
                            lineData[6] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Aug") {
                            lineData[7] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Sep") {
                            lineData[8] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Oct") {
                            lineData[9] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Nov") {
                            lineData[10] = trendList[i].count;
                        }
                        if (trendList[i].monthName == "Dec") {
                            lineData[11] = trendList[i].count;
                        }
                    }
                });


                return {
                    restrict: "A",
                    link: function(scope, elem, attrs) {

                        scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        scope.series = ['Count'];
                        scope.data = [
                            lineData,
                        ];
                        scope.options = {
                            bezierCurve: false,
                            //bezierCurveTension: 0.9,
                        };
                        scope.onClick = function(points, evt) {
                            console.log(points, evt);
                        };


                    }
                }
            }
        ]

    );


});
