$(document).ready(function(){

    jQuery(".content-sliders-gallery").royalSlider({
        keyboardNavEnabled: true,
        autoHeight: true,
        autoScaleSlider: false,
        arrowsNavAutoHide: false,
        arrowsNav: true,
        loop: true,
        controlNavigation: 'none',
        autoPlay: {
            enabled: false,
            pauseOnHover: false,
            stopAtAction: false,
            delay: 8000
        }
    });

     jQuery(".content-sliders-gallery-basel").royalSlider({
        keyboardNavEnabled: true,
        autoHeight: true,
        autoScaleSlider: false,
        arrowsNavAutoHide: false,
        arrowsNav: true,
        loop: true,
        controlNavigation: 'none',
        autoPlay: {
            enabled: false,
            pauseOnHover: false,
            stopAtAction: false,
            delay: 8000
        }
    });
});