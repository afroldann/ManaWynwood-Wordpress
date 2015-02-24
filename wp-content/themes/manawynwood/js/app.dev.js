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
jQuery(document).ready(function($){
	jQuery(document).keyup(function(e) {
	  	if (e.keyCode == 27) {
			jQuery('.contact-container').slideUp();
			jQuery(htmlContainer).css('overflow', '');
			jQuery('.contact-button').removeClass('active');
			closeMenu();
	  	}
	});
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
	});

	jQuery('.close').on('click', function(){
		jQuery('.contact-container').slideUp();
		jQuery(htmlContainer).css('overflow', 'visible');
		jQuery('.contact-button').removeClass('active');

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
 		jQuery('.share-container').slideUp();
 	}

 	function openShare(){
 		jQuery('.share-container').slideDown();
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
		jQuery('.loader').fadeOut('slow');
    	TiempoCarga();
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
	    autoScaleSlider: false, 
	    autoScaleSliderWidth: 960,     
	    autoScaleSliderHeight: 850,
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

		jQuery('header').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'height',
			before: 153,
			after: 87
		});

		jQuery('body').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'margin-top',
			before: 153,
			after: 160
		});

		jQuery('.social').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'margin-bottom',
			before: 75,
			after: 10
		});
		
		jQuery('.backToTop').scrollAnimate({
			startScroll: heightHighlights,
			endScroll: heightHighlights + heightDetails + heightDescription,
			cssProperty: 'opacity',
			before: 0,
			after: 1
		});

		jQuery('.download-brochure-container').scrollAnimate({
			startScroll: 550,
			endScroll: 550,
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
			startScroll: 550,
			endScroll: 550,
			cssProperty: 'position',
			before: 'relative',
			after: 'fixed'
		});

		jQuery('.navigation').scrollAnimate({
			startScroll: 550,
			endScroll: 550,
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
			startScroll: 550,
			endScroll: 550,
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
		
		jQuery('.scrolling-detail').scrollAnimate({
			startScroll: 550,
			endScroll: 550,
			cssProperty: 'position',
			before: 'relative',
			after: 'fixed'
		}).scrollAnimate({
			startScroll: 550,
			endScroll: 550,
			cssProperty: 'top',
			before: '',
			after: 87
		}).scrollAnimate({
			startScroll: 550,
			endScroll: 550,
			cssProperty: 'padding-top',
			before: 0,
			after: 10
		}).scrollAnimate({
			startScroll: 550,
			endScroll: 550,
			cssProperty: 'border-top',
			before: 'none',
			after: 'solid'
		}).scrollAnimate({
			startScroll: 550,
			endScroll: 550,
			cssProperty: 'border-width',
			before: '',
			after: 1
		}).scrollAnimate({
			startScroll: 550,
			endScroll: 550,
			cssProperty: 'border-color',
			before: '',
			after: '#F2F2F2'
		}).scrollAnimate({
			startScroll: 550,
			endScroll: 550,
			cssProperty: 'width',
			before: '100%',
			after: 325
		}).scrollAnimate({
			startScroll: heightHighlights + heightDetails + heightDescription + 600,
			endScroll: heightHighlights + heightDetails + heightDescription + 600,
			cssProperty: 'opacity',
			before: 1,
			after: 0
		});

		jQuery('.logo img').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'width',
			before: 123,
			after: 60
		});

		jQuery('.logo h1').scrollAnimate({
			startScroll: 1,
			endScroll: 1,
			cssProperty: 'font-size',
			before: '1.6rem',
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
			before: 71,
			after: 22
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

