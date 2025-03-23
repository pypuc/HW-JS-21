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



const box = document.getElementById('box');

document.addEventListener('mousemove', _.debounce((event) => {
  box.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}, 100));
