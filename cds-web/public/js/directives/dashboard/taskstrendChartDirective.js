'use strict';

define(['directives/directiveModule'], function(directiveModule) {
    directiveModule.directive('taskstrendChartDirective', [
            function() {     

                return {
                    restrict: "A",                    
                    link: function(scope, elem, attrs) {

                      scope.labels = ["2006", "2007", "2008", "2009", "2010", "2011", "2012"];
                        scope.series = ['Series A'];
                    scope.data = [
                        [65, 59, 80, 81, 56, 55, 40],
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