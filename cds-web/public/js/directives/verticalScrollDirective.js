
'use strict';

define(['directives/directiveModule','../jquery.simplyscroll'], function (directiveModule,simplyscroll) {
	directiveModule.directive('verticalScroll', function(){	
		var age;
		return {	
			restrict: "A",
			scope:{
				verticalScroll :'=' 
			},		
			link: function(scope, elem, attrs) {
				/*		
				  $(elem).css({height:"250px", overflow : "hidden"});
				  function runNewsScroll(){
				  var startElement = $(elem).find(".row").eq(0);
				  var endElement = startElement.clone();
				  $(elem).append(endElement);
				  startElement.slideUp(1000,function(){
				  $(this).remove();
				  });
				  }

				  var scrollHandler = setInterval(runNewsScroll,2000);
				  $(elem).hover(function(){
				      clearInterval(scrollHandler);
				  },function(){
				      scrollHandler = setInterval(runNewsScroll,2000);
				  });

*/
				
	
		$(elem).simplyScroll({
			customClass: 'vert',
			orientation: 'vertical',
			auto: true,
			autoMode: 'loop',
			frameRate: 24,
			speed: 1     	
        })(jQuery);
				
			}
		}		
	});
	
});

