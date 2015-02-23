<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="page" class="hfeed site">
		<div class="loader"></div>
	    <header>
	        <div class="contact-container" id="contact-container">
	            <a class="close" href="#">close</a>
	            <div class="container-ajax"></div>
	        </div>
	        <div class="row">
	            <div class="large-5 columns logo">
	                <a href="index.html">home</a>
	                <img class="left" src="img/svg/logo.svg">
	               <h1 class="left" >Mana<span>Wynwood</span></h1>
	            </div>
	            <h3>main menu</h3>
	            <span class="overlay-menu"></span>

	            <nav id="menu" class="nav-bar main-menu large-6 columns right">
	                <div class="large-12 columns social right">
	                    <ul class="large-4 columns right">
	                        <li><a class="twitter"   href="#"></a></li>
	                        <li><a class="facebook"  href="#"></a></li>
	                        <li><a class="instagram" href="#"></a></li>
	                        <li><a class="linkedin"  href="#"></a></li>
	                    </ul>
	                    <div class="suscribe large-4 columns right">
	                        <input type="text" placeholder="subscribe">
	                        <button>  </button>
	                    </div>
	                </div>

	                <a href="#" class="link button contact-button">Contact</a>
	                <a href="events.html" class="events link button">Events</a>
	                <a href="production.html" class="link button">Production</a>
	                <a href="gallery.html" class="link button">Gallery</a>
	                <a href="about-us.html" class="link button">About</a>
	                <a href="index.html" class="link button">Home</a>
	                <a href="#" class="close-menu">x</a>
	            </nav>
	    </header>




		<header id="masthead" class="site-header" role="banner">
			<a class="home-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
				<h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
				<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
			</a>

			<div id="navbar" class="navbar">
				<nav id="site-navigation" class="navigation main-navigation" role="navigation">
					<button class="menu-toggle"><?php _e( 'Menu', 'twentythirteen' ); ?></button>
					<a class="screen-reader-text skip-link" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentythirteen' ); ?>"><?php _e( 'Skip to content', 'twentythirteen' ); ?></a>
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
					<?php get_search_form(); ?>
				</nav><!-- #site-navigation -->
			</div><!-- #navbar -->
		</header><!-- #masthead -->

		<div id="main" class="site-main">
