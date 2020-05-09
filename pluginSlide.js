//<![CDATA[

$('#main-slider').slick({
  dots: true,
  infinite: true,
 slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '200px',
  speed: 1500,
  cssEase: 'linear',
 autoplay: true,
 autoplaySpeed: 3000,
 prevArrow: '<button type="button" class="slick-nav slick-prev"><i class="fa fa-angle-left"></i></button>',
 nextArrow: '<button type="button" class="slick-nav slick-next"><i class="fa fa-angle-right"></i></button>',
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
  slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
  slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
  slidesToShow: 1,
  slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//]]>
</script>
<script type='text/javascript'>
//<![CDATA[
$("#main-slider").addClass("main-slider-start");
//]]>
