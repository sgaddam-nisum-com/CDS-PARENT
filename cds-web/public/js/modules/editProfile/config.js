/*global define*/
 

define(['editprofile','uiRouter','angularRoute'], function (app) {


app.run(["$rootScope", "$sessionStorage","$state","$location","roleService","cdsService",function($rootScope, $sessionStorage,$state,$location,roleService,cdsService){

       
}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
 
    $urlRouterProvider
    .otherwise('/');
    

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

    .state('root.editprofile',{
        url: '',
        views: {           
            'content@': {
                templateUrl: 'views/auth/register/register.html',
                controller : "leftNavController as leftNavCtrl"                
            }
             
        },
        secured : true
    })

    
  
  .state('root.editprofile.personal', {
        url: '/personal',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/personal.html',
                controller : "personalController as personalCtrl"
            }
        },
        secured : true
    })
   .state('root.editprofile.work', {
        url: '/work',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/work.html',
                controller : "workController as workCtrl"
            }
        },
         secured : true
    })
   .state('root.editprofile.voter', {
        url: '/voter',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/voter.html',
                controller : "voterController as voterCtrl"
            }
        },
         secured : true
    })
   .state('root.editprofile.address', {
        url: '/address',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/address.html',
                controller : "addressController as addressCtrl"
            }
        },
         secured : true
    })
   .state('root.editprofile.volunteer', {
        url: '/volunteer',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/volunteer.html',
                controller : "volunteerController as volunteerCtrl"
            }
        },
         secured : true
    })
  .state('root.editprofile.family',{
    url:'/family',
    views:{
        'formSubsection':{
            templateUrl:'views/auth/register/subsection/family.html',
            controller: 'familyController as familyCtrl'
        }
    }
  })
  .state('root.editprofile.cadre',{
    url:'/cadre',
    views:{
        'formSubsection':{
            templateUrl:'views/auth/register/subsection/cadre.html',
            controller:'cadreController as cadreCtrl'
        }
    }
  })

});

});
