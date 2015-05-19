'use strict';

define(['directives/directiveModule'], function(directiveModule) {
    directiveModule.directive('tasksageChartDirective', [
            function() {     

                return {
                    restrict: "A",                    
                    link: function(scope, elem, attrs) {

                        scope.labels = ['0-5', '5-10', '10-15', '15-20', '>20 days'];
                        scope.series = ['Series A', 'Series B'];

                        scope.data = [
                            [65, 59, 80, 81, 56, 55, 40],
                            [35, 24, 50, 23, 29, 64, 21]
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
                        }


                    }
                }
            }
        ]

    );


});