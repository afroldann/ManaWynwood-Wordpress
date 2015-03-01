<?php
/**
 * The template for displaying Category pages
 *
 * @package WordPress
 * @subpackage ManaWynwood
 * @since Manawynwood theme 1.0 */

get_header(); ?>

<section id="wynwood" class="row wynwood">
		<div class="large-6 container-image medium-6 columns">
			<img src="<?php echo of_get_option('mana_about_image') ?>">
		</div>
		<div class="large-6 medium-6 NoPaddingRight columns">
			<h2 class="large-12 columns">Mana<span>Wynwood</span></h2>
			<?php echo of_get_option('mana_about') ?>
		</div>
	</section>
	
	<section id="mana" class="row mana">
		<div class="large-6 medium-6 NoPaddingLeft columns">
			<h2 class="large-12 columns">MOISHE <span>MANA</span></h2>
			<?php echo of_get_option('moishe_about') ?>

		</div>
		<div class="large-6 container-image medium-6 columns">
			<img src="<?php echo of_get_option('moishe_about_image') ?>">

			<div class="large-3 columns title-plane">
	            <div class="large-12 columns video-plane">
	                <div class="gallery-container large-12 columns">
	                    <div class="gallery-link">
	                        <div class="container-image">
	                            <div class="overlay">
	                                <a href="<?php echo of_get_option('video_moishe_link') ?>" class="modal-video fancybox.iframe"></a>
	                            </div>
								<img src="<?php echo of_get_option('cover_image_video') ?>">
	                        </div>
	                        <a href="#" class="link-plus"></a>
	                    </div>
	                </div>
	            </div>
	        </div>

		</div>
	</section>
	
	<section id="mana-parthners" class="row parthenrs">
		<div class="large-12 columns">
			<?php echo of_get_option('mana_companies') ?>
		</div>
	</section>
	

	<section id="art-district" class="row art-district">
		<div class="large-6 container-image medium-6 columns">
			<img src="<?php echo of_get_option('mana_art_district_image') ?>">
		</div>
		<div class="large-6 NoPaddingRight medium-6 columns">
			<h2 class="large-12 columns">WYNWOOD <span>ART DISTRICT</span></h2>
			<?php echo of_get_option('mana_art_district') ?>
		</div>
	</section>

	<section id="team" class="row team">
		<h2 class="large-12 columns">Team</h2>
		<?php
            query_posts( array( 'post_type' => 'team', 'showposts' => -1 ) );
            if (have_posts() ) : while(have_posts()) : the_post();
            ?>

			<div class="worker large-4 columns">
				<div class="image-transition">
                	<!--<?php the_post_thumbnail('large', array( 'class' => "blackwhite")); ?>-->
					<?php if (class_exists('MultiPostThumbnails')) : MultiPostThumbnails::the_post_thumbnail(get_post_type(), 'secondary-image'); endif; ?>
				</div>
				<span><?php echo get_the_excerpt(); ?></span>
                <h4><?php the_title(); ?></h4>
				<?php the_content() ?>
			</div>
			
            <?php endwhile; endif;
            wp_reset_query();
        ?>
	</section>

<?php get_footer(); ?>