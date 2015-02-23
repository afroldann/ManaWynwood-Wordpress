var oneMore = 0;
var hammerApp = {};
var url;
var getUrl;
var tiempo;
var heightHeader = $('header').height() + $('.navigation').height();
var heightDetails = $('#details').height();
var heightDescription = $('#description').height();
var heightHighlights = $('#highlights').height();
var windowWidth = $(window).width();
var windowHeight = $(window).height();
var antes = (new Date()).getTime();
var htmlContainer = $('html, body');

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i); }, BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i); },iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i); }, Windows: function() {
        return navigator.userAgent.match(/IEMobile/i); }, any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); 
    }
}
var navegador = navigator.userAgent;

$(document).foundation();

function menuProduction(){
	var village = $( "#production-village" ).offset();
	var basel = $( "#art-basel" ).offset();
	var cola = $( "#rc-cola" ).offset();
	var walk = $( "#art-walk" ).offset();

	jQuery('#production-village-btn').on('click', function(){
		jQuery(htmlContainer).animate({scrollTop:village.top}, 1000);
	});	

	jQuery('#art-basel-btn').on('click', function(){
		$("html, body").animate({ scrollTop: $('#art-basel').offset().top - 200 }, 1000);
	});

	jQuery('#rc-cola-btn').on('click', function(){
		jQuery(htmlContainer).animate({scrollTop:cola.top + 365 }, 1000);
	});

	jQuery('#art-walk-btn').on('click', function(){
		jQuery(htmlContainer).animate({scrollTop:walk.top}, 1000);
	});
}

