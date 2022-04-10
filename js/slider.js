// слайдер
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.img-upload__effect-level');


noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const stylesMap = {
  chrome:'grayscale',
  sepia:'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
};

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  const activeEfect = document.querySelector('.effects__radio:checked').value;
  if (activeEfect === 'marvin') {
    imgUploadPreview.style.filter = `${stylesMap[activeEfect]}(${effectLevelValue.value}%)`;
  } else if (activeEfect === 'phobos') {
    imgUploadPreview.style.filter = `${stylesMap[activeEfect]}(${effectLevelValue.value}px)`;
  } else {
    imgUploadPreview.style.filter = `${stylesMap[activeEfect]}(${effectLevelValue.value})`;
  }
});

document.querySelector('.img-upload__effects').addEventListener('change', (evt) => {
  if (evt.target.value === 'chrome') {
    effectLevel.classList.remove('hidden');
    imgUploadPreview.className = 'effects__preview--chrome';
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else if (evt.target.value === 'sepia') {
    effectLevel.classList.remove('hidden');
    imgUploadPreview.className = 'effects__preview--sepia';
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else if (evt.target.value === 'marvin') {
    effectLevel.classList.remove('hidden');
    imgUploadPreview.className = 'effects__preview--marvin';
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  } else if (evt.target.value === 'phobos') {
    effectLevel.classList.remove('hidden');
    imgUploadPreview.className = 'effects__preview--phobos';
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else if (evt.target.value === 'heat') {
    effectLevel.classList.remove('hidden');
    imgUploadPreview.className = 'effects__preview--heat';
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else if (evt.target.value === 'none') {
    effectLevel.classList.add('hidden');
    imgUploadPreview.className = '';
    imgUploadPreview.style.filter = 'none';
  }
});

export {effectLevelSlider};

