jQuery(document).ready(function () {
  "use strict";
  $("#slider-carousel").carouFredSel({
    responsive: true,
    width: "100%",
    circular: true,

    scroll: {
      items: 2,
      duration: 500,
      pauseOnHover: true,
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 1,
      },
      height: "variable",
    },

    pagination: {
      container: ".sliderpager",
      pageAnchorBuilder: false,
    },
  });
});

// slick nav
$("#menu").slicknav({
  label: "",
});
