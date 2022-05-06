const URL = "https://v1.nocodeapi.com/yongmini/instagram/PWdXSdDeIFznJdNl"


$(".btn-cardOpen").click(() => {
  $("#insta-card_container")
    .slideToggle()
});


$(window).on('load',  async() => {
  const response = await axios(URL);
  const {data: {data}} = response; // response.data.id
  // const {data: {captiondata}} = response; // response.data.id

  const img0 = document.createElement('img');
  img0.src = data[0].media_url;
  document.querySelector('#insta-img-0').append(img0);
  const text0 = document.createElement('p');
  text0.innerHTML = data[0].caption;
  document.querySelector('#card-text-0').append(text0);

  const img1 = document.createElement('img');
  img1.src = data[1].media_url;
  document.querySelector('#insta-img-1').append(img1);
  const text1 = document.createElement('p');
  text1.innerHTML = data[1].caption;
  document.querySelector('#card-text-1').append(text1);

  const img2 = document.createElement('img');
  img2.src = data[2].media_url;
  document.querySelector('#insta-img-2').append(img2);
  const text2 = document.createElement('p');
  text2.innerHTML = data[2].caption;
  document.querySelector('#card-text-2').append(text2);

  const img3 = document.createElement('img');
  img3.src = data[3].media_url;
  document.querySelector('#insta-img-3').append(img3);
  const text3 = document.createElement('p');
  text3.innerHTML = data[3].caption;
  document.querySelector('#card-text-3').append(text3);

  const img4 = document.createElement('img');
  img4.src = data[4].media_url;
  document.querySelector('#insta-img-4').append(img4);
  const text4 = document.createElement('p');
  text4.innerHTML = data[4].caption;
  document.querySelector('#card-text-4').append(text4);

  const img5 = document.createElement('img');
  img5.src = data[5].media_url;
  document.querySelector('#insta-img-5').append(img5);
  const text5 = document.createElement('p');
  text5.innerHTML = data[5].caption;
  document.querySelector('#card-text-5').append(text5);
});
