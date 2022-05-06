document.guestbookFrm.addEventListener('submit', (e) => {
  const usernameVal = document.querySelector("#username").value;
  const contentVal = document.querySelector("#content").value;

  if(!usernameVal) {
    alert("이름을 작성해주세요")
    e.preventDefault();
    return;
  } else if(!contentVal) {
    alert("내용을 작성해주세요")
    e.preventDefault();
    return;
  } else {
    alert("작성 완료 !")
  }
});

/*
  제출
*/
const saveGuestbook = () => {
  // console.log("saveGuestbook 호출!");
  const usernameVal = document.querySelector("#username").value;
  const contentVal = document.querySelector("#content").value;

  // 방명록객체 생성
  const guestbook = new Guestbook(usernameVal, contentVal);
  // console.log(guestbook);

  // guestbooks배열 관리
  const guestbooks = JSON.parse(localStorage.getItem('guestbooks')) || [];
  // console.log(guestbooks);
  guestbooks.push(guestbook);

  localStorage.setItem('guestbooks', JSON.stringify(guestbooks));

  // 폼초기화
  document.guestbookFrm.reset();

  // 화면 render
  renderGuestbook(guestbooks);
};

class Guestbook {
  constructor(username, content, datetime = Date.now()){
    this.username = username;
    this.content = content;
    this.datetime = datetime;
  }
}

const renderGuestbook = (guestbooks = JSON.parse(localStorage.getItem('guestbooks'))) => {
  // guestbooks = guestbooks || JSON.parse(localStorage.getItem('guestbooks'));
  const tbody = document.querySelector("#tb-guestbook tbody");
  tbody.innerHTML = ""; // 초기화

  guestbooks.forEach((guestbook, index) => {
    const {username, content, datetime} = guestbook;
    const html = `<tr>
      <td>${index + 1}</td>  
      <td>${username}</td>
      <td>${formatDatetime(datetime)}</td>  
    </tr>
    <tr>
      <td colspan="3">${content}</td>
    </tr>
    <tr>
      <td colspan="3"><hr></td>  
    </tr>`;
    tbody.innerHTML += html;
  });
}

const formatDatetime = (millis) => {
  const d = new Date(millis);
  const f = (n) => n < 10 ? "0" + n : n;
  const YYYY = d.getFullYear();
  const MM = f(d.getMonth() + 1);
  const dd = f(d.getDate());
  const HH = f(d.getHours());
  const mm = f(d.getMinutes());

  return `${YYYY}/${MM}/${dd} ${HH}:${mm}`;
};

window.addEventListener('load', () => {
  renderGuestbook();
});

// textarea 길이제한
$(document).ready(function() {
  $('#content').on('keyup', function() {
      $('#textLimit').html("("+$(this).val().length+" / 100)");

      if($(this).val().length > 100) {
          $(this).val($(this).val().substring(0, 100));
          alert("100자 이하로 입력해 주세요 !")
          // $('#textLimit').html("(100 / 100)");
        }
      });
      $('#username').on('keyup', function() {
        if($(this).val().length > 10) {
          $(this).val($(this).val().substring(0, 10));
          alert("10자 이하로 입력해 주세요 !")
    }
  });
});
