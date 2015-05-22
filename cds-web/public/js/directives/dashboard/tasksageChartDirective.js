'use strict';

define(['directives/directiveModule'], function(directiveModule) {
    directiveModule.directive('tasksageChartDirective', ['dashboardService',
            function(dashboardService) {
                var highdata = [],
                    mediumdata = [],
                    lowdata = [],
                    hc1 = 0,
                    hc2 = 0,
                    hc3 = 0,
                    hc4 = 0,
                    hc5 = 0,
                    mc1 = 0,
                    mc2 = 0,
                    mc3 = 0,
                    mc4 = 0,
                    mc5 = 0,
                    lc1 = 0,
                    lc2 = 0,
                    lc3 = 0,
                    lc4 = 0,
                    lc5 = 0,
                    taskbyAge;
                dashboardService.getTasksByAge(function(resp) {
                    taskbyAge = resp.data;
                    for (var i = 0; i < taskbyAge.length; i++) {
                        if ((taskbyAge[i].ageOfTask >= 0) && (taskbyAge[i].ageOfTask < 5)) {
                            if (taskbyAge[i].priorityName == "HIGH") {
                                hc1 = hc1 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "MEDIUM") {
                                mc1 = mc1 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "LOW") {
                                lc1 = lc1 + taskbyAge[i].count;
                            }

                        }
                        if ((taskbyAge[i].ageOfTask >= 5) && (taskbyAge[i].ageOfTask < 10)) {
                            if (taskbyAge[i].priorityName == "HIGH") {
                                hc2 = hc2 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "MEDIUM") {
                                mc2 = mc2 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "LOW") {
                                lc2 = lc2 + taskbyAge[i].count;
                            }
                        }
                        if ((taskbyAge[i].ageOfTask >= 10) && (taskbyAge[i].ageOfTask < 15)) {
                            if (taskbyAge[i].priorityName == "HIGH") {
                                hc3 = hc3 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "MEDIUM") {
                                mc3 = mc3 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "LOW") {
                                lc3 = lc3 + taskbyAge[i].count;
                            }
                        }
                        if ((taskbyAge[i].ageOfTask >= 15) && (taskbyAge[i].ageOfTask < 20)) {
                            if (taskbyAge[i].priorityName == "HIGH") {
                                hc4 = hc4 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "MEDIUM") {
                                mc4 = mc4 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "LOW") {
                                lc4 = lc4 + taskbyAge[i].count;
                            }
                        }
                        if (taskbyAge[i].ageOfTask > 20) {
                            if (taskbyAge[i].priorityName == "HIGH") {
                                hc5 = hc5 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "MEDIUM") {
                                mc5 = mc5 + taskbyAge[i].count;
                            }
                            if (taskbyAge[i].priorityName == "LOW") {
                                lc5 = lc5 + taskbyAge[i].count;
                            }
                        }
                    }
                    highdata.push(hc1, hc2, hc3, hc4, hc5);
                    mediumdata.push(mc1, mc2, mc3, mc4, mc5);
                    lowdata.push(lc1, lc2, lc3, lc4, lc5);

                });

                return {
                    restrict: "A",
                    link: function(scope, elem, attrs) {

                        scope.labels = ['0-5', '5-10', '10-15', '15-20', '>20 days'];
                        scope.series = ['High', 'Medium', 'Low'];

                        scope.data = [
                            highdata, mediumdata, lowdata
                        ];
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


                    }
                }
            }
        ]

    );


});
