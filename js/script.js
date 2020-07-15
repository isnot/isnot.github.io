(() => {
  // Mobile nav
  const container = document.getElementById('container');

  document.getElementById('main-nav-toggle').addEventListener('click', () => {
    container.classList.toggle('mobile-nav-on');
  }, false);

  document.getElementById('wrap').addEventListener('click', () => {
    if (!container.classList.contains('mobile-nav-on')) return;
    container.classList.remove('mobile-nav-on');
  }, false);
})();
