'use strict';

define(['directives/directiveModule', 'autocomplete'], function(directiveModule) {
    directiveModule.directive('autoCompleteDirective', ["cdsService",
            function(cdsService) {
                console.log("here");
                var availableTags = [{

                    "Name": "Shiva",
                    "label": "Hyderabad, madhapur, 502001",                    
                }, {
                    "Name":"Gangadhar",
                    "label": "Hyd, patacheru, 502002"
                }, {

                    "Name": "Ramesh",
                    "label": "Hyd, xxx, 502001"
                }];
             

                return {
                    restrict: "A",
                    link: function(scope, elem, attrs) {                        
                        $(elem).autocomplete({
                            source:availableTags
                        });
                       
                    }
                }
            }
        ]

    );


});