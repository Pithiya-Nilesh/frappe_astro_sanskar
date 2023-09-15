$(document).ready(function () {
    $("#client-testimonial").owlCarousel({
          autoplay: true,
          loop: true,
          margin: 20,
          responsiveClass: true,
          autoHeight: true,
          autoplayTimeout: 7000,
          smartSpeed: 800,
          nav: false,
          dots: true,
          responsive: {
            0: {
              items: 1
            },

            769: {
              items: 3
            }
          }
    });
    
});
function nameFocus() {
    document.getElementById("form_name").focus();
    //jQuery("#wpcf7-f870-o1").scrollTop(150);
    jQuery('html, body').animate({
        scrollTop: ($("#wpcf7-f870-o1").offset().top - 150)
    }, 1000);
}