<?php
/**
 * Template Name: Blog Template
 *
 */
get_header();
?>  
<!-- Content -->
        <div class="verso-content">
            <?php query_posts('post_type=post&post_status=publish&posts_per_page=10&paged=' . get_query_var('paged'));?>
            <div class="section verso-demo-bg-color-04">
                <div class="section-background ">
                    <div
                        class="section-bg-image section-bg-image-size-cover section-bg-image-position-top section-bg-image-paralax verso-blog-bg-slide">
                    </div>
                </div>
                <div class="section-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-xs-12 align-items-center text-center verso-mt-8 verso-mb-8">
                                <h1 class="display-5 text-white verso-font-weight-700  verso-opacity-8 verso-os-animation"
                                    data-os-animation="fadeIn" data-os-animation-delay=".3s"> Blog</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-content bg-white">
                <div class="container">
                    <div class="row verso-py-10">
                        <div class="col-lg-12 verso-mb-5 verso-mb-lg-0">
                            <div class="row row-eq-height">
                                <?php if( have_posts() ): ?>

                                    <?php while( have_posts() ): the_post(); ?>
                                    <div class="col-md-4 col-xs-12 verso-mb-2">
                                        <div class="card card-horizontal verso-shadow-15 verso-shadow-hover-20 verso-transition verso-os-animation verso-os-animation animated fadeIn"
                                            data-os-animation="fadeIn" data-os-animation-delay=".3s" style="animation-delay: 0.3s;">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="card-img-container">
                                                        <?php
                                                        if(has_post_thumbnail()){ // true
                                                            //the_post_thumbnail('small-thumbnail');
                                                            the_post_thumbnail( 'small-thumbnail', array( 'class'  => 'card-img border-top-lr-rad-8' ) );
                                                        }else{
                                                            ?>
                                                        <img class="card-img border-top-lr-rad-8"
                                                            src="<?php echo get_template_directory_uri().'/assets/images/no-image.jpg' ?>" alt="">
                                                        <?php
                                                            }
                                                        ?>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="card-body">
                                                        <h4 class="card-title verso-mb-1"><a href="<?php the_permalink(); ?>">
                                                                <?php the_title(); ?>
                                                            </a>
                                                        </h4>
                                                        <p class="card-subtitle font-italic text-muted verso-mb-1"><?php the_time('d F, Y') ?>
                                                        </p>
                                                        <a class="float-right" href="<?php the_permalink(); ?>">Read More →</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <?php endwhile; ?>

                                    <div class="navigation">
                                        <span class="newer"><?php previous_posts_link(__('« Newer','example')) ?></span> <span class="older"><?php next_posts_link(__('Older »','example')) ?></span>
                                    </div>

                                <?php else: ?>

                                    <div id="post-404" class="noposts">

                                        <p>
                                            <?php _e('None found.','example'); ?>
                                        </p>

                                    </div><!-- /#post-404 -->

                                <?php endif; wp_reset_query(); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <!-- Footer -->
<?php

get_footer();

?>
    