<?php
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
