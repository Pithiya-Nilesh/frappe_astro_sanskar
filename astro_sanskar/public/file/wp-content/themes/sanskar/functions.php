<?php

// add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles', 11 );
function enqueue_parent_styles() {
   wp_enqueue_style( 'style-style', get_stylesheet_directory_uri().'/style.css' );
   wp_enqueue_style( 'custom-css-style', get_stylesheet_directory_uri().'/assets/css/custom-css.css' );
   wp_enqueue_style( 'animate-min-style', get_stylesheet_directory_uri().'/assets/css/animate.css' );
   wp_enqueue_style( 'corporate-classic-min-style', get_stylesheet_directory_uri().'/assets/css/corporate-classic.css' );
   wp_enqueue_style( 'owl-carousel-min-style', get_stylesheet_directory_uri().'/assets/css/owl.carousel.css' );
}

function wpdocs_scripts_method() {
    wp_enqueue_script( 'jquery.min', get_stylesheet_directory_uri() . '/assets/js/jquery.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'bootstrap.min', get_stylesheet_directory_uri() . '/assets/js/bootstrap.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'sina-nav', get_stylesheet_directory_uri() . '/assets/js/sina-nav.js', array( 'jquery' ) );
    wp_enqueue_script( 'wow.min', get_stylesheet_directory_uri() . '/assets/js/wow.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'magnific.min', get_stylesheet_directory_uri() . '/assets/js/magnific.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'pace.min', get_stylesheet_directory_uri() . '/assets/js/pace.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'smooth-scroll.min', get_stylesheet_directory_uri() . '/assets/js/smooth-scroll.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'waypoints.min', get_stylesheet_directory_uri() . '/assets/js/waypoints.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'prlx.min', get_stylesheet_directory_uri() . '/assets/js/prlx.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'countdown.min', get_stylesheet_directory_uri() . '/assets/js/countdown.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'corporate-classic.min', get_stylesheet_directory_uri() . '/assets/js/corporate-classic.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'counter', get_stylesheet_directory_uri() . '/assets/js/counter.js', array( 'jquery' ) );
    wp_enqueue_script( 'recaptcha', 'https://www.google.com/recaptcha/api.js', array( 'jquery' ) );
    wp_enqueue_script( 'owl.carousel', get_stylesheet_directory_uri() . '/assets/js/owl.carousel.js', array( 'jquery' ) );
    wp_enqueue_script( 'custom', get_stylesheet_directory_uri() . '/assets/js/custom.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'wpdocs_scripts_method' );

function theme_setup(){
    /** post thumbnail **/
    add_theme_support( 'post-thumbnails' );
}
add_action('after_setup_theme','theme_setup');