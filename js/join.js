document.joinFrm.addEventListener('submit', (e) => {
  const userNameVal = document.querySelector("#userName").value;
  const userIdVal = document.querySelector("#userId").value;
  const userPwVal = document.querySelector("#userPw").value;
  const userPwCheckVal = document.querySelector("#userPwCheck").value;

  // 정규표현식 검사
  const regExpName = /^[가-힣]{2,}$/; // 한글 2글자 이상만 허용
  const regExpId1 = /^[a-z][a-z\d]{3,11}$/; // 영소문자로 시작하는 4 ~ 12 글자
  const regExpId2 = /[0-9]/; // 아이디 숫자 하나 이상 포함

  if(!userNameVal) {
    alert("이름을 작성해주세요")
    e.preventDefault();
    return;
  } else if (regExpName.test(userNameVal) == false) {
    alert("올바른 이름 형식이 아닙니다 ! (한글 2글자 이상)")
    e.preventDefault();
    return;
  } else if(!userIdVal) {
    alert("아이디를 작성해주세요")
    e.preventDefault();
    return;
  } else if(regExpId1.test(userIdVal) == false) {
    alert("올바른 아이디 형식이 아닙니다 ! (영소문자로 시작하는 4~12글자)")
    e.preventDefault();
    return;
  } else if(regExpId2.test(userIdVal) == false) {
    alert("올바른 아이디 형식이 아닙니다 ! (아이디 숫자 1글자 이상 포함)")
    e.preventDefault();
    return;
  } else if(!userPwVal) {
    alert("비밀번호를 작성해주세요")
    e.preventDefault();
    return;
  } else if(!userPwCheckVal) {
    alert("비밀번호 확인을 작성해주세요")
    e.preventDefault();
    return;
  } else if (userPwVal != userPwCheckVal) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  } else if(userPwVal.length < '6') {
    alert('비밀번호를 6자리 이상 입력해주세요 !')
    e.preventDefault();
    return;
  } else if (userNameVal.value != "" && userIdVal.value != "" && userPwVal.value != "" && userPwCheckVal.value != "") {
    alert("회원가입 완료 !")
    location.href = '../index.html'
  }
});

/*
  제출
*/
const saveJoin = () => {
  // console.log("saveJoin 호출!");
  const userNameVal = document.querySelector("#userName").value;
  const userIdVal = document.querySelector("#userId").value;
  const userPwVal = document.querySelector("#userPw").value;
  const userPwCheckVal = document.querySelector("#userPwCheck").value;

  const join = new Join(userNameVal, userIdVal, userPwVal, userPwCheckVal);
  // console.log(join);

  // guestbooks배열 관리
  const joins = JSON.parse(localStorage.getItem('joins')) || [];
  // console.log(joins);
  joins.push(join);

  localStorage.setItem('joins', JSON.stringify(joins));

  // 폼초기화
  document.joinFrm.reset();
};

class Join {
  constructor(userName, userId, userPw, userPwCheck, datetime = Date.now()){
    this.userName = userName;
    this.userId = userId;
    this.userPw = userPw;
    this.userPwCheck = userPwCheck;
    this.datetime = datetime;
  }
}