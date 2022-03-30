const formUploadImg = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(formUploadImg, {
  classTo: 'text__hashtags-label',
  errorTextParent: 'text__hashtags-label',
  errorTextClass: 'img-upload__error-text', //стилизовать в scc
});

//вылидация поля для комментариев

function validateComments (value) {
  return value.length <= 140;
}
pristine.addValidator(textDescription, validateComments, 'Длина не может быть больше 140 символов');


//валидацифия поля для хэш-тегов

const getMaxLengthArray = () => {
  const MaxLengthArray = textHashtags.value.split(' ').length;
  if (MaxLengthArray <= 5) {
    return true;
  }
  return false;
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


formUploadImg.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {textHashtags, textDescription};
