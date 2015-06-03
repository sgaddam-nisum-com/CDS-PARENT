 define(['directives/directiveModule'], function(directiveModule) {
    directiveModule.directive('mytasksChartDirective', ['dashboardService',
            function(dashboardService) {
                var donutData = [];
                dashboardService.getTaskState(function(resp) {
                    donutData[0] = resp.data.assignedCount;
                    donutData[1] = resp.data.inprogressCount;
                    donutData[2] = resp.data.riskCount;
                    console.log(donutData);
                });
                return {
                    restrict: "A",
                    link: function(scope, elem, attrs) {
                        scope.labels = ["Assigned", "In-progress", "Risk to complete"];
                        scope.data = donutData;
                        scope.legend = true;

                    }
                }
            }
        ]

    );


});
