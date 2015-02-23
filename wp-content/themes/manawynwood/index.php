<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one of the
 * two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>

<section class="main-slider">
        <div id="mana-slider" class="royalSlider heroSlider rsMinW">

            <div class="large-12 columns rsContent">
                <img class="rsImg" src="img/mana-collage.jpg" alt="">
                
            </div>

            <div class="rsContent">
                <img class="rsImg" src="img/carrusel/mana-future.jpg" alt="">
                <div class="infoBlock top right rsABlock">
                    <a href="#"></a>
                    <h4>Mana Properties</h4>
                    <p>With Clusters of properties located in the Biscayne Corridor our vision is to cultivate projects that complement their locations.</p>
                </div>
                <div class="layout_black"></div>
            </div>

             <div class="rsContent">
                <img class="rsImg" src="img/carrusel/coll-03.jpg" alt="">
                <div class="infoBlock top right rsABlock">
                    <a href="production.html#production-village"></a>
                    <h4>Production Village</h4>
                    <p>Nurturing Miami's cultural scene through quality productions & events.</p>
                </div>
                <div class="layout_black"></div>
            </div>

            <div class="rsContent">
                <img class="rsImg" src="img/carrusel/home_4.jpg" alt="">
                <div class="infoBlock top right rsABlock">
                    <a href="events.html#art-basel"></a>
                    <h4>Art Basel</h4>
                    <p>Hosting some of Wynwood's top Art Basel events.</p>
                </div>
                <div class="layout_black"></div>
            </div>

            <div class="rsContent">
                <img class="rsImg" src="img/carrusel/home_5.JPG" alt="">
                <div class="infoBlock right top rsABlock">
                    <a href="events.html"></a>
                    <h4>Open Air Murals</h4>
                    <p>With over 30 Acres in Wynwood, we have an impressive collection of Murals covering the outside wall of our properties.</p>
                </div>
                <div class="layout_black"></div>
            </div>

        </div>
    </section>

    <section class="main-content" id="center">
        <div class="row center-content">
            <div class="large-12 columns">
                <div class="large-3 new-content columns">
                    <a href="#"></a>
                    <img src="img/properties.jpg">
                    <h3>Properties</h3>
                    <p>In the Biscayne Corridor</p>
                    <span class="arrow-tine"></span>
                </div>
                <div class="large-3 new-content columns">
                    <a href="production.html"></a>
                    <img src="img/production2.jpg">
                    <h3>Production</h3>
                    <p>Cultivating Creative Venues</p>
                    <span class="arrow-tine"></span>
                </div>
                <div class="large-3 new-content columns">
                    <a href="events.html#art-basel"></a>
                    <img src="img/ABW.jpg">
                    <h3>ART BASEL WEEK</h3>
                    <p>At Manawynwood</p>
                    <span class="arrow-tine"></span>
                </div>
                <div class="large-3 new-content columns rs-default slide-events-home" id="slide-events-home">
                    <div class="rsContent left">
                        <a href="events.html"></a>
                        <img src="img/arti.jpg">
                        <h3>Events</h3>
                        <p>Art Installations</p>
                    </div>

                    <div class="rsContent left">
                        <a href="events.html"></a>
                        <img src="img/events2.jpg">
                        <h3>Events</h3>
                        <p>Live Music</p>
                    </div>
                    
                    <div class="rsContent left">
                        <a href="events.html"></a>
                        <img src="img/production.jpg">
                        <h3>Events</h3>
                        <p>Open Air Murals</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="banner-home">
        <div class="row">
            <div class="large-12 columns">
                <a href="events.html#art-walk">
                <img src="img/banner.jpg">
                </a>
            </div>
        </div>
    </section>
<?php get_footer(); ?>