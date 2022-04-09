import {randomUserImages} from './picture.js';

//получение данных с сервера

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    randomUserImages(photos);
  });

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {sendData};


