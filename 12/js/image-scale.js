// масштаб изображения
const controlSmaller = document.querySelector('.scale__control--smaller');
const controlValue = document.querySelector('.scale__control--value');
const controlBigger = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview img');


controlBigger.addEventListener('click', () => {
  if (parseInt(controlValue.value, 10) < 100) {
    controlValue.value = `${parseInt(controlValue.value, 10) + 25}%`;
    imgUploadPreview.style.transform = `scale(${parseInt(controlValue.value, 10) / 100})`;
  }
});

controlSmaller.addEventListener('click', () => {
  if (parseInt(controlValue.value, 10) > 25) {
    controlValue.value = `${parseInt(controlValue.value, 10) - 25}%`;
    imgUploadPreview.style.transform = `scale(${parseInt(controlValue.value, 10) / 100})`;
  }
});
