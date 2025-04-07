<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <!-- Header Root Element where React will render the header -->
    <div id="header-root"></div>

    <!-- Main Content Area (this will be rendered by React Router based on the routes) -->
    <div id="root"></div>

    <!-- Footer Root Element where React will render the footer -->
    <div id="footer-root"></div>

    <?php wp_footer(); ?>
</body>

</html>