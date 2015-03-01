<?php
/**
 * A unique identifier is defined to store the options in the database and reference them from the theme.
 * By default it uses the theme name, in lowercase and without spaces, but this can be changed if needed.
 * If the identifier changes, it'll appear as if the options have been reset.
 *
 */

function optionsframework_option_name() {

	// This gets the theme name from the stylesheet (lowercase and without spaces)
	$themename = get_option( 'stylesheet' );
	$themename = preg_replace("/\W/", "_", strtolower($themename) );

	$optionsframework_settings = get_option('optionsframework');
	$optionsframework_settings['id'] = $themename;
	update_option('optionsframework', $optionsframework_settings);

	// echo $themename;
}

/**
 * Defines an array of options that will be used to generate the settings page and be saved in the database.
 * When creating the 'id' fields, make sure to use all lowercase and no spaces.
 *
 */

function optionsframework_options() {

	// Test data
	$test_array = array(
		'one' => __('One', 'options_check'),
		'two' => __('Two', 'options_check'),
		'three' => __('Three', 'options_check'),
		'four' => __('Four', 'options_check'),
		'five' => __('Five', 'options_check')
	);

	// Multicheck Array
	$multicheck_array = array(
		'one' => __('French Toast', 'options_check'),
		'two' => __('Pancake', 'options_check'),
		'three' => __('Omelette', 'options_check'),
		'four' => __('Crepe', 'options_check'),
		'five' => __('Waffle', 'options_check')
	);

	// Multicheck Defaults
	$multicheck_defaults = array(
		'one' => '1',
		'five' => '1'
	);

	// Background Defaults
	$background_defaults = array(
		'color' => '',
		'image' => '',
		'repeat' => 'repeat',
		'position' => 'top center',
		'attachment'=>'scroll' );

	// Typography Defaults
	$typography_defaults = array(
		'size' => '15px',
		'face' => 'georgia',
		'style' => 'bold',
		'color' => '#bada55' );

	// Typography Options
	$typography_options = array(
		'sizes' => array( '6','12','14','16','20' ),
		'faces' => array( 'Helvetica Neue' => 'Helvetica Neue','Arial' => 'Arial' ),
		'styles' => array( 'normal' => 'Normal','bold' => 'Bold' ),
		'color' => false
	);

	// Pull all the categories into an array
	$options_categories = array();
	$options_categories_obj = get_categories();
	foreach ($options_categories_obj as $category) {
		$options_categories[$category->cat_ID] = $category->cat_name;
	}

	// Pull all tags into an array
	$options_tags = array();
	$options_tags_obj = get_tags();
	foreach ( $options_tags_obj as $tag ) {
		$options_tags[$tag->term_id] = $tag->name;
	}

	// Pull all the pages into an array
	$options_pages = array();
	$options_pages_obj = get_pages('sort_column=post_parent,menu_order');
	$options_pages[''] = 'Select a page:';
	foreach ($options_pages_obj as $page) {
		$options_pages[$page->ID] = $page->post_title;
	}

	// If using image radio buttons, define a directory path
	$imagepath =  get_template_directory_uri() . '/images/';

	$options = array();

	$options[] = array(
		'name' => __('Social links', 'options_check'),
		'type' => 'heading');

		$options[] = array(
		'name' => __('vimeo', 'options_check'),
		'desc' => __('link from linkedin', 'options_check'),
		'id' => 'vimeo_link',
		'std' => '',
		'type' => 'text');

		$options[] = array(
		'name' => __('instagram', 'options_check'),
		'desc' => __('link from instagram.', 'options_check'),
		'id' => 'instagram_link',
		'std' => '',
		'type' => 'text');

		$options[] = array(
		'name' => __('twitter', 'options_check'),
		'desc' => __('link from twitter.', 'options_check'),
		'id' => 'twitter_link',
		'std' => '',
		'type' => 'text');

		$options[] = array(
		'name' => __('facebook', 'options_check'),
		'desc' => __('link from facebook.', 'options_check'),
		'id' => 'facebook_link',
		'std' => '',
		'type' => 'text');

	$options[] = array(
		'name' => __('About Us', 'options_check'),
		'type' => 'heading');

		$wp_editor_settings = array(
			'wpautop' => true, // Default
			'textarea_rows' => 5,
			'tinymce' => array( 'plugins' => 'wordpress' )
		);

		$options[] = array(
		'name' => __('MANAWYNWOOD content about', 'options_check'),
		'desc' => sprintf( __( 'Type the about ManaWynwood', 'options_check' )),
		'id' => 'mana_about',
		'type' => 'editor',
		'settings' => $wp_editor_settings );

		$options[] = array(
		'name' => __('Upload the image ManaWnwood About', 'options_check'),
		'desc' => __('Upload image Mana Wynwood', 'options_check'),
		'id' => 'mana_about_image',
		'type' => 'upload');

		$options[] = array(
		'name' => __('MOISHE MANA content', 'options_check'),
		'desc' => sprintf( __( 'Type the about MOISHE', 'options_check' )),
		'id' => 'moishe_about',
		'type' => 'editor',
		'settings' => $wp_editor_settings );

		$options[] = array(
		'name' => __('Upload the image Moishe About', 'options_check'),
		'desc' => __('Upload image Moishe Wynwood', 'options_check'),
		'id' => 'moishe_about_image',
		'type' => 'upload');	

		$options[] = array(
		'name' => __('Upload the cover video Image Moishe', 'options_check'),
		'desc' => __('Upload cover video Image', 'options_check'),
		'id' => 'cover_image_video',
		'type' => 'upload');

		$options[] = array(
		'name' => __('video Moishe', 'options_check'),
		'desc' => __('Link about Moishe Mana.', 'options_check'),
		'id' => 'video_moishe_link',
		'std' => '',
		'type' => 'text');

		$options[] = array(
		'name' => __('MANAWYNWOOD companies', 'options_check'),
		'desc' => sprintf( __( 'upload only images from insert media button', 'options_check' )),
		'id' => 'mana_companies',
		'type' => 'editor',
		'settings' => $wp_editor_settings );

		$options[] = array(
		'name' => __('Upload the image ManaWnwood Art district', 'options_check'),
		'desc' => __('Upload image Art district', 'options_check'),
		'id' => 'mana_art_district_image',
		'type' => 'upload');

		$options[] = array(
		'name' => __('MANAWYNWOOD Art DISTRICT', 'options_check'),
		'desc' => sprintf( __( 'Type the about Art disstrict', 'options_check' )),
		'id' => 'mana_art_district',
		'type' => 'editor',
		'settings' => $wp_editor_settings );


	/*$options[] = array(
		'name' => __('Advanced Settings', 'options_check'),
		'type' => 'heading');

	$options[] = array(
		'name' => __('Check to Show a Hidden Text Input', 'options_check'),
		'desc' => __('Click here and see what happens.', 'options_check'),
		'id' => 'example_showhidden',
		'type' => 'checkbox');

	$options[] = array(
		'name' => __('Hidden Text Input', 'options_check'),
		'desc' => __('This option is hidden unless activated by a checkbox click.', 'options_check'),
		'id' => 'example_text_hidden',
		'std' => 'Hello',
		'class' => 'hidden',
		'type' => 'text');

	$options[] = array(
		'name' => __('Uploader Test', 'options_check'),
		'desc' => __('This creates a full size uploader that previews the image.', 'options_check'),
		'id' => 'example_uploader',
		'type' => 'upload');

	$options[] = array(
		'name' => "Example Image Selector",
		'desc' => "Images for layout.",
		'id' => "example_images",
		'std' => "2c-l-fixed",
		'type' => "images",
		'options' => array(
			'1col-fixed' => $imagepath . '1col.png',
			'2c-l-fixed' => $imagepath . '2cl.png',
			'2c-r-fixed' => $imagepath . '2cr.png')
	);

	$options[] = array(
		'name' =>  __('Example Background', 'options_check'),
		'desc' => __('Change the background CSS.', 'options_check'),
		'id' => 'example_background',
		'std' => $background_defaults,
		'type' => 'background' );

	$options[] = array(
		'name' => __('Multicheck', 'options_check'),
		'desc' => __('Multicheck description.', 'options_check'),
		'id' => 'example_multicheck',
		'std' => $multicheck_defaults, // These items get checked by default
		'type' => 'multicheck',
		'options' => $multicheck_array);

	$options[] = array(
		'name' => __('Colorpicker', 'options_check'),
		'desc' => __('No color selected by default.', 'options_check'),
		'id' => 'example_colorpicker',
		'std' => '',
		'type' => 'color' );

	$options[] = array( 'name' => __('Typography', 'options_check'),
		'desc' => __('Example typography.', 'options_check'),
		'id' => "example_typography",
		'std' => $typography_defaults,
		'type' => 'typography' );

	$options[] = array(
		'name' => __('Custom Typography', 'options_check'),
		'desc' => __('Custom typography options.', 'options_check'),
		'id' => "custom_typography",
		'std' => $typography_defaults,
		'type' => 'typography',
		'options' => $typography_options );

	$options[] = array(
		'name' => __('Text Editor', 'options_check'),
		'type' => 'heading' );

	/**
	 * For $settings options see:
	 * http://codex.wordpress.org/Function_Reference/wp_editor
	 *
	 * 'media_buttons' are not supported as there is no post to attach items to
	 * 'textarea_name' is set by the 'id' you choose
	 */

	/*$wp_editor_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 5,
		'tinymce' => array( 'plugins' => 'wordpress' )
	);

	$options[] = array(
		'name' => __('Default Text Editor', 'options_check'),
		'desc' => sprintf( __( 'You can also pass settings to the editor.  Read more about wp_editor in <a href="%1$s" target="_blank">the WordPress codex</a>', 'options_check' ), 'http://codex.wordpress.org/Function_Reference/wp_editor' ),
		'id' => 'example_editor',
		'type' => 'editor',
		'settings' => $wp_editor_settings );

	$wp_editor_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 5,
		'media_buttons' => true
	);

	$options[] = array(
		'name' => __('Additional Text Editor', 'options_check'),
		'desc' => sprintf( __( 'This editor includes media button.', 'options_check' ), 'http://codex.wordpress.org/Function_Reference/wp_editor' ),
		'id' => 'example_editor_media',
		'type' => 'editor',
		'settings' => $wp_editor_settings );*/

	return $options;
}