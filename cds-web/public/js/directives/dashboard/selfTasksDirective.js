'use strict';

define(['directives/directiveModule'], function(directiveModule) {
     directiveModule.directive('selfTasksDirective', ['dashboardService',
            function(dashboardService) {
                var griddata = [],
                temp = {};
                dashboardService.getTasks(function(resp) {
                    var tasks = resp.data.tasks;
                    for (var i = 0; i < tasks.length; i++) {
                        temp = {
                            taskId: tasks[i].taskId,
                            task:tasks[i].taskName,
                            createdate:tasks[i].createdDate
                        }
                        griddata.push(temp);
                    }
                });
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
                                name: 'createdate'
                            }],
                            data: griddata
                        };
                    }
                }
            }
        ]

    );


});