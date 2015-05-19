'use strict';

define(['directives/directiveModule'], function(directiveModule) {
    directiveModule.directive('mytasksChartDirective', [
            function() {     

                return {
                    restrict: "A",                    
                    link: function(scope, elem, attrs) {

                            scope.labels = ["In-progress", "Completed", "Risk to complete"];
                            scope.data = [300, 500, 100];
                            scope.legend = true;


                    }
                }
            }
        ]

    );


});