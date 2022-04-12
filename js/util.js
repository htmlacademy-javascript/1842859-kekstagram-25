//Функция, возвращающая случайное целое число из переданного диапазона включительно
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const ALERT_SHOW_TIME = 5000;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(1, 10);

const getRandomArrayElement = (elements) =>
  elements[getRandomIntInclusive(0, elements.length - 1)];


// Функция для проверки максимальной длины строки

function getMaxLength(checkedString, maxStringLength) {
  if (checkedString.length < maxStringLength) {
    return true;
  }
  return false;
}

getMaxLength('строка', 140);

const isEscapeKey = (evt) =>
  evt.key === 'Escape';


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.fontWeight = '700';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ffe753';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomIntInclusive, getRandomArrayElement, isEscapeKey, showAlert};