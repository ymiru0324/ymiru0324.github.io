// 프로그레시브바 및 페이지 전부 읽었을때 알람창
var htmlscrollCheck = true;
$(window).scroll(function() {

  var htmlscrollMount = document.querySelector('html').scrollTop;  //현재 웹페이지 스크롤양
  var htmlscrollHeight = document.querySelector('html').scrollHeight; //현재 웹페이지 실제높이
  var htmlHeight = document.querySelector('html').clientHeight; //현재 웹페이지 보이는 높이
  const currentpercent = htmlscrollMount / (htmlscrollHeight - htmlHeight) * 100
  document.querySelector(".progressbar").style.width =
    currentpercent + "%";

  if(htmlscrollCheck == true) {
    if (htmlscrollMount + htmlHeight > htmlscrollHeight - 100) {
        // alert('다 읽음')

        htmlscrollCheck = false;
    }
  };
});
