import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('li');
const socialCommentCount = document.querySelector('.social__comment-count');
let limitComments = 5;

const showBigPicture = ({url, description, comments, likes}) => {
  commentsLoader.classList.remove('hidden');

  const onBigPictureEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideBigPicture();
    }
  };

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.social__caption').line = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comment-count').textContent = `${comments.length > 5 ? limitComments : comments.length} из ${comments.length} комментариев`;

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureEscKeydown);

  const cancelButton = bigPicture.querySelector('.big-picture__cancel');
  cancelButton.addEventListener('click', hideBigPicture);

  commentsList.innerHTML = '';

  if (limitComments >= comments.length) {
    limitComments = comments.length;
    commentsLoader.classList.add('hidden');
  }

  drawsСomments(comments.slice(0, limitComments));

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
    drawsСomments(comments.slice(limitComments, limitComments + 5));
    limitComments = limitComments + 5;
    if (limitComments >= comments.length) {
      limitComments = comments.length;
      commentsLoader.classList.add('hidden');
    }
    socialCommentCount.textContent = `${comments.length > 5 ? limitComments : comments.length} из ${comments.length} комментариев`;
  };

  function hideBigPicture () {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    limitComments = 5;
    commentsList.innerHTML = '';


    document.removeEventListener('keydown', onBigPictureEscKeydown);
    commentsLoader.removeEventListener('click', uploadsСomments);
  }

  commentsLoader.addEventListener('click', uploadsСomments);

};

export {showBigPicture, body};
