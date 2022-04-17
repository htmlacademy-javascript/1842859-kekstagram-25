import {body} from './big-picture.js';
import {isEscapeKey} from './util.js';
import {textHashtags, textDescription} from './form-valid.js';
import {effectLevelSlider} from './slider.js';

const formUploadFile = document.querySelector('#upload-file');
const formEditorImg = document.querySelector('.img-upload__overlay');
const buttonImgUploadCancel = document.querySelector('.img-upload__cancel');
const textHashtagsLabel = document.querySelector('.text__hashtags-label');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.img-upload__effect-level');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const resetForm = () => {
  formUploadFile.value = '';
  textHashtagsLabel.value = '';
  effectLevelSlider.noUiSlider.reset();
  imgUploadPreview.style.transform = '';
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = '';
  effectLevel.classList.add('hidden');
};

function showUploadFile () {
  formEditorImg.classList.remove('hidden');
  body.classList.add('modal-open');

  const file = formUploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgUploadPreview.src = URL.createObjectURL(file);
  }

  document.addEventListener('keydown', onImgUploadOverlayEscKeydown);
}

const uploadFile = () => {
  formUploadFile.addEventListener('change', showUploadFile);
};

function onImgUploadOverlayEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    cancelButtonUpload();
  }
}

function cancelButtonUpload () {
  formEditorImg.classList.add('hidden');
  body.classList.remove('modal-open');
  resetForm();
  document.removeEventListener('keydown', onImgUploadOverlayEscKeydown);
}


buttonImgUploadCancel.addEventListener('click', cancelButtonUpload);

textHashtags.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
textDescription.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

export {showUploadFile, cancelButtonUpload, uploadFile};
