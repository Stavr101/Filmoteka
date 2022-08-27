// const modalCloseBtn = document.querySelector('.close-btn');
// const backdrop = document.querySelector('.backdrop');

// modalCloseBtn.addEventListener('click', onModalCloseBtn);
// backdrop.addEventListener('click', onBackdropClick);
// document.addEventListener('keydown', onPushEsc);

const overlay = document.querySelector('.overlay');
// const modalCardMovie = document.querySelector('.modal_movie_card');

function onModalCloseBtn() {
  // modalCardMovie.innerHTML = '';

  overlay.classList.add('is-hidden');
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onModalCloseBtn();
  }
}

function onPushEsc(event) {
  if (event.code === 'Escape') {
    onModalCloseBtn();
  }
}

export { onBackdropClick, onPushEsc };