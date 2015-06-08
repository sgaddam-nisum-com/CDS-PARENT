 

define(['directives/directiveModule'], function(directiveModule) {
     directiveModule.directive('notificationsDirective', ['dashboardService',
            function(dashboardService) {
                
                return {
                    restrict: "A",
                    link: function(scope, elem, attrs) {                      

                        var griddata = [];
                       
                        scope.notifications=[];

                        dashboardService.getNotifications("cadre",function(resp) {                          
                      
                            scope.notifications = resp.data.inboxs;

                        });

                    
                    }
                }
            }
        ]

    );


});