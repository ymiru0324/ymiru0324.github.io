const memberList = () => {
  // 화면 render
  renderJoin(joins);
};

const renderJoin = (joins = JSON.parse(localStorage.getItem('joins'))) => {
  const tbody = document.querySelector("#tb-guestbook tbody");
  tbody.innerHTML = ""; // 초기화

  joins.forEach((join, index) => {
    const {userName, userId, datetime} = join;
    const html = `<tr>
      <td>${index + 1}</td>
      <td>${userName}</td>
      <td>${userId}</td>
      <td>${formatDatetime(datetime)}</td>
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
  renderJoin();
});