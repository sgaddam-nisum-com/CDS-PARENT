 define(['directives/directiveModule','messageHandler'], function(directiveModule,messageHandler) {
     directiveModule.directive('slideBtnDirective', ["registerService", "appUrlService", "$timeout",
             function(registerService, appUrls, $timeout) {
                 return {
                     restrict: "A",
                     link: function(scope, elem, attrs) {
                        
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
         ]

     );


 });