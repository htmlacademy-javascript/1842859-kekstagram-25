import {body} from './big-picture.js';
import {isEscapeKey} from './util.js';

const formUploadFile = document.querySelector('#upload-file');
const formEditorImg = document.querySelector('.img-upload__overlay');
const buttonImgUploadCancel = document.querySelector('.img-upload__cancel');

function showUploadFile () {
  formEditorImg.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onimgUploadOverlayEscKeydown);
}

formUploadFile.addEventListener('click', showUploadFile);

function onimgUploadOverlayEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    cancelButtonUpload();
  }
}

function cancelButtonUpload () {
  formEditorImg.classList.add('hidden');
  body.classList.remove('modal-open');
  formUploadFile.value = '';

  document.removeEventListener('keydown', onimgUploadOverlayEscKeydown);
}

buttonImgUploadCancel.addEventListener('click', cancelButtonUpload);
