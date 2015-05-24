
 

define(['directives/directiveModule','accordion'], function (directiveModule) {
	directiveModule.directive('accordion', ["cdsService",function(cdsService){			
		return {	
			restrict: "A",				
			link: function(scope, elem, attrs) {					
				$(elem).accordion({});				
			}
		}		
	}]);
	
});

