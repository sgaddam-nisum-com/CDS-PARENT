
'use strict';

define(['controllers/controllerModule','jquery','slick'], function (controllerModule,$,slick) {


	 controllerModule.controller('homeController', [function(){		

	 	/*Main gallery settings */
	 	this.galleryCaroselConfig = {
	 		
	 	};

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


	 /*		$(document).ready(function(){
			  	var slider = $('#home-carousel').slick({
			      dots: true,
				  infinite: true,
				  speed: 500,
				  fade: true,
				  cssEase: 'linear',
				  autoplay:true,
				  autoplaySpeed : 1500,				 				 
			  	})
			  	.on("mouseout",function(){			  		
			  	 	slider.slick('slickPlay');			 
			  	}) ;

			  	$('#home-carousel img').css("width","100%");
			});*/
		


	}]);

});

