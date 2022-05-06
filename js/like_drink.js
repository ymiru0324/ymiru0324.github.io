var cnt = 0;
var inum = $(".drink_slide img").length; // inum = 이미지의 갯수

function auto() {
  cnt++;
  if (cnt == inum) { // if문의 실행문이 한줄일때에만 붙여서 쓰기 가능
    cnt = 0
  };
  $(".drink_slide").animate({"left": -805 * cnt}, 500);
};

setInterval("auto()", 3000);