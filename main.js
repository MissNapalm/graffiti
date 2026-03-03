// main.js
// Warn in console if images fail to load

document.addEventListener('DOMContentLoaded', () => {
  const welcomeImg = document.getElementById('welcome-img');

  welcomeImg.addEventListener('error', () => {
    console.warn('welcome.png could not be loaded. Make sure it is in the same folder as index.html.');
  });

  // Check background image
  const bodyStyle = window.getComputedStyle(document.body);
  const bg = bodyStyle.backgroundImage;
  if (!bg || bg === 'none') {
    console.warn('wall.png could not be loaded. Make sure it is in the same folder as index.html.');
  }
});