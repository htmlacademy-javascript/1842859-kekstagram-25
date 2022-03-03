import {getRandomIntInclusive} from './util.js';
import {getRandomArrayElement} from './util.js';

// домашнее задание 4.9

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Маша',
  'Катя',
  'Саша',
  'Леша',
  'Аня',
  'Дима',
];

const SIMILAR_PHOTOS_COUNT = 25;

const createComments = () => ({
  id: Math.random()+Date.now(),
  avatar: getRandomArrayElement(AVATARS),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createDescription = (count) => {
  const res = [];
  for (let i = 0; i < count; i++) {
    res.push ({
      id: i+1,
      url: `photos/${i+1}.jpg`,
      description: getRandomArrayElement(MESSAGES),
      likes: getRandomIntInclusive(15, 200),
      comments: Array.from({length: getRandomIntInclusive(1, 10)}, createComments),
    });
  }
  return res;
};

createDescription(SIMILAR_PHOTOS_COUNT);
