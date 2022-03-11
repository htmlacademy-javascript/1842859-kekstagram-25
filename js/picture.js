import {createDescription} from './data.js';

const picturesListElement = document.querySelector('.big-picture__social');
const patternPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const randomUserImages = createDescription();

const picturesListFragment = document.createDocumentFragment();

randomUserImages.forEach(({url, comments, likes}) => {
  const pictureElement = patternPicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').number = likes;
  picturesListFragment.appendChild(pictureElement);
});

picturesListElement.appendChild(picturesListFragment);

