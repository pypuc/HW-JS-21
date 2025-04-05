function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

slider.addEventListener("input", debounce(() => {
  image.style.transform = `scale(${slider.value / 100})`;
}, 100));


// 2 

const box = document.querySelector('.box');

document.addEventListener('mousemove', _.debounce((event) => {
  box.style.transform = `translate(${event.clientX - 25}px, ${event.clientY - 25}px)`;
}, 100));



