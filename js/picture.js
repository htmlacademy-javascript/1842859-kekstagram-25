import {createDescription} from './data.js';

const picturesListElement = document.querySelector('.pictures.container');
const patternPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const randomUserImages = createDescription(11);

const picturesListFragment = document.createDocumentFragment();

randomUserImages.forEach(({url, comments, likes}) => {
  const pictureElement = patternPicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  picturesListFragment.appendChild(pictureElement);
});

picturesListElement.appendChild(picturesListFragment);

