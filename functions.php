<?php

function synctriotech_custom_logo_setup()
{
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array('site-title', 'site-description'),
    ));
}
add_action('after_setup_theme', 'synctriotech_custom_logo_setup');


function synctriotech_enqueue_scripts()
{
    $theme_dir = get_template_directory_uri();

    // Enqueue Bootstrap CSS (make sure to add the Bootstrap CDN or local path)
    wp_enqueue_style(
        'bootstrap',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css', // Using CDN for Bootstrap
        array(), // No dependencies
        '5.3.0-alpha1', // Version number
        'all' // Media
    );

    // Enqueue the non-hashed index.js file directly (React app)
    wp_enqueue_script(
        'synctriotech-react',
        $theme_dir . '/react-src/dist/index.js', // Directly reference the predictable file
        array(), // No dependencies
        filemtime(get_template_directory() . '/react-src/dist/index.js'), // Cache busting with filemtime
        true // Load in footer
    );



    wp_localize_script('synctriotech-react', 'SyncTrioRest', array(
        'api_base_url' => esc_url_raw(rest_url('synctrio/v1/contact')),

    ));


    // Enqueue the theme stylesheet (for global styles)
    wp_enqueue_style(
        'synctriotech-style',
        get_stylesheet_uri() // Standard WordPress theme stylesheet
    );

    // Enqueue the theme's custom styles (if any)
    wp_enqueue_style(
        'synctriotech-theme-style',
        $theme_dir . '/assets/css/styles.css' // Custom CSS (if you have any)
    );
}

add_action('wp_enqueue_scripts', 'synctriotech_enqueue_scripts');


// In functions.php
require_once get_template_directory() . '/includes/synctrio-tech-rest-api.php';



add_action('rest_api_init', function () {
    register_rest_field('options', 'custom_logo_url', array(
        'get_callback' => function () {
            $custom_logo_id = get_theme_mod('custom_logo');
            if ($custom_logo_id) {
                $image = wp_get_attachment_image_src($custom_logo_id, 'full');
                return $image[0]; // Return URL
            }
            return null;
        },
        'schema' => null,
    ));
});


add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/site-info', array(
        'methods' => 'GET',
        'callback' => function () {
            $custom_logo_id = get_theme_mod('custom_logo');
            $logo_url = wp_get_attachment_image_src($custom_logo_id, 'full')[0] ?? null;

            return [
                'logo' => $logo_url,
                'site_name' => get_bloginfo('name'),
                'description' => get_bloginfo('description'),
            ];
        },
        'permission_callback' => '__return_true',
    ));
});
