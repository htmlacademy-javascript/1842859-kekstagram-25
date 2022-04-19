import {shuffleArray, debounce} from './util.js';
import {randomUserImages, clearPhotosList} from './picture.js';

const QUANTITY_RANDOM_PHOTOS = 10;
const RERENDER_DELAY = 500;

const imgFiltersButtons = document.querySelectorAll('.img-filters__button');
const imgFiltersForm = document.querySelector('.img-filters__form');
const imgFilters = document.querySelector('.img-filters');

const sortingPhotos = (photoA, photoB) => {
  const rankA = photoA.comments.length;
  const rankB = photoB.comments.length;
  return rankB - rankA;
};

const discussedUserImages = (userImages) => userImages.slice().sort(sortingPhotos);


const removeActiveClass = () => {
  imgFiltersButtons.forEach((button) => {button.classList.remove('img-filters__button--active');});
};

const setFilterFormClikHandler = (userImages) => {
  imgFiltersForm.addEventListener('click', debounce((evt) => {
    evt.preventDefault();
    removeActiveClass();
    clearPhotosList();

    evt.target.classList.add('img-filters__button--active');

    if (evt.target.id === 'filter-discussed') {
      const discussedImages = discussedUserImages(userImages);
      randomUserImages(discussedImages);
    }
    else if (evt.target.id === 'filter-default') {
      randomUserImages(userImages);
    }
    else if (evt.target.id === 'filter-random') {
      const randomPhotos = shuffleArray(userImages).slice(0, QUANTITY_RANDOM_PHOTOS);
      randomUserImages(randomPhotos);
    }
  }, RERENDER_DELAY));
};

const hideFilter = () => {
  imgFilters.classList.add('img-filters--inactive');
};
const showFilter = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

export {sortingPhotos, setFilterFormClikHandler, hideFilter, showFilter};
