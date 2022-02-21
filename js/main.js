//Функция, возвращающая случайное целое число из переданного диапазона включительно
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(1, 10);


// Функция для проверки максимальной длины строки

//const maxStringLength = 140;

function getMaxLength(checkedString, maxStringLength) {
  if (checkedString.length < maxStringLength) {
    return true;
  }
  return false;
}
getMaxLength('строка', 140);

