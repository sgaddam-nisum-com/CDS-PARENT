
 

define(['controllers/controllerModule','jquery'], function (controllerModule,$) {


	 controllerModule.controller('homeController', [function(){		

	 	 	/*Activity gallery settings*/
	 	this.activitiesCarouselconfig = {
	 			  dots: false,
			      infinite: true,
			      speed: 0,
			      fade: true,
			      cssEase: 'ease',
			      autoplay:false,
			      arrows:true,
			      mouseOutStop : false,
			      customNav : true,
			      prevBtnSelector : "#prevAct",
			      nextBtnSelector : "#nextAct"
	 	};
	}]);

});

