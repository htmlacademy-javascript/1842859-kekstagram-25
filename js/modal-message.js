import {body} from './big-picture.js';
import {isEscapeKey} from './util.js';

const errorModal = document.querySelector('#error')
  .content
  .querySelector('.error');
const successModal = document.querySelector('#success')
  .content
  .querySelector('.success');

const closeModal = (name) => {
  document.querySelector(`.${name}`).remove();
};

const closeModalSuccessbyEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal('success');
    document.removeEventListener('keydown', closeModalSuccessbyEsc);
  }
};

const closeModalErrorbyEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal('error');
    document.removeEventListener('keydown', closeModalErrorbyEsc);
  }
};

const onErrorLoad = () => {
  const errorListFragment = document.createDocumentFragment();
  const errorElement = errorModal.cloneNode(true);
  errorListFragment.appendChild(errorElement);
  body.appendChild(errorListFragment);
  errorElement.addEventListener('click', () => {
    closeModal('error');
    document.removeEventListener('keydown', closeModalErrorbyEsc);
  });
  document.addEventListener('keydown', closeModalErrorbyEsc);
};

const onSuccessLoad = () => {
  const successListFragment = document.createDocumentFragment();
  const successElement = successModal.cloneNode(true);
  successListFragment.appendChild(successElement);
  body.appendChild(successListFragment);
  successElement.addEventListener('click', () => {
    closeModal('success');
    document.removeEventListener('keydown', closeModalSuccessbyEsc);
  });
  document.addEventListener('keydown', closeModalSuccessbyEsc);
};


export {onErrorLoad, onSuccessLoad};
