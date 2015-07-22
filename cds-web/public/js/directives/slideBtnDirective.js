 define(['directives/directiveModule', 'messageHandler'], function(directiveModule, messageHandler) {
     directiveModule.directive('slideBtnDirective', ["registerService", "appUrlService", "$timeout", "cdsService", "$sessionStorage",
             function(registerService, appUrls, $timeout, cdsService, $sessionStorage) {
                 return {
                     restrict: "A",
                     link: function(scope, elem, attrs) {

                         cdsSession = $sessionStorage.cds = $sessionStorage.cds || {};

                         if(cdsService.userInfo){
                            bindHover();
                         }

                         scope.$on("userAuthenticated", bindHover);

                         function bindHover() {
                          
                          if(cdsSession.currentUserId !== cdsService.userInfo.appUserId && cdsSession.currentUserId){
                               return;
                            }   

                             $(elem).find("#profileImg,#updateBtn").hover(function() {
                                 scope.$apply(function() {
                                     scope.showUpdateBtn = true;
                                 });

                             }, function() {
                                 scope.$apply(function() {
                                     scope.showUpdateBtn = false;
                                 });
                             });



                         }




                     }
                 }
             }
         ]

     );


 });