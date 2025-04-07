<?php
function synctriotech_enqueue_scripts()
{
    $theme_dir = get_template_directory_uri();

    // Enqueue the non-hashed index.js file directly
    wp_enqueue_script(
        'synctriotech-react',
        $theme_dir . '/react-src/dist/index.js', // Directly reference the predictable file
        array(),
        (get_template_directory() . '/react-src/dist/index.js'), // Cache busting with filemtime
        true
    );

    // Enqueue the theme stylesheet
    wp_enqueue_style(
        'synctriotech-style',
        get_stylesheet_uri()
    );
}

add_action('wp_enqueue_scripts', 'synctriotech_enqueue_scripts');
