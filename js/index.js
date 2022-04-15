import gsap from 'gsap';
import Splitting from 'splitting';
import throttle from 'lodash.throttle';

const hero = document.querySelector('[data-hero]');

// Menu
const menuButton = document.querySelector('[data-btn="menu"]');
const menu = document.querySelector('[data-menu]');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  menuButton.classList.toggle('is-active');
});

// Cursor
const onMouseMove = e => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);
};
