jQuery(document).ready(function($){	
	var sliderJQ = jQuery('#mana-slider').royalSlider({
	    arrowsNav: true,
	    loop: true,
	    keyboardNavEnabled:true,
	    controlsInside:false,
	    imageScaleMode:'fill',
	    arrowsNavAutoHide:false,
	    autoScaleSlider:true, 
	    autoScaleSliderWidth:960,     
	    autoScaleSliderHeight:400,
	    controlNavigation:'none',
	    thumbsFitInViewport:false,
	    navigateByClick:true,
	    startSlideId:0,
	    autoPlay: {
    		enabled: true,
    		pauseOnHover: false,
    		delay: 8000
    	},
	    transitionType: 'move',
	    globalCaption: false,
	    slidesSpacing: 0,
	    
	    block: {
    		fadeEffect: true,
    		moveEffect: 'bottom',
    		moveOffset: 50,
    		speed: 300
    	},

	    deeplinking: {
	      	enabled:true,
	      	change:false
	    },

	    imgWidth:1400  	
	});

	var sliderInstance = sliderJQ.data('royalSlider');
	var logo = $('.logo img');
	
    sliderInstance.ev.on('rsAfterSlideChange', function(event) {
		currSliderNum = sliderInstance.currSlideId; 
		if(currSliderNum === 0 ){
			$(logo).fadeOut(550, function(){
				$(this).attr('src','img/svg/logo.svg').fadeIn(550);
			});
			$('.logo h1').show();
		}
		if(currSliderNum === 1 ){
			$(logo).fadeOut(550, function(){
				$(this).attr('src','img/svg/logo-properties.svg').fadeIn(550);
			});
			$('.logo h1').hide();
		}
		if(currSliderNum === 2 ){
			$(logo).fadeOut(550, function(){
				$(this).attr('src','img/svg/logo.svg').fadeIn(550);
			});
			$('.logo h1').hide();
		}
		if(currSliderNum === 3 ){
			$(logo).fadeOut(550, function(){
				$(this).attr('src','img/svg/logo.svg').fadeIn(550);
			});
			$('.logo h1').hide();
		}		
		if(currSliderNum === 4 ){
			$(logo).fadeOut(550, function(){
				$(this).attr('src','img/svg/logo.svg').fadeIn(550);
			});
			$('.logo h1').hide();
		}
		
	});
});