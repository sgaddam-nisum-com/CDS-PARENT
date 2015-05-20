/*global define*/
'use strict';


define(['appProfile','uiRouter','angularRoute'], function (app) {


  
app.run(["$rootScope", "$sessionStorage","$state","$location","roleService","cdsService",function($rootScope, $sessionStorage,$state,$location,roleService,cdsService){

       $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){           
                

       /*    var checkUserSession = cdsService.getUserSession();
           console.log(checkUserSession)            
            checkUserSession
            .success(function(resp){                                                                        
                         
                  if(resp.status == "success"){  
                   
                    cdsService.userAuthenticated = true;
                    cdsService.user = resp.data.user;
                    var userRole = "citizen";                    
                    var privilegeStateArray = roleService.getPrivilegeStateArray(cdsService.user.privileges);                  
                    var isValidModule = roleService.checkValidModule(toState.name,privilegeStateArray);
                                 
                if(toState.secured && !isValidModule || toState.name == "root.signin"){                                  
                     event.preventDefault();
                     $state.go("auth.dashboard");                      
                 }  
             }else{                
                if(toState.secured){
                    event.preventDefault();                                    
                     $state.go("root.signin");                    
                }              
             }  
            })*/
    
        });

}]);

app.config(function($stateProvider, $urlRouterProvider){
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

    .state('root.profile',{
        url: '/',
        views: {           
            'content@': {
                templateUrl: 'views/auth/profile.html',
                controller : "profileController as profileCtrl"                               
            }
        },
        secured : false
    })
    .state('root.profile.editprofile',{
        url: 'edit',
            
        views: {           
            'content@': {
                templateUrl: 'views/auth/register/register.html',
                controller : "leftNavController as leftNavCtrl"                
            }
             
        },
        secured : true
    }) 
  .state('root.profile.editprofile.personal', {
        url: '/personal',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/personal.html',
                controller : "personalController as personalCtrl"
            }
        },
        secured : true
    })
   .state('root.profile.editprofile.work', {
        url: '/work',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/work.html',
                controller : "workController as workCtrl"
            }
        },
         secured : true
    })
   .state('root.profile.editprofile.voter', {
        url: '/voter',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/voter.html',
                controller : "voterController as voterCtrl"
            }
        },
         secured : true
    })
   .state('root.profile.editprofile.address', {
        url: '/address',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/address.html',
                controller : "addressController as addressCtrl"
            }
        },
         secured : true
    })
   .state('root.profile.editprofile.volunteer', {
        url: '/volunteer',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/volunteer.html',
                controller : "volunteerController as volunteerCtrl"
            }
        },
         secured : true
    })
  .state('root.profile.editprofile.family',{
    url:'/family',
    views:{
        'formSubsection':{
            templateUrl:'views/auth/register/subsection/family.html',
            controller: 'familyController as familyCtrl'
        }
    }
  })
    .state('root.profile.editprofile.cadre',{
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
