$(document).ready(function () {
  // Initialize the slider
  $(".slider-location").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    dots: false,
    initialSlide: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  function activeCardFirstActiveCard() {
    $(".slider-location .location-card").removeClass("activeCard");
    $(".slider-location .slick-center .location-card").addClass("activeCard");
    const activeCardImageSrc = $(".slider-location .activeCard img").attr(
      "src"
    );

    // Set the background image source
    $(".position-absolute.bg-image img").attr("src", activeCardImageSrc);
  }

  $(".slider-location .slick-active .location-card")
    .first()
    .addClass("activeCard");

  const activeCardImageSrc = $(".slider-location .activeCard img").attr("src");

  // Set the background image source
  $(".position-absolute.bg-image img").attr("src", activeCardImageSrc);

  $(".slider-location").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      activeCardFirstActiveCard();
    }
  );

  $(".hero-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    rtl: true,
  });
});
