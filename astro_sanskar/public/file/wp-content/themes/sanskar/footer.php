<footer class="verso-footer">
    <div class="section verso-pt-8 verso-pb-4">
        <div class="section-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="verso-widget widget_text">
                            <img src="/wp-content/themes/sanskar/assets/images/footer-white-logo.png" alt="Sanskar Technolab" class="mb-4">
                            <p>ServiceNow and ERPNext Consulting, Implementation and Development Specialist.</p>
                        </div>
                        <div class="verso-widget widget_social">
                            <div class="verso-icon-set">
                                <a class="verso-icon-set-item verso-transition"
                                   href="https://www.linkedin.com/company/sanskar-technolab-pvt-ltd"
                                   target="_blank">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                                <a class="verso-icon-set-item verso-transition"
                                   href="https://www.facebook.com/SanskarTechnolab/" 
								   target="_blank">
                                    <i class="fa fa-facebook"></i>
                                </a>
								<a class="verso-icon-set-item verso-transition" 
								   href="https://www.instagram.com/sanskartechnolab/"
								   target="_blank">
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="verso-widget widget_categories">
                            <h4 class="h5 verso-widget-header text-uppercase">ServiceNow</h4>
                            <ul>
                                <li>
                                    <a href="http://sanskartechnolab.com/servicenow-development-company/">
                                        ServiceNow Development
                                    </a>
                                </li>
                                <li>
                                    <a href="https://sanskartechnolab.com/servicenow-partner/">
                                        ServiceNow Partner
                                    </a>
                                </li>
                                <li>
                                    <a href="https://sanskartechnolab.com/servicenow-consultation-services/">
                                        ServiceNow Consultation
                                    </a>
                                </li>
                                <li>
                                    <a href="https://sanskartechnolab.com/hire-servicenow-developer/">
                                        Hire ServiceNow Developer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="verso-widget widget_categories">
                            <h4 class="h5 verso-widget-header text-uppercase">ERPNext</h4>
                            <ul>
                                <li>
                                    <a href="https://sanskartechnolab.com/erpnext-integration-and-consulting-partner/">
                                        ERPNext Partner
                                    </a>
                                </li>
                                <li>
                                    <a href="https://sanskartechnolab.com/erpnext-amazon-integration/">
                                        ERPNext Amazon Integration
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="verso-widget widget_text">
                            <h4 class="h5 verso-widget-header text-uppercase">Contact</h4>
                            <p><i class="fa fa-map-marker mr-2"></i> A-706, Privilon, Behind Iscon Temple, Iscon
                                cross Road, SG Highway, Ahmedabad. (Gujarat-India)</p>
                            <a href="mailto:support@vedika.tech" class="d-block mb-2"><i
                                    class="fa fa-envelope mr-2"></i> info@sanskartechnolab.com</a>
                            <a href="#" class=""><i class="fa fa-phone mr-2"></i> (+91) 95581 12081</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section verso-py-1">
        <div class="section-content">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <div class="verso-widget widget_text">
                            <p>
                                &copy; <?php echo date('Y'); ?> Sanskar Technolab All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<a href="javascript:void(0);" class="verso-go-top verso-shadow-10 verso-shadow-hover-15 d-none d-sm-block hide">
    <i class="fa fa-angle-up"></i>
</a>
</div>
<div class="verso-search-widget-container">
<button class="verso-search-widget-button-close">
    <i class="fa fa-close"></i>
</button>
<form class="verso-search-widget-form" action="index.html">
    <input class="verso-search-widget-input" name="search" type="search" spellcheck="false" />
    <span class="verso-search-widget-info">Hit enter to search or ESC to close</span>
</form>
</div>
<?php wp_footer(); ?>
<script type="text/javascript">
$(document).ready(function () {
    // WOW animation initialize
    new WOW().init();
    setTimeout(() => {
    $('.pace-overlay').trigger('click');
    console.log('done')
    }, 500);
});
function scroll_to_div(div_id) {
    $('html,body').animate(
        {
            scrollTop: $("#" + div_id).offset().top - 100
        },
        'slow');
}
</script>
</body>
</html>