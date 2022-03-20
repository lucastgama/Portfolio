$(document).ready(function () {
  $("#portfolio-ads, #portfolio-remarketing").hide();
  $(".menuitem").click(function () {
    $(".menuitem").removeClass("activeportfolio");
    $(this).addClass("activeportfolio");
    changeportfolio = this.id;
    $(".item").hide();
    $("#portfolio-" + changeportfolio).show();
  });
  // menu sticky
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("active");
    } else {
      $("nav").removeClass("active");
    }
  });

  //toggle menu
  $(".toggle").on("click", function () {
    if ($(".menu").hasClass("active")) {
      $(".menu").removeClass("active");
      $(this).find(".toggle-icon").html('<i class="bi bi-list"></i>');
    } else {
      $(".menu").addClass("active");
      $(this).find(".toggle-icon").html('<i class="bi bi-x"></i>');
    }
  });
});
