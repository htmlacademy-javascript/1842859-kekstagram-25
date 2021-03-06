import {showBigPicture} from './big-picture.js';

const picturesListElement = document.querySelector('.pictures.container');
const patternPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const randomUserImages = (userImages) => {
  const picturesListFragment = document.createDocumentFragment();

  userImages.forEach(({url, description, comments, likes}) => {
    const pictureElement = patternPicture.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture({url, description, comments, likes});
    });
    picturesListFragment.appendChild(pictureElement);
  });

  picturesListElement.appendChild(picturesListFragment);
};

const clearPhotosList = () => {
  document.querySelectorAll('.picture').forEach((photo) => {photo.remove();});
};

export {randomUserImages, clearPhotosList};
