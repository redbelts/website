(function($) {
  "use strict";

  // One Page Nav
  var top_offset = $(".transparent-menu").height() - 35;
  $(".main-menu nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: top_offset
  });

  $(window).on('load',function () {
    $("#loading").fadeOut(500);
  })

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function() {
    var scroll = wind.scrollTop();
    if (scroll < 1) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  // menu toggle
  $(".navbar-toggle").on("click", function() {
    $(".navbar-nav").addClass("mobile_menu");
  });
  $(".navbar-nav li a").on("click", function() {
    $(".navbar-collapse").removeClass("show");
  });

  // mainSlider
  function mainSlider() {
    var BasicSlider = $(".slider-active, .slider-three-active");
    BasicSlider.on("init", function(e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on("beforeChange", function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: false,
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  // app active
  $(".app-active").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // testimonial active
  $(".testimonial-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe"
  });

  // scrollToTop
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // WOW active
  new WOW().init();

  /*  youtube video */
  $(".youtube-bg").YTPlayer({
    containment: ".youtube-bg",
    autoPlay: true,
    loop: true,
    mute: true,
    opacity: 0.5,
    showControls:false
  });
})(jQuery);
