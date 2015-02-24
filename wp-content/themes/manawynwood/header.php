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
		<!--<div class="loader"></div>-->
	    <header>
	        <div class="contact-container" id="contact-container">
	            <a class="close" href="#">close</a>
	            <div class="container-ajax"></div>
	        </div>
	        <div class="row">
	            <div class="large-5 columns logo">
	                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">home</a>
	                <img class="left" src="<?php bloginfo('template_url')?>/img/svg/logo.svg">
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
	                        <li><a class="vimeo"  href="#"></a></li>
	                    </ul>
	                    <div class="suscribe large-4 columns right">
	                        <input type="text" placeholder="subscribe">
	                        <button>  </button>
	                    </div>
	                </div>
	                <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
	                <a href="#" class="close-menu">x</a>
	            </nav>
	    </header>
