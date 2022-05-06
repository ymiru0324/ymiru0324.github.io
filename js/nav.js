// scroll시 nav바 fontSize 조정
$(window).on('scroll', function() {
  if (window.scrollY > 100) {
    $('.navbar-brand').css('fontSize', '20px')
    $('#insta-img').css('width', '20px')
  } else {
    $('.navbar-brand').css('fontSize', '30px')
    $('#insta-img').css('width', '30px')
  }
});

$(".MoveNavBar").click(function(){
  const bn = $(this).parent().index();
  const bt = $(".box" + bn).offset().top - 80;
  $("html, body").animate({"scrollTop":bt},700);
  return false;
});
