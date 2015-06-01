define(['services/serviceModule'], function(serviceModule) {
    serviceModule.factory('dashboardWidgetService', ['$http', 'appUrlService',
        function($http, appUrlService) {
            return {


                "cadre": [ {
                        name: 'Age wise Tasks',
                        title: "Age wise Tasks",
                        style: {
                            width: '33%',
                            height: "300px"

                        },
                        directive: "tasksage-chart-directive",
                        templateUrl: "views/dashboard/tasksage-chart.html",
                        "class": "d-widget tasks-age"

                    },
                      {
                        name: 'My Tasks View',
                        title: "Tasks assigned to me",
                        style: {
                            width: '33%',
                            height: "300px"
                        },
                        directive: "mytasks-chart-directive",
                        templateUrl: "views/dashboard/mytasks-chart.html",
                        "class": "d-widget self-tasks"
                    },

                     {
                        name: 'Tasks trend',
                        title: "Tasks trend",
                        style: {
                            width: '34%',
                            height: "300px"
                        },
                        directive: "taskstrend-chart-directive",
                        templateUrl: "views/dashboard/taskstrend-chart.html",

                        "class": "d-widget tasks-trend"

                    },
                       {
                        name: 'Events',
                        title: "Events tracker",
                        style: {
                            width: '100%',
                            height: "128px"
                        },
                        directive: "events-banner-directive",
                        templateUrl: "views/dashboard/events-banner.html",
                        "class": "d-widget events-banner"

                    },

                    {
                        name: 'My Tasks',
                        title: "My Tasks",
                        style: {
                            width: '100%',
                            height: "432px"
                        },
                        directive: "self-tasks-directive",
                        templateUrl: "views/dashboard/self-tasks.html",
                        "class": "d-widget team-tasks"

                    },


                    {
                        name: 'Alerts / Notifications',
                        title: "Alerts / Notifications",
                        style: {
                            width: '34%',
                            height: "432px"

                        },
                        directive: "notifications-directive",
                        templateUrl: "views/dashboard/notifications.html",
                        "class": "d-widget notifications"

                    },


                    {
                        name: 'My Team Tasks',
                        title: "My Team Tasks",
                        style: {
                            width: '66%',
                            height: "432px"
                        },
                        directive: "team-tasks-directive",
                        templateUrl: "views/dashboard/self-tasks.html",
                        "class": "d-widget team-tasks"
                    }

                ],


                "officeExecutive": [
                {
                        name: 'Age wise Tasks',
                        title: "Age wise Tasks",
                        style: {
                            width: '50%',
                            height: "320px"
                        },
                        directive: "tasksage-chart-directive",
                        templateUrl: "views/dashboard/tasksage-chart.html",
                        "class": "d-widget tasks-age"

                    },
                     {
                        name: 'Tasks trend',
                        title: "Tasks trend",
                        style: {
                            width: '50%',
                            height: "320px"
                        },
                        directive: "taskstrend-chart-directive",
                        templateUrl: "views/dashboard/taskstrend-chart.html",

                        "class": "d-widget tasks-trend"

                    },
                    {
                        name: 'Events',
                        title: "Events tracker",
                        style: {
                            width: '100%',
                            height: "128px"
                        },
                        directive: "events-banner-directive",
                        templateUrl: "views/dashboard/events-banner.html",
                        "class": "d-widget events-banner"

                    },

                    {
                        name: 'Cadre Verifications (All)',
                        title: "Cadre Verifications (All)",
                        style: {
                            width: '100%',
                            height: "432px"
                        },
                        enableVerticalResize: true,
                        directive: "cadre-verification-all-directive",
                        templateUrl: "views/dashboard/cadre-verifications-all.html",

                        "class": "d-widget cadre-verifications-all"


                    },

                    {
                        name: 'Cadre Verifications (Service Center)',
                        title: "Cadre Verifications (Service Center)",
                        style: {
                            width: '100%',
                            height: "432px"
                        },
                        enableVerticalResize: true,
                        directive: "cadre-verification-office-directive",
                        templateUrl: "views/dashboard/cadre-verifications-office.html",
                        "class": "d-widget cadre-verifications-all"

                    },

                    {
                        name: 'Cadre Verifications (Assigned to me)',
                        title: "Cadre Verifications (Assigned to me)",
                        style: {
                            width: '100%'
                        },
                        enableVerticalResize: true,
                        directive: "cadre-verification-self-directive",
                        templateUrl: "views/dashboard/cadre-verifications-self.html",

                        "class": "d-widget cadre-verifications-all"


                    }

                    /* {
                            name: 'My Tasks View',
                            title : "Tasks assigned to me",
                            style: {
                              width: '33%'          
                            },
                            directive :"mytasks-chart-directive",
                            templateUrl : "views/dashboard/mytasks-chart.html",
                              "class" : "d-widget self-tasks"
                          },*/





                    /*  {
                            name: 'Alerts / Notifications',
                            title : "Alerts / Notifications",
                            style: {
                              width: '34%'
                            },      
                            directive : "self-tasks-directive",
                            templateUrl : "views/dashboard/self-tasks.html",
                      
                              "class" : "d-widget notifications"
                        
                            
                          },*/
                    /*  {
                            name: 'My Team Tasks',
                             title : "My Team Tasks",
                            style: {
                              width: '100%'
                            },    
                            directive :"team-tasks-directive",
                           "class" : "d-widget team-tasks"
                            
                          } */
                ],

                "officeManager" :  [


                /*D3 implementation in test*/
                /* {
                        name: 'sample',
                        title: "sample",
                        style: {
                            width: '50%',
                            height: "320px"
                        },
                        directive: "test-d",
                        templateUrl: "views/dashboard/test-d.html",
                        "class": "testd"

                    },
*/


                {
                        name: 'Age wise Tasks',
                        title: "Age wise Tasks",
                        style: {
                            width: '50%',
                            height: "320px"
                        },
                        directive: "tasksage-chart-directive",
                        templateUrl: "views/dashboard/tasksage-chart.html",
                        "class": "d-widget tasks-age"

                    },
                     {
                        name: 'Tasks trend',
                        title: "Tasks trend",
                        style: {
                            width: '50%',
                            height: "320px"
                        },

                        directive: "taskstrend-chart-directive",
                        templateUrl: "views/dashboard/taskstrend-chart.html",

                        "class": "d-widget tasks-trend"

                    },
                    {
                        name: 'Events',
                        title: "Events tracker",
                        style: {
                            width: '100%',
                            height: "128px"
                        },
                        directive: "events-banner-directive",
                        templateUrl: "views/dashboard/events-banner.html",
                        "class": "d-widget events-banner"

                    },

                    {
                        name: 'Cadre Verifications (New)',
                        title: "Cadre Verifications (New)",
                        style: {
                            width: '100%',
                            height: "432px"
                        },
                        enableVerticalResize: true,
                        directive: "cadre-verification-new-directive",
                        templateUrl: "views/dashboard/cadre-verifications-new.html",

                        "class": "d-widget cadre-verifications-all"


                    },

            /*        {
                        name: 'Cadre Verifications (Service Center)',
                        title: "Cadre Verifications (Service Center)",
                        style: {
                            width: '100%',
                            height: "432px"
                        },
                        enableVerticalResize: true,
                        directive: "cadre-verification-office-directive",
                        templateUrl: "views/dashboard/cadre-verifications-office.html",
                        "class": "d-widget cadre-verifications-all"

                    },*/

                    {
                        name: 'Cadre Verifications (Existing)',
                        title: "Cadre Verifications (Existing)",
                        style: {
                            width: '100%'
                        },
                        enableVerticalResize: true,
                        directive: "cadre-verification-existing-directive",
                        templateUrl: "views/dashboard/cadre-verifications-existing.html",

                        "class": "d-widget cadre-verifications-all"


                    }

                    /* {
                            name: 'My Tasks View',
                            title : "Tasks assigned to me",
                            style: {
                              width: '33%'          
                            },
                            directive :"mytasks-chart-directive",
                            templateUrl : "views/dashboard/mytasks-chart.html",
                              "class" : "d-widget self-tasks"
                          },*/





                    /*  {
                            name: 'Alerts / Notifications',
                            title : "Alerts / Notifications",
                            style: {
                              width: '34%'
                            },      
                            directive : "self-tasks-directive",
                            templateUrl : "views/dashboard/self-tasks.html",
                      
                              "class" : "d-widget notifications"
                        
                            
                          },*/
                    /*  {
                            name: 'My Team Tasks',
                             title : "My Team Tasks",
                            style: {
                              width: '100%'
                            },    
                            directive :"team-tasks-directive",
                           "class" : "d-widget team-tasks"
                            
                          } */
                ]

            }

        }
    ]);
});