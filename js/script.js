(() => {
  // Mobile nav
  const container = document.getElementById('container');

  document.getElementById('main-nav-toggle').addEventListener('click', (e) => {
    container.classList.toggle('mobile-nav-on');
    e.stopPropagation();
  }, false);

  document.getElementById('wrap').addEventListener('click', (e) => {
    if (!container.classList.contains('mobile-nav-on')) return;
    container.classList.remove('mobile-nav-on');
  }, false);

  // goto top of page
  document.getElementById('gotoTop').addEventListener('click', (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, false);

})();
