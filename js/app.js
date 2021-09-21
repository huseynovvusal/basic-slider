$(function () {
  let slidesLength = $("#slider ul li").length;
  let width = $("#slider ul li").width();
  let height = $("#slider ul li").height();
  let sliderWidth = slidesLength * width;

  setInterval(goNext, 3000);

  $("#slider ul li:last-child").prependTo("#slider ul");

  $("#slider").css({
    width: width,
    height: height,
  });

  $("#slider ul").css({
    width: sliderWidth,
    marginLeft: -width,
  });

  function goPrevious() {
    $("#slider ul").animate(
      {
        left: +width,
      },
      300,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }
  function goNext() {
    $("#slider ul").animate(
      {
        left: -width,
      },
      300,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  $(".prev").click(function () {
    goPrevious();
  });
  $(".next").click(function () {
    goNext();
  });

  console.log(width);
});
