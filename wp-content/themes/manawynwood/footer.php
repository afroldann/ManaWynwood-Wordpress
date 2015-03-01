<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

    <footer>
        <div class="row">
            <div class="large-12 columns">
                <div class="rights-f large-3 columns">
                    <p>@2014 MANAWYNWOOD.</p>
                </div>
                <div class="about-f large-3 columns">
                    <h2>ABOUT US</h2>
                    <?php wp_nav_menu( 'footer_menu' ); ?>
                </div>
                <div class="touch-f large-3 columns">
                    <h2>GET IN TOUCH</h2>
                    <div class="suscribe large-4 columns right">
                        <input type="text" placeholder="subscribe">
                        <button>  </button>
                    </div>
                    <p><a href="mailto:info@manawynwood.com">info@manawynwood.com</a></p>
                    <p><a href="tel:305-573-0371"><b>305-573-0371</b></a></p>
                    <p class="addres">318 NW 23RD ST <br> MIAMI, FL 33127</p>

                </div>
                <div class="social-f large-3 columns">
                    <h2>SOCIAL</h2>
                    <ul class="large-4 columns left">
                        <li><a class="twitter" target="_blank"  href="<?php echo of_get_option('twitter_link') ?>"></a></li>
                        <li><a class="facebook"  target="_blank"  href="<?php echo of_get_option('facebook_link') ?>"></a></li>
                        <li><a class="instagram" target="_blank"  href="<?php echo of_get_option('instagram_link') ?>"></a></li>
                        <li><a class="vimeo" target="_blank"  href="<?php echo of_get_option('vimeo_link') ?>"></a></li>
                    </ul>
                    <h2>LEGAL</h2>
                    <p><a href="img/Privacy-Policy-Temp.pdf" target="_blank">Privacy Policy</a></p>
                    <p><a href="img/Terms-of-Use.pdf" target="_blank">Terms of Use</a></p>
                </div>
            </div>
        </div>
        <div id="map" class="reveal-modal" data-reveal>
            <img src="img/map.jpg">
            <a class="close-reveal-modal">&#215;</a>
        </div>
    </footer>

	<?php wp_footer(); ?>
</body>
</html>