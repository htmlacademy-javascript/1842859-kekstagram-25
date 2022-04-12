import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('li');
const LIMIT_COMMENTS = 5;

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
};

function hideBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

const showBigPicture = ({url, description, comments, likes}) => {
  commentsLoader.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.social__caption').line = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comment-count').textContent = `${comments.length > 5 ? LIMIT_COMMENTS : comments.length} из ${comments.length} комментариев`;

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureEscKeydown);

  const cancelButton = bigPicture.querySelector('.big-picture__cancel');
  cancelButton.addEventListener('click', hideBigPicture);

  commentsList.innerHTML = '';

  drawsСomments(comments.slice(0, LIMIT_COMMENTS));

  function drawsСomments (arrayComments) {
    arrayComments.forEach((element) => {
      const commentElement = commentTemplate.cloneNode(true);
      commentElement.querySelector('.social__picture').src = element.avatar;
      commentElement.querySelector('.social__picture').alt = element.name;
      commentElement.querySelector('.social__text').textContent = element.message;

      commentsList.appendChild(commentElement);
    });
  }

  const uploadsСomments = () => {
    drawsСomments(comments.slice(LIMIT_COMMENTS, 10));
  };

  commentsLoader.addEventListener('click', uploadsСomments);

};

export {showBigPicture, body};
