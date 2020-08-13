$(document).ready(function(){
  $('.testimonials-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    infinite: true,
    slide: 'div.testimonial-card-holder',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          centerMode: false,
          variableWidth: false
        }
      }
    ]
  });
});