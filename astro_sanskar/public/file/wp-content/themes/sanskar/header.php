<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        <?php wp_title('|', true, 'right');?>
    </title>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;600&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="<?php echo esc_url(get_stylesheet_uri()); ?>" type="text/css" />
    <?php wp_head();?>
    <!-- Fav Icons -->

    <link rel="icon" type="image/png" sizes="16x16" href="/wp-content/themes/sanskar/assets/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/wp-content/themes/sanskar/assets/favicon/favicon-32x32.png">
    <link rel="shortcut icon" href="/wp-content/themes/sanskar/assets/favicon/favicon.png">
</head>

<body class="pace-on pace-squares page-id-<?php echo get_the_ID();?>">
    <div class="pace-overlay"></div>
    <!--[if lt IE 10]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div class="verso-content-box verso-content-box-move-behind">
        <!-- Header -->
        <div class="verso-header verso-header-transparent">
            <!-- Navigation -->
            <div class="verso-nav verso-nav-sticky verso-nav-layout-logo-l-menu-r verso-nav-hover">
                <div class="verso-nav-inner">
                    <div class="verso-nav-container-fluid">
                        <!-- Logo -->
                        <div class="verso-nav-brand">
                            <a href="/">
                                <img src="/wp-content/themes/sanskar/assets/images/sanskar-logo.png" alt="">
                            </a>
                        </div>
                        <div class="verso-nav-brand landing-service-logo">
                            <a href="/">
                            <img src="/wp-content/themes/sanskar/assets/images/sanskar-logo-2022.png" alt="logo" class="white-logo">
                            <img src="/wp-content/themes/sanskar/assets/images/sanskar-logo.png" alt="logo" class="color-logo">
                            </a>
                        </div>
                        <!-- Mobile menu toggle button -->
                        <div class="verso-nav-mobile">
                            <a id="nav-toggle" href="javascript:void(0);">
                                <span></span>
                            </a>
                        </div>
                        <!-- Menu One -->
                        <nav class="verso-nav-menu">
                            <ul class="verso-nav-list">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="#">About us <i class="fa fa-chevron-down ml-1"></i></a>
                                    <ul class="verso-nav-dropdown closed">
                                        <li>
                                            <a href="http://sanskartechnolab.com/about-us/">Our Story</a>
                                        </li>
                                        <!--<li>
                                            <a href="http://sanskartechnolab.com/clients/">Our Client</a>
                                        </li>-->
                                        <li>
                                            <a href="http://sanskartechnolab.com/career/">Careers</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Solutions <i class="fa fa-chevron-down ml-1"></i></a>
                                    <ul class="verso-nav-dropdown closed">
                                        <li>
                                            <a href="https://sanskartechnolab.com/servicenow-development-company//">ServiceNow Development</a>
                                        </li>
                                        <li>
                                            <a href="https://sanskartechnolab.com/servicenow-partner/">ServiceNow Partner</a>
                                        </li>
                                        <li>
                                            <a href="https://sanskartechnolab.com/servicenow-consultation-services/">ServiceNow Consultation</a>
                                        </li>
                                        <li>
                                            <a href="https://sanskartechnolab.com/hire-servicenow-developer/">Hire ServiceNow Developer</a>
                                        </li>
                                        <li>
                                            <a href="https://sanskartechnolab.com/erpnext-integration-and-consulting-partner/">ERPNext Partner</a>
                                        </li>
                                        <li>
                                            <a href="https://sanskartechnolab.com/erpnext-amazon-integration/">ERPNext Amazon Integration</a>
                                        </li>
                                    </ul>
                                    <!--
                                    <ul class="verso-nav-dropdown custom-menu closed">
                                        <li>
                                            <div class="mega-menu-block">
                                                <div class="half-block">
                                                    <ul>
                                                        <li>
                                                            <a href="https://sanskartechnolab.com/servicenow-partner/"><img
                                                                    src="/wp-content/themes/sanskar/assets/images/service-now-icon.svg"
                                                                    alt="">
                                                                ServiceNow Partner</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://sanskartechnolab.com/servicenow-consultation-services/"><img
                                                                    src="/wp-content/themes/sanskar/assets/images/service-now-icon.svg"
                                                                    alt="">
                                                                ServiceNow Consultation</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="half-block">
                                                    <ul>
                                                        <li>
                                                            <a href="https://sanskartechnolab.com/erpnext-integration-and-consulting-partner/">
                                                                <img src="/wp-content/uploads/2021/11/erp01.svg"
                                                                    alt="">
                                                                ERPNext Partner
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://sanskartechnolab.com/erpnext-amazon-integration/">
                                                                <img src="/wp-content/uploads/2021/11/erp01.svg"
                                                                    alt="">ERPNext Amazon Integration
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    -->
                                </li>
                                <!--
                                <li>
                                    <a href="#">Services <i class="fa fa-chevron-down ml-1"></i></a>
                                    <ul class="verso-nav-dropdown custom-menu closed">
                                        <li>
                                            <div class="mega-menu-block">
                                                <div class="half-block">
                                                    <ul>
                                                        <!--<li>
                                                            <h5 class="verso-mt-2 verso-mb-1">SOLUTIONS</h5>
                                                        </li>--
                                                        <li>
                                                            <a href="https://sanskartechnolab.com/servicenow-development-company//"><img
                                                                    src="/wp-content/themes/sanskar/assets/images/service-now-icon.svg"
                                                                    alt="">
                                                                ServiceNow Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="http://sanskartechnolab.com/reactjs-development-company/"><img
                                                                    src="/wp-content/themes/sanskar/assets/images/react-menu-logo.svg"
                                                                    alt="">
                                                                ReactJs Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="http://sanskartechnolab.com/react-native-app-development-company/"><img
                                                                    src="/wp-content/themes/sanskar/assets/images/react-menu-logo.svg"
                                                                    alt="">
                                                                React Native Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="http://sanskartechnolab.com/vue-js-development-company/"><img
                                                                    src="/wp-content/themes/sanskar/assets/images/vue-menu-logo.svg"
                                                                    alt=""> Vuejs
                                                                development</a>
                                                        </li>
                                                        <li>
                                                            <a href="http://sanskartechnolab.com/laravel-development-company/"><img
                                                                    src="/wp-content/themes/sanskar/assets/images/laravel-menu-logo.svg"
                                                                    alt="">
                                                                Laravel Development</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="half-block">
                                                    <ul>
                                                        <!--<li>
                                                            <h5 class="verso-mt-2 verso-mb-1">HIRE DEVELOPERS</h5>
                                                        </li>--
                                                        <li>
                                                            <a href="https://sanskartechnolab.com/hire-servicenow-developer/"><img
                                                                    src="/wp-content/themes/sanskar/assets/images/service-now-icon.svg"
                                                                    alt=""> Hire ServiceNow Developer</a>
                                                        </li>
                                                        <li>
                                                            <a href="http://sanskartechnolab.com/hire-reactjs-developer/">
                                                                <img src="/wp-content/themes/sanskar/assets/images/react-menu-logo.svg"
                                                                    alt="">
                                                                Hire ReactJs Developer
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="http://sanskartechnolab.com/hire-react-native-developers/">
                                                                <img src="/wp-content/themes/sanskar/assets/images/react-menu-logo.svg"
                                                                    alt="">Hire
                                                                React Native Developer
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="http://sanskartechnolab.com/hire-vuejs-developer/">
                                                                <img src="/wp-content/themes/sanskar/assets/images/vue-menu-logo.svg"
                                                                    alt=""> Hire
                                                                Vuejs Developer
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="http://sanskartechnolab.com/hire-laravel-developer/">
                                                                <img src="/wp-content/themes/sanskar/assets/images/laravel-menu-logo.svg"
                                                                    alt="">
                                                                Hire Laravel Developer
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>-->
                                <li>
                                    <a href="http://sanskartechnolab.com/our-work/">Our Work</a>
                                </li>
                                <li>
                                    <a href="http://sanskartechnolab.com/blog/">Blog</a>
                                </li>
                                <li>
                                    <a href="http://sanskartechnolab.com/contact-us/">Contact Us</a>
                                </li>
                            </ul>
                            <div class="verso-nav-widget">
                                <div class="verso-widget">
                                    <a href="http://sanskartechnolab.com/inquiry/" class="btn-header btn-primary verso-shadow-2">Inquire Now</a>
                                </div>
                            </div>
                        </nav>
                        <div class="align-self-center landing-project-btn">
                            <a href="#" class="btn-header btn-secondary verso-shadow-2" onclick="nameFocus();"> START A PROJECT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>