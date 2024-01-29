const questionWrappers = document.querySelectorAll('.q-wrapper');

questionWrappers.forEach((wrapper) => {
  wrapper.addEventListener('click', showAnswer);
  wrapper.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
      showAnswer(e);
    }
  });
});

function showAnswer(e) {
  questionWrappers.forEach((wrapper) => {
    if (wrapper == e.currentTarget) {
      wrapper.firstElementChild.classList.toggle('h3-active');
      wrapper.lastElementChild.classList.toggle('svg-animation');
      wrapper.nextElementSibling.classList.toggle('p-visible');
    } else {
      wrapper.firstElementChild.classList.remove('h3-active');
      wrapper.lastElementChild.classList.remove('svg-animation');
      wrapper.nextElementSibling.classList.remove('p-visible');
    }
  });
}