jQuery(document).ready(function($){
	menuProduction();

	jQuery('.plan-detail').zoom();

	jQuery(".modal-village").attr('rel', 'gallery-village').fancybox({
		arrows: true,
		nextClick: true
	});
	
	jQuery(".modal-basel").attr('rel', 'gallery-basel').fancybox({
		arrows: true,
		nextClick: true
	});	

	jQuery(".modal-walk").attr('rel', 'gallery-basel').fancybox({
		arrows: true,
		nextClick: true
	});	

	jQuery(".cola-walk").attr('rel', 'gallery-basel').fancybox({
		arrows: true,
		nextClick: true
	});
	
	jQuery(".modal-video").attr('rel', 'gallery-video').fancybox({
		openEffect  : 'fade',
		closeEffect : 'fade',
		arrows: false
	});

	if (navigator.userAgent.indexOf('MSIE') !=-1) {
		jQuery('body').addClass('explorer');		
	}
	
	function openItem(){
		jQuery(this).toggleClass('open');
		return false;
	}

	jQuery(".desc").on('click', openItem );
	
	jQuery("#gallery-slider,#gallery-slider a.link-plus").on('click', function(){
		setTimeout(function(){
	  		jQuery( "header" ).removeClass( "scrolled" );
			jQuery("#gallery").addClass("openGallery");
			jQuery('html').css('overflow', 'hidden');
		});
		return false;
	});	

	jQuery("#gallery-basel, #gallery-basel .link-plus").on('click', function(){
		setTimeout(function(){
			jQuery("#gallery-basel-container").addClass("openGallery");
			jQuery('html').css('overflow', 'hidden');
	  		jQuery( "header" ).removeClass( "scrolled" );
		});
		return false;
	});		

	jQuery("#gallery-rc,#gallery-rc .link-plus").on('click', function(){
		setTimeout(function(){
			jQuery("#gallery-rc-container").addClass("openGallery");
			jQuery('html').css('overflow', 'hidden');
	  		jQuery( "header" ).removeClass( "scrolled" );
		});
		return false;
	});		

	jQuery(".open-walk-gallery, .open-walk-gallery .link-plus").on('click', function(){
		setTimeout(function(){
			jQuery("#gallery-walk-container").addClass("openGallery");
			jQuery('html').css('overflow', 'hidden');
	  		jQuery( "header" ).removeClass( "scrolled" );
		});
		return false;
	});	

	jQuery(".open-villale-events").on('click', function(){
		setTimeout(function(){
			jQuery("#village-events").addClass("openEvents");
			jQuery('html').css('overflow', 'hidden');
	  		jQuery( "header" ).removeClass( "scrolled" );
		});
		return false;
	});		

	jQuery(".open-basel-events").on('click', function(){
		setTimeout(function(){
			jQuery("#basel-events").addClass("openEvents");
			jQuery('html').css('overflow', 'hidden');
	  		jQuery( "header" ).removeClass( "scrolled" );
		});
		return false;
	});		

	jQuery(".container-lots a").on('click', function(){
		setTimeout(function(){
			jQuery("#walk-plants").addClass("openEvents");
			jQuery('html').css('overflow', 'hidden');
	  		jQuery( "header" ).removeClass( "scrolled" );
		});
		return false;
	});	

	jQuery(".open-cola-events").on('click', function(){
		setTimeout(function(){
			jQuery("#cola-events").addClass("openEvents");
			jQuery('html').css('overflow', 'hidden');
	  		jQuery( "header" ).removeClass( "scrolled" );
		});
		return false;
	});	

	jQuery(".open-walk-events").on('click', function(){
		setTimeout(function(){
			jQuery("#walk-events").addClass("openEvents");
			jQuery('html').css('overflow', 'hidden');
	  		jQuery( "header" ).removeClass( "scrolled" );
		});
		return false;
	});	

	jQuery(window).scroll(function() {
	   if(jQuery(window).scrollTop() == 0) {
	  		jQuery( "header" ).removeClass( "scrolled" );
	   }else {
	  		jQuery( "header" ).addClass( "scrolled" );
	   }
	});

	var sliderEvents = jQuery(".slider-events-production").royalSlider({
        keyboardNavEnabled: true,
        autoHeight: true,
        autoScaleSlider: true,
        arrowsNavAutoHide: false,
        arrowsNav: true,
        loop: false,
        transitionType: 'fade',
        autoPlay: {
    		enabled: false,
    		pauseOnHover: false,
    		stopAtAction: false,
    		delay: 8000
    	}

    }).data('royalSlider');

    jQuery('.three').on('click', function(){
    	sliderEvents.goTo(2);
    });    

    jQuery('.two').on('click', function(){
    	sliderEvents.goTo(1);
    });
	
	jQuery('.one').on('click', function(){
    	sliderEvents.goTo(0);
    });

	var sliderPlants = jQuery(".slider-plants-production").royalSlider({
        keyboardNavEnabled: true,
        autoHeight: true,
        autoScaleSlider: true,
        arrowsNavAutoHide: false,
        arrowsNav: true,
        loop: false,
        autoPlay: {
    		enabled: true,
    		pauseOnHover: false,
    		stopAtAction: false,
    		delay: 8000
    	}

    }).data('royalSlider');

    jQuery('.three').on('click', function(){
    	sliderPlants.goTo(2);
    });    

    jQuery('.two').on('click', function(){
    	sliderPlants.goTo(1);
    });
	
	jQuery('.one').on('click', function(){
    	sliderPlants.goTo(0);
    });


	jQuery(".close-g").on('click', function(){
		setTimeout(function(){
			jQuery("#village-events,#basel-events,#cola-events,#walk-events,#walk-plants").removeClass("openEvents");
			jQuery("#gallery-basel-container,#gallery-rc-container,#gallery,#gallery-walk-container").removeClass("openGallery");
			jQuery(".container-video").removeClass("openVideo");
			jQuery('html').css('overflow', 'auto');
  			jQuery( "header" ).addClass( "scrolled" );

			if(jQuery(window).scrollTop() == 0) {
	  			jQuery( "header" ).removeClass( "scrolled" );
			}

		},200);
		return false;
	});

	jQuery(document).keyup(function(e) {
	  	if (e.keyCode == 27) {
			jQuery('.contact-container').slideUp();
			jQuery(htmlContainer).css('overflow', '');
			jQuery('.contact-button').removeClass('active');
			closeMenu();
	  	}
	});
	
	function scrollStop(){
		if(jQuery('body').hasClass('production')){
	        jQuery('html,body').css('overflow','hidden!important');
	        jQuery("img").lazyload({
			    effect : "fadeIn"
			});

		}else {

		}
	}
	scrollStop();

	function openMenu(){
		jQuery('.nav-bar, .overlay-menu').addClass('active');
		jQuery('.contact-container').slideUp();
		jQuery('html, body').css('overflow','hidden');
		return false;
	}

	function closeMenu(){
		jQuery('.nav-bar, .overlay-menu').removeClass('active');
		jQuery('html, body').css('overflow','');
		return false;
	}

	jQuery("#navigation a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
		highlightSelector:"#navigation a"
	});

	jQuery('nav.main-menu a').click(function(){
	    jQuery('nav.main-menu a').removeClass("active");
	    jQuery(this).addClass("active");
	    return false;
	});

	jQuery('.close').on('click', function(){
		jQuery('.contact-container').slideUp();
		jQuery('header').css('z-index', '100');
		jQuery(htmlContainer).css('overflow', 'visible');
		jQuery('.contact-button').removeClass('active');
	    return false;

	});
	
	jQuery('form').jqTransform();

	jQuery('.submit-button').on('click', function(){
			setTimeout(function(){
				jQuery(htmlContainer).animate({scrollTop:460}, '600', 'swing', function() { 
					//your stuff		
				});
			},500);
		return false;
	});

	jQuery('.navigation-property-detail a').on('click', function(){
		jQuery('.navigation-property-detail a').removeClass('active');
		jQuery(this).addClass('active');
		closeShare();
		return false;
	});

	jQuery('a.share').on('click', function(){
		openShare();
		return false;
	});

 	jQuery('.contact-button').on('click', function(){
		jQuery('.contact-button').addClass('active');
		jQuery('.nav-bar, .overlay-menu').removeClass('active');
		jQuery(htmlContainer).animate({scrollTop:0}, 'linear', function() { 
			setTimeout(function(){
				jQuery('#contact-container').slideDown(function(){
				jQuery(htmlContainer).css('overflow', 'hidden');
				jQuery('header').css('z-index', '9999');

			 	jQuery.ajax({
					url:"contact.html", success:function(result){
							jQuery('.container-ajax').html(result);
			    		}
			    	});
		    	});

			},200);
		});
		return false;
	});
	
 	function closeShare(){
 		jQuery('.share-container').fadeOut();
 	}

 	function openShare(){
 		jQuery('.share-container').fadeIn();
 	}

    function gotoUrl(){
		jQuery('.loader').fadeIn( tiempo + 800, function(){
        	getUrl = window.location = url;
      	});
    }

    function TiempoCarga(){
      	var despues = (new Date()).getTime();
      	tiempo = (antes-despues) / 1000;
    }
    
	jQuery('.link').on ('click', function(){
    	if(jQuery(this).attr('href') !== '#') {
	      	url = jQuery(this).attr('href');
	      	setTimeout(function(){
	        	gotoUrl();
	      	}, tiempo);
	      	return false;
    	}else {
	      	return false;
    	}
    });
	    
    setTimeout(function(){
		jQuery('.loader').fadeOut(TiempoCarga);
	}, tiempo);

	jQuery('.overlay-menu, .close-menu').on('click', function(){
		closeMenu();
		return false;
	});

	jQuery('header h3').on('click', function(){
		openMenu();
		return false;
	});
	
	jQuery('#sliderDetailProperty').royalSlider({
	    fullscreen: {
	      enabled: true,
	      nativeFS: true
	    },
	    controlNavigation: 'thumbnails',
	    autoScaleSlider: true, 
	    autoScaleSliderWidth: 960,     
	    autoScaleSliderHeight: 670,
	    loop: true,
	    imageScaleMode: 'fill',
	    navigateByClick: true,
	    numImagesToPreload: 2,
	    imageScalePadding: 0,
	    arrowsNav: true,
	    arrowsNavAutoHide: true,
	    arrowsNavHideOnTouch: true,
	    keyboardNavEnabled: true,
	    fadeinLoadedSlide: true,
	    globalCaption: false,
	    globalCaptionInside: false,
	    
	    thumbs: {
			appendSpan: false,
			firstMargin: false,
			paddingBottom: 0
	    }
  	});

	jQuery('#slide-events-home').royalSlider({
		arrowsNav:true,
	    loop:true,
	    keyboardNavEnabled:false,
	    controlsInside:true,
	    arrowsNavAutoHide:false,
	    imageScaleMode:'fill',
	    autoScaleSlider:false,
	    controlNavigation:'bullets',
	    thumbsFitInViewport:true,
	    navigateByClick:true,
	    startSlideId:0,
	    autoPlay:true,
	    transitionType:'move',
	    globalCaption:false,
	    slidesSpacing: 0
	});
	
	if(windowWidth <= 680 ) {

		jQuery('#details').scrollAnimate({
			startScroll: 10,
			endScroll: 10,
			cssProperty: 'padding',
			before: '10px 0px 10px 0px',
			after: '10px 0px 0 0px'
		});

		jQuery('#highlights').scrollAnimate({
			startScroll: heightDetails + heightDescription,
			endScroll: heightDetails + heightDescription,
			cssProperty: 'padding',
			before: '10px 0px 10px 0px',
			after: '10px 0px 0 0px'
		});

		jQuery('#description').scrollAnimate({
			startScroll: heightHighlights + heightDetails + heightDescription,
			endScroll: heightHighlights + heightDetails + heightDescription,
			cssProperty: 'padding',
			before: '10px 0px 10px 0px',
			after: '10px 0px 0 0px'
		});

		jQuery('header').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'height',
			before: 87,
			after: 87
		});

		jQuery('.logo img').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'width',
			before: 60,
			after: 60
		});

		jQuery('.logo h1').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'font-size',
			before: '1.2rem',
			after: '1.2rem'
		}).scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'padding',
			before: '0 0 0 10px',
			after: '0 0 0 10px'
		}).scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'top',
			before: 22,
			after: 22
		});
		jQuery('body').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'margin-top',
			before: 90,
			after: 90
		});

	}else if(windowWidth <= 768 ) {

		jQuery('.logo img').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'width',
			before: 60,
			after: 60
		});

		jQuery('.logo h1').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'font-size',
			before: '1.2rem',
			after: '1.2rem'
		}).scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'padding',
			before: '0 0 0 10px',
			after: '0 0 0 10px'
		}).scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'top',
			before: 22,
			after: 22
		});

		jQuery('body').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'margin-top',
			before: 90,
			after: 90
		});

		jQuery('.navigation').scrollAnimate({
			startScroll: 500,
			endScroll: 500,
			cssProperty: 'position',
			before: 'absolute',
			after: 'fixed'
		}).scrollAnimate({
			startScroll: heightHighlights + heightDetails + heightDescription + 750,
			endScroll: heightHighlights + heightDetails + heightDescription + 750,
			cssProperty: 'opacity',
			before: 1,
			after: 0
		}).scrollAnimate({
			startScroll: 500,
			endScroll: 500,
			cssProperty: 'top',
			before: 0,
			after: 87
		});

		jQuery('#details').scrollAnimate({
			startScroll: 570,
			endScroll: 570,
			cssProperty: 'padding',
			before: '50px 0px 10px 0px',
			after: '130px 0px 0 0px'
		});

		jQuery('#highlights').scrollAnimate({
			startScroll: heightDetails + heightDescription,
			endScroll: heightDetails + heightDescription,
			cssProperty: 'padding',
			before: '10px 0px 10px 0px',
			after: '140px 0px 0 0px'
		});

		jQuery('#description').scrollAnimate({
			startScroll: heightHighlights + heightDetails + heightDescription,
			endScroll: heightHighlights + heightDetails + heightDescription,
			cssProperty: 'padding',
			before: '10px 0px 10px 0px',
			after: '130px 0px 0 0px'
		});

		jQuery('.download-brochure-container').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'position',
			before: 'relative',
			after: 'relative'
		});
		
		jQuery('.scrolling-detail').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'position',
			before: 'relative',
			after: 'relative'
		});


	}else {

		jQuery('body').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'margin-top',
			before: 173,
			after: 160
		});

		jQuery('body.production').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'margin-top',
			before: 225,
			after: 160
		});

		jQuery('.backToTop').scrollAnimate({
			startScroll: heightHighlights,
			endScroll: heightHighlights + heightDetails + heightDescription,
			cssProperty: 'opacity',
			before: 0,
			after: 1
		});

		jQuery('.download-brochure-container').scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'top',
			before: 0,
			after: 250
		}).scrollAnimate({
			startScroll: heightHighlights + heightDetails + heightDescription + 350,
			endScroll: heightHighlights + heightDetails + heightDescription + 350,
			cssProperty: 'opacity',
			before: 1,
			after: 0
		}).scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'position',
			before: 'relative',
			after: 'fixed'
		});

		jQuery('.navigation').scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'position',
			before: 'absolute',
			after: 'fixed'
		}).scrollAnimate({
			startScroll: heightHighlights + heightDetails + heightDescription + 900,
			endScroll: heightHighlights + heightDetails + heightDescription + 900,
			cssProperty: 'opacity',
			before: 1,
			after: 0
		}).scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'top',
			before: 0,
			after: 87
		});
		
		jQuery('#details').scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'padding',
			before: '50px 0px 10px 0px',
			after: '130px 0px 0 0px'
		});

		jQuery('#highlights').scrollAnimate({
			startScroll: heightDetails + heightDescription,
			endScroll: heightDetails + heightDescription,
			cssProperty: 'padding',
			before: '10px 0px 10px 0px',
			after: '140px 0px 0 0px'
		});

		jQuery('#description').scrollAnimate({
			startScroll: heightHighlights + heightDetails + heightDescription,
			endScroll: heightHighlights + heightDetails + heightDescription,
			cssProperty: 'padding',
			before: '10px 0px 10px 0px',
			after: '130px 0px 0 0px'
		});
		
		jQuery('.scrolling-detail').scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'position',
			before: 'relative',
			after: 'fixed'
		}).scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'top',
			before: '',
			after: 87
		}).scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'padding-top',
			before: 0,
			after: 10
		}).scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'border-top',
			before: 'none',
			after: 'solid'
		}).scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'border-width',
			before: '',
			after: 1
		}).scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'border-color',
			before: '',
			after: '#F2F2F2'
		}).scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'width',
			before: '90%',
			after: 325
		}).scrollAnimate({
			startScroll: heightHighlights + heightDetails + heightDescription + 600,
			endScroll: heightHighlights + heightDetails + heightDescription + 600,
			cssProperty: 'opacity',
			before: 1,
			after: 0
		}).scrollAnimate({
			startScroll: 620,
			endScroll: 620,
			cssProperty: 'margin-left',
			before: '10%',
			after: 10
		});

		jQuery('.logo h1').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'font-size',
			before: '1.8rem',
			after: '1.2rem'
		}).scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'padding',
			before: '0 0 0 20px',
			after: '0 0 0 10px'
		}).scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'top',
			before: 95,
			after: 40
		});	

	}
	
	if(isMobile.any()){
		jQuery(window).load(function(){
			FastClick.attach(document.body);
			var element = document.getElementById('menu');
		    var hammertime = Hammer(element).on("dragright", function(event) {
	    		closeMenu();
		    });

		});
	}

});

