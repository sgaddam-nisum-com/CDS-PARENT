/*global define*/
 

define(['appHome'], function (app) {

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
 
/*    $urlRouterProvider
    .otherwise('/');*/
    

    /*****Non authenticated views*****/

    $stateProvider
    .state('root',{        
         abstract: true,
         url : "",
         views: {
            'header': {
                templateUrl: 'views/common/header.html',
                controller : "headerController as headerCtrl"
            },
            'footer': {
                templateUrl: 'views/common/footer.html'                
            }
        }
    })

    /*Page id : CDS1*/

    .state('root.home',{
        url: '',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/home.html',
                controller : "homeController as homeCtrl"                
            }
             
        },
        secured : false
    })
    .state('root.knowyourmp',{
        url: '/knowyourmp',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/knowyourmp.html'
            }
        },
        secured : false
    })
        .state('root.parliament',{
        url: '/parliament',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/parliament.html'
            }
        },
        secured : false
    })
        .state('root.aboutconstituency',{
        url: '/aboutconstituency',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/aboutconstituency.html'
            }
        },
        secured : false
    })
        .state('root.vision',{
        url: '/mission-vision',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/mission-vision.html'
            }
        },
        secured : false
    })
        .state('root.initiatives',{
        url: '/initiatives',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/initiatives.html'
            }
        },
        secured : false
    })
        .state('root.gallery',{
        url:'/gallery',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/gallery.html'
            }
        },
        secured : false
    })
        .state('root.contactus',{
        url: '/contactus',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/contactus.html'
            }
        },
        secured : false
    })

});

});
