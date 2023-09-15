<?php
get_header();
?>
        <!-- Content -->
        <div class="verso-content">
            <?php while ( have_posts() ) : the_post(); ?>
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
                                    data-os-animation="fadeIn" data-os-animation-delay=".3s"> <?php the_title();?></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-content bg-white">
                <div class="container">
                    <div class="row verso-py-10">
                        <div class="col-lg-9 verso-mb-5 verso-mb-lg-0">

                            <div class="card verso-shadow-15 verso-shadow-hover-20 verso-transition verso-mb-10 verso-os-animation verso-os-animation animated fadeIn blog_img_single"
                                data-os-animation="fadeIn" data-os-animation-delay=".3s" style="animation-delay: 0.3s;">

                                <div class="card-img-container">
                                    <?php

										if (has_post_thumbnail()) { // true
											//the_post_thumbnail('small-thumbnail');
											the_post_thumbnail('full', array('class' => 'card-img'));
										} else {
											?>
                                    <img class="card-img"
                                        src="<?php echo get_stylesheet_directory_uri() . '/assets/images/no-image.jpg' ?>"
                                        alt="Card image">
                                    <?php
										}
										?>
                                </div>

                                <div class="card-body blog-custom">
                                    <h2 class="h3 card-title text-uppercase verso-mb-1"><?php the_title();?></h2>
                                    <p class="card-subtitle font-italic text-muted verso-mb-1"><?php the_time('d F, Y') ?></p>
                                    <p class="card-text"><?php the_content();?></p>
                                </div>
                            </div>
                            <h4 class="h4 text-uppercase verso-mb-3 verso-transition verso-mt-10 verso-os-animation animated fadeIn"
                                data-os-animation="fadeIn" data-os-animation-delay=".3s" style="animation-delay: 0.3s;">
                                <?php /*comments_popup_link('No Comments >>', '1 Comment >>', '% Comments >>');*/?>

                                <?php comments_number('0 comments');?>

                                <div class="media-list">
                                    <?php
                                    $results = get_comments();
                                    ?>
                                    <?php foreach ($results as $val) {?>
                                    <div class="media verso-mt-10"><img
                                            class="d-flex verso-mr-1 verso-mr-md-3 rounded-circle"
                                            src="/wp-content/themes/sanskar/assets/images/user.jpg"
                                            alt="comments author">
                                        <div class="media-body">
                                            <h5 class="media-heading verso-mb-1 font-italic">
                                                <?php echo $val->comment_content; ?> - <small
                                                    class="text-muted"><?php echo date("F dS Y", strtotime($val->comment_date)); ?>
                                                </small>
                                            </h5>
                                            <h6>By: <?php echo get_comment_author($val->comment_ID); ?></h6>
                                        </div>
                                    </div>
                                    <?php }?>
                                </div>

                                <h4 class="h4 text-uppercase verso-mb-3 verso-transition verso-mt-10 verso-os-animation text-shadow animated fadeIn"
                                    data-os-animation="fadeIn" data-os-animation-delay=".3s"
                                    style="animation-delay: 0.3s;">
                                    Leave a reply</h4>

                                <?php if ($_SESSION['errormsg'] != "") {?>

                                <div class="alert alert-success alert-no-border alert-close alert-dismissible  in"
                                    role="alert">
                                    <button type="button" aria-hidden="true" class="close"
                                        data-notify="dismiss">×</button>
                                    <?php echo $_SESSION['errormsg']; ?>
                                </div>
                                <?php unset($_SESSION['errormsg']);
                                    }
                                    ?>

                                <form action="/wp-comments-post.php" method="post" enctype="multipart/form-data"
                                    id="respond" name="myForm" onsubmit="return(validate());">
                                    <input type='hidden' name='comment_post_ID' value='<?php echo the_ID(); ?>'
                                        id='comment_post_ID' />
                                    <input type='hidden' name='comment_parent' id='comment_parent' value='0' />
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <input type="text"
                                                class="verso-mb-3 form-control verso-shadow-2 verso-shadow-focus-4 verso-transition"
                                                name="name" id="name" placeholder="Your Name">
                                            <p class="text-danger mb_p" id="name_msg"></p>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text"
                                                class="verso-mb-3 form-control verso-shadow-2 verso-shadow-focus-4 verso-transition"
                                                name="email" id="email" placeholder="Your Email">
                                            <p class="text-danger mb_p" id="email_msg"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row verso-mb-3">
                                        <div class="col-md-12">
                                            <textarea rows="8"
                                                class="form-control verso-shadow-2 verso-shadow-focus-4 verso-transition"
                                                name="comment" id="comment" placeholder="Your Comment"></textarea>
                                            <p class="text-danger mb_p" id="comment_msg"></p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <input type="submit" name="submit" value="Post Comment"
                                                class="btn btn-primary verso-shadow-2 verso-shadow-focus-4 verso-transition">
                                        </div>
                                    </div>
                                </form>
                            </h4>
                        </div>
                        <div class="col-lg-3 sidebar">

                            <div class="verso-widget widget_recent_entries">
                                <h4 class="h5 verso-widget-header text-uppercase">Recent Posts</h4>
                                <ul>
                                    <?php
										// the query
										$the_query = new WP_Query(array(
											'posts_per_page' => 4,
										));
										?>
                                    <?php if ($the_query->have_posts()): ?>
                                    <?php while ($the_query->have_posts()): $the_query->the_post();?>
                                    <li class="text-truncate"> <a href="<?php the_permalink();?>"
                                            class="float-left verso-mr-1 verso-widget-image" title="Post title">
                                            <?php
														if (has_post_thumbnail()) { // true
															//the_post_thumbnail('small-thumbnail');
															the_post_thumbnail('small-thumbnail', array('class' => 'post image'));
														} else {
															?>
                                            <img class="post image"
                                                src="<?php echo get_stylesheet_directory_uri() . '/images/no-image.jpg' ?>"
                                                alt="Card image">
                                            <?php
													}
													?>
                                        </a> <a href="<?php the_permalink();?>"><?php the_title();?></a>
                                        <small class="post-date d-block"><?php the_time('F d, Y')?></small>
                                    </li>

                                    <?php endwhile;?>
                                    <?php wp_reset_postdata();?>

                                    <?php else: ?>
                                    <p><?php __('No Post');?></p>
                                    <?php endif;?>
                                </ul>
                            </div>
                            <?php endwhile; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
<?php

get_footer();

?>
    