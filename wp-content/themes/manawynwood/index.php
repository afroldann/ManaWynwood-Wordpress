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
            <?php if ( have_posts() ) : ?>
                <?php 
                    query_posts( 'post_type=carrusel&posts_per_page=5' ); ?>
                <?php while ( have_posts() ) : the_post(); ?>
                <div class="large-12 columns rsContent">
                    <?php the_post_thumbnail('large', array( 'class' => "rsImg")); ?>
                    <div class="infoBlock top right rsABlock">
                        <h4><?php the_title(); ?></h4>
                        <p><?php echo get_the_excerpt(); ?></p>
                    </div>
                </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </section>

    <section class="main-content" id="center">
        <div class="row center-content">
            <div class="large-12 columns">
                <div class="large-3 new-content columns">
                    <a href="#"></a>
                    <img src="<?php bloginfo('template_url')?>/img/properties.jpg">
                    <h3>Properties</h3>
                    <p>In the Biscayne Corridor</p>
                    <span class="arrow-tine"></span>
                </div>
                <div class="large-3 new-content columns">
                    <a href="production.html"></a>
                    <img src="<?php bloginfo('template_url')?>/img/production2.jpg">
                    <h3>Production</h3>
                    <p>Cultivating Creative Venues</p>
                    <span class="arrow-tine"></span>
                </div>
                <div class="large-3 new-content columns">
                    <a href="events.html#art-basel"></a>
                    <img src="<?php bloginfo('template_url')?>/img/ABW.jpg">
                    <h3>ART BASEL WEEK</h3>
                    <p>At Manawynwood</p>
                    <span class="arrow-tine"></span>
                </div>
                <div class="large-3 new-content columns rs-default slide-events-home" id="slide-events-home">
                    <div class="rsContent left">
                        <a href="events.html"></a>
                        <img src="<?php bloginfo('template_url')?>/img/arti.jpg">
                        <h3>Events</h3>
                        <p>Art Installations</p>
                    </div>

                    <div class="rsContent left">
                        <a href="events.html"></a>
                        <img src="<?php bloginfo('template_url')?>/img/events2.jpg">
                        <h3>Events</h3>
                        <p>Live Music</p>
                    </div>
                    
                    <div class="rsContent left">
                        <a href="events.html"></a>
                        <img src="<?php bloginfo('template_url')?>/img/production.jpg">
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