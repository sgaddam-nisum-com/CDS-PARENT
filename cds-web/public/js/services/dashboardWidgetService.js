define(['services/serviceModule'], function(serviceModule) {
    serviceModule.factory('dashboardWidgetService', ['$http', 'appUrlService',
        function($http, appUrlService) {
            return {


                "cadre": [ {
                        name: 'Age wise Tasks',
                        title: "Age wise Tasks",
                        style: {
                            height: "300px"
                        },
                        directive: "tasksage-chart-directive",
                        templateUrl: "views/dashboard/tasksage-chart.html",
                        "class": "d-widget tasks-age col-md-4"

                    },
                      {
                        name: 'My Tasks View',
                        title: "Tasks assigned to me",
                        style: {
                            height: "300px"
                        },
                        directive: "mytasks-chart-directive",
                        templateUrl: "views/dashboard/mytasks-chart.html",
                        "class": "d-widget self-tasks col-md-4"
                    },

                     {
                        name: 'Tasks trend',
                        title: "Tasks trend",
                        style: {
                            height: "300px"
                        },
                        directive: "taskstrend-chart-directive",
                        templateUrl: "views/dashboard/taskstrend-chart.html",
                        "class": "d-widget tasks-trend col-md-4"

                    },
                       {
                        name: 'Events',
                        title: "Events tracker",
                        style: {
                            height: "128px"
                        },
                        directive: "events-banner-directive",
                        templateUrl: "views/dashboard/events-banner.html",
                        "class": "d-widget events-banner col-md-12"

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
                        name: 'My Team Tasks',
                        title: "My Team Tasks",
                        style: {
                            width: '66%',
                            height: "432px"
                        },
                        directive: "team-tasks-directive",
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
                        name: 'Cadre Membership (Followups)',
                        title: "Cadre Membership (Followups)",
                        style: {
                            width: '100%',
                            height: "460px"
                        },
                        enableVerticalResize: true,
                        directive: "cadre-followups-directive",
                        templateUrl: "views/dashboard/cadre-followups.html",

                        "class": "d-widget cadre-verifications-all"


                    },

                    {
                        name: 'Cadre Membership (Verifications)',
                        title: "Cadre Membership (Verifications)",
                        style: {
                            width: '100%',
                            height: "432px"
                        },
                        enableVerticalResize: true,
                        directive: "cadre-verifications-directive",
                        templateUrl: "views/dashboard/cadre-verifications.html",

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

                {
                        name: 'Age wise Tasks',
                        title: "Age wise Tasks",
                        style: {
                            height: "375px"
                        },
                        directive: "tasksage-chart-directive",
                        templateUrl: "views/dashboard/tasksage-chart.html",
                        "class": "d-widget tasks-age col-md-6 col-xs-12"

                    },
                     {
                        name: 'Tasks trend',
                        title: "Tasks trend",
                        style: {
                            /*width: '50%',*/
                            height: "375px"
                        },

                        directive: "taskstrend-chart-directive",
                        templateUrl: "views/dashboard/taskstrend-chart.html",

                        "class": "d-widget tasks-trend col-xs-12 col-md-6"

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
                        "class": "d-widget events-banner col-xs-12"

                    },

                    {
                        name: 'Cadre Membership (Followups)',
                        title: "Cadre Membership (Followups)",
                        style: {
                            width: '100%',
                            height: "460px"
                        },
                        enableVerticalResize: true,
                        directive: "cadre-followups-directive",
                        templateUrl: "views/dashboard/cadre-followups.html",

                        "class": "d-widget cadre-verifications-all col-xs-12"


                    },

                    {
                        name: 'Cadre Membership (Verifications)',
                        title: "Cadre Membership (Verifications)",
                        style: {
                            width: '100%',
                            "max-height": "432px"
                        },
                        enableVerticalResize: true,
                        directive: "cadre-verifications-directive",
                        templateUrl: "views/dashboard/cadre-verifications.html",
                        "class": "d-widget cadre-verifications-all col-xs-12"
                    },



                /*    {
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


                    },*/

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

                  /*  {
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
*/
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

                "MP" : [

                       {
                        name: 'Age wise Tasks',
                        title: "Age wise Tasks",
                        style: {
                            //width: '50%',
                            height: "320px"
                        },
                        directive: "tasksage-chart-directive",
                        templateUrl: "views/dashboard/tasksage-chart.html",
                        "class": "d-widget tasks-age col-xs-12 col-md-6"

                    },
                       {
                        name: 'Tasks trend',
                        title: "Tasks trend",
                        style: {
                            
                            height: "320px"
                        },

                        directive: "taskstrend-chart-directive",
                        templateUrl: "views/dashboard/taskstrend-chart.html",

                        "class": "d-widget tasks-trend col-md-6 col-xs-12"

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
                        name: 'Membership Trend Analysis',
                        title: "Membership Trend Analysis",
                        style: {
                            width: '66%',
                            height: "432px"

                        },
                        directive: "membership-trend-chart-directive",
                        templateUrl: "views/dashboard/membershiptrend-chart.html",
                        "class": "d-widget membership-trend"

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
                        name: 'My Tasks',
                        title: "My Tasks",
                        style: {
                            width: '100%',
                            height: "432px"
                        },
                        directive: "self-tasks-directive",
                        templateUrl: "views/dashboard/self-tasks.html",
                        "class": "d-widget team-tasks"

                    }


                ]

            }

        }
    ]);
});