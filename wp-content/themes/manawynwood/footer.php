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
                    <p>@2014 MANAWYNWOOD. All rights reserved.</p>
                </div>
                <div class="about-f large-3 columns">
                    <h2>ABOUT US</h2>
                    <ul>
                        <li><a class="link" href="about-us.html#wynwood">MANAWYNWOOD</a></li>
                        <li><a class="link" href="production.html#production-village">PRODUCTION VILLAGE</a></li>
                        <li><a class="link" href="#">PROPERTIES</a></li>
                        <li><a href="#" data-reveal-id="map">MAP</a></li>
                        <li><a class="link" href="about-us.html#team">TEAM</a></li>
                        <li><a href="#" class="contact-button link">CONTACT US</a></li>
                    </ul>
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
                        <li><a class="twitter link"   href="#"></a></li>
                        <li><a class="facebook link"  href="#"></a></li>
                        <li><a class="instagram link" href="#"></a></li>
                        <li><a class="vimeo link"  href="#"></a></li>
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