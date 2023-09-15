<?php
/**
* Template Name: 404 Not Found Template
*
*/

get_header();
?>
    <!-- Content -->
    <div class="verso-content">
        <?php the_content(); ?>
        <?php wp_link_pages(); ?>
    </div>
    <!-- Footer -->
<?php

get_footer();

?>