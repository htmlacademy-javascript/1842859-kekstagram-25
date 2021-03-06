import {cancelButtonUpload} from './form.js';
import {sendData} from './data-server.js';
import {onErrorLoad, onSuccessLoad} from './modal-message.js';

const COMMENT_LENGTH = 140;
const QUANTITY_HASHTAGS = 5;

const formUploadImg = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const imgUploadSubmit = document.querySelector('.img-upload__submit');

const pristine = new Pristine(formUploadImg, {
  classTo: 'text__hashtags-label',
  errorTextParent: 'text__hashtags-label',
  errorTextClass: 'img-upload__error-text', //стилизовать в scc
});

//вылидация поля для комментариев

const validateComments = (value) => value.length <= COMMENT_LENGTH;
pristine.addValidator(textDescription, validateComments, 'Длина не может быть больше 140 символов');


//валидацифия поля для хэш-тегов

const getMaxLengthArray = () => {
  const MaxLengthArray = textHashtags.value.split(' ').length;
  return MaxLengthArray <= QUANTITY_HASHTAGS;
};
pristine.addValidator(textHashtags, getMaxLengthArray, 'не больше 5 хэш-тегов');

const validReg= () => {
  const hashtagsArray = textHashtags.value.split(' ').filter((element) => element !== '');
  for (let i = 0; i < hashtagsArray.length; i++) {
    if (!re.test(hashtagsArray[i])) {
      return false;
    }
  }
  return true;
};
pristine.addValidator(textHashtags, validReg, 'содержит недопустимые символы');


const validUniqueHashtags = () => {
  const hashtagsArray = textHashtags.value.split(' ').filter((element) => element !== '').map((element) => element.toUpperCase());
  const array = hashtagsArray.length;
  for (let i = 0; i < array-1; i++) {
    for (let j = i+1; j < array; j++) {
      if (hashtagsArray[i] === hashtagsArray[j]) {
        return false;
      }
    }
  }
  return true;
};
pristine.addValidator(textHashtags, validUniqueHashtags, 'содержит одинаковые хэш-теги');

const blockimgUploadSubmit = () => {
  imgUploadSubmit.disabled = true;
  imgUploadSubmit.textContent = 'Публикую...';
};

const unblockimgUploadSubmit = () => {
  imgUploadSubmit.disabled = false;
  imgUploadSubmit.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  formUploadImg.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockimgUploadSubmit();
      sendData(
        () => {
          onSuccess();
          unblockimgUploadSubmit();
          cancelButtonUpload();
          onSuccessLoad();
        },
        () => {
          onErrorLoad();
          cancelButtonUpload();
          unblockimgUploadSubmit();
        },
        new FormData(evt.target),
      );
    }
  });
};

setUserFormSubmit(cancelButtonUpload);

export {textHashtags, textDescription, setUserFormSubmit};
