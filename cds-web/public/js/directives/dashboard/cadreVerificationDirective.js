 

define(['directives/directiveModule'], function(directiveModule) {
    directiveModule.directive('cadreVerificationDirective', [
            function() {

                return {
                    restrict: "A",                    
                    link: function(scope, elem, attrs) {

                         scope.gridOptions = {
                            paginationPageSizes: [5, 20, 30],
                            paginationPageSize: 5,
                            columnDefs: [{
                                name: 'taskId'
                            }, {
                                name: 'task'
                            }, {
                                name: 'date'
                            }],
                            data: [{
                                "taskId": "R1321",
                                "task": "Request for Adhar",
                                "date": "20/2/15"

                            }, {
                                "taskId": "R1322",
                                "task": "Request for ligiting",
                                "date": "21/2/15"
                            }, {
                                "taskId": "R1323",
                                "task": "Request for Roads",
                                "date": "22/2/15"
                            }, {
                                "taskId": "R1324",
                                "task": "Request for Cleaning",
                                "date": "23/2/15"
                            }, {
                                "taskId": "R1325",
                                "task": "Request for voter cards",
                                "date": "24/2/15"
                            },{
                                "taskId": "R1325",
                                "task": "Request for voter cards",
                                "date": "24/2/15"
                            },{
                                "taskId": "R1325",
                                "task": "Request for voter cards",
                                "date": "24/2/15"
                            },{
                                "taskId": "R1325",
                                "task": "Request for voter cards",
                                "date": "24/2/15"
                            },{
                                "taskId": "R1325",
                                "task": "Request for voter cards",
                                "date": "24/2/15"
                            },{
                                "taskId": "R1325",
                                "task": "Request for voter cards",
                                "date": "24/2/15"
                            },{
                                "taskId": "R1325",
                                "task": "Request for voter cards",
                                "date": "24/2/15"
                            }]
                        };


                       
                       
                      



                    }
                }
            }
        ]

    );


});