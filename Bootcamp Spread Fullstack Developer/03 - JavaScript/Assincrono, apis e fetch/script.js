'use strict';

const baseUrl = 'https://thatcopy.pw/catapi/rest/';
const catImg = document.getElementById('imgCat');
const changeCat = document.getElementById('changeCat');

const getCats = async () => {
  try {
    const data = await fetch(baseUrl);
    const json = await data.json();
    return json.webpurl;
  } catch (error) {
    console.log(error.message);
  }
};

const loadImg = async () => {
  catImg.src = await getCats();
};

changeCat.addEventListener('click', loadImg);

loadImg();
