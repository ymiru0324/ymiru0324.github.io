const USER_URL ="/json/data.json";
const GITHUB_URL = "https://api.github.com/users/";

$(window).on('load', async () => {
  
  const {data: {id}} = await axios(USER_URL);
  const {data: {avatar_url}} = await axios(GITHUB_URL + id);

  const img = document.createElement('img');
  img.src = avatar_url
  document.querySelector('#AboutMe_pic_info').append(img);
});