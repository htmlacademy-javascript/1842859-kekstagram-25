import {body} from './big-picture.js';
import {isEscapeKey} from './util.js';
import {textHashtags, textDescription} from './form-valid.js';

const formUploadFile = document.querySelector('#upload-file');
const formEditorImg = document.querySelector('.img-upload__overlay');
const buttonImgUploadCancel = document.querySelector('.img-upload__cancel');

function showUploadFile () {
  formEditorImg.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onImgUploadOverlayEscKeydown);
}

//formUploadFile.addEventListener('change', showUploadFile);
showUploadFile();

function onImgUploadOverlayEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    cancelButtonUpload();
  }
}

function cancelButtonUpload () {
  formEditorImg.classList.add('hidden');
  body.classList.remove('modal-open');
  formUploadFile.value = '';

  document.removeEventListener('keydown', onImgUploadOverlayEscKeydown);
}

buttonImgUploadCancel.addEventListener('click', cancelButtonUpload);

textHashtags.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
textDescription.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
