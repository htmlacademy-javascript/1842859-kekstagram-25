import {randomUserImages} from './picture.js';
import './image-scale.js';
import {uploadFile} from './form.js';
import {getData} from './data-server.js';
import {setFilterFormClikHandler, hideFilter, showFilter} from './sorting-photos.js';

hideFilter();
const cb = (userImages) => {
  setFilterFormClikHandler(userImages);
  randomUserImages(userImages);
  showFilter();
};

getData(cb);
uploadFile();

