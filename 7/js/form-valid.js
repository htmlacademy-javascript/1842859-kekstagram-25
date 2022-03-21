import {getMaxLength} from './util.js';

const formUploadImg = document.querySelector('.img-upload__form');
//const formUploadText = document.querySelector('.img-upload__text');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(formUploadImg, {
  classTo: 'img-upload__text',
  errorTextParent: 'text__description',
  errorTextClass: 'img-upload__error-text', //стилизовать в scc
});

/*pristine.addValidator(
  textDescription,
  getMaxLength(textDescription.value, 140),
  'Длина от 2 до 140 символов'
);*/

function validateComments (value) {
  return value.length >= 2 && value.length <= 140;
}

pristine.addValidator(
  textDescription,
  validateComments,
  'Длина от 2 до 140 символов');

const textHashtagsArray = textHashtags.value.split(' ');

const getMaxLengthArray = () => {
  if (textHashtagsArray.length <= 5) {
    return true;
  }
  return false;
};

const validReg= (value) => {
  for (let i = 0; i < textHashtagsArray.length; i++) {
    if (re.test(value.textHashtagsArray[i])) {
      return false;
    }
    return true;
  }
};


pristine.addValidator(textHashtags, getMaxLengthArray, 'не больше 5 хэш-тегов');
pristine.addValidator(textHashtags, validReg, 'недопустимые символы');

formUploadImg.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

/*
  classTo: 'form__item', // Элемент, на который будут добавляться классы
  errorClass: 'form__item--invalid', // Класс, обозначающий невалидное поле
  successClass: 'form__item--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'form__item', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'form__error' // Класс для элемента с текстом ошибки
*/
