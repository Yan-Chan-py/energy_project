// src/js/header.js

function setActiveNav() {
  // header може ще не бути в DOM, якщо partials ще не завантажились
  const header = document.querySelector('#header');
  if (!header) return;

  const homeLink = header.querySelector('#home');
  const favLink = header.querySelector('#favorites');

  // якщо цих елементів немає на сторінці / в partial — просто нічого не робимо
  if (!homeLink || !favLink) return;

  const path = window.location.pathname;
  const isFavorites = path.endsWith('favorites.html');

  homeLink.classList.toggle('active', !isFavorites);
  favLink.classList.toggle('active', isFavorites);

  // (опційно) якщо в тебе є span з текстом і ти міняєш класи — роби так само через перевірки
  const homeText = header.querySelector('#home-text');
  const favText = header.querySelector('#favorites-text');

  if (homeText) homeText.classList.toggle('black', !isFavorites);
  if (favText) favText.classList.toggle('black', isFavorites);
}

// 1) пробуємо при старті
window.addEventListener('DOMContentLoaded', setActiveNav);

// 2) пробуємо ще раз після того як partials точно вставились
window.addEventListener('partials:loaded', setActiveNav);

// 3) і на випадок навігації/переходів
window.addEventListener('popstate', setActiveNav);

export { setActiveNav };
