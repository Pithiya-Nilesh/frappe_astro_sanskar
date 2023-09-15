<?php
/**
* Template Name: Page Template
*
*/

get_header();
?>
    <!-- Content -->
    <div class="verso-content page-<?php echo get_the_ID(); ?>">
        <?php the_content(); ?>
        <?php wp_link_pages(); ?>
    </div>
    <!-- Footer -->
<?php

get_footer();

?>
    