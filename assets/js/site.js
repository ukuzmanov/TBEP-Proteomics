/* publications filter */
(function () {
  var chips = document.querySelectorAll('.pub-filter .chip');
  if (!chips.length) return;
  function apply(lab) {
    var any = false;
    document.querySelectorAll('[data-year]').forEach(function (g) {
      var n = 0;
      g.querySelectorAll('.pub').forEach(function (li) {
        var show = !lab || (' ' + li.getAttribute('data-labs') + ' ').indexOf(' ' + lab + ' ') >= 0;
        li.hidden = !show; if (show) n++;
      });
      g.hidden = !n; if (n) any = true;
    });
    document.getElementById('pub-empty').hidden = any;
  }
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
      c.classList.add('on'); c.setAttribute('aria-pressed', 'true'); apply(c.getAttribute('data-lab'));
    });
  });
})();
(function () {
  document.documentElement.classList.add('js');
  var t = document.querySelector('.menu-toggle');
  if (t) t.addEventListener('click', function () { var o = document.body.classList.toggle('menu-open'); t.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  var fig = document.querySelector('.walk-frame');
  if (!fig) return;
  var v = fig.querySelector('video'), btn = fig.querySelector('.walk-toggle');
  var PAUSE = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3.5" y="2.5" width="3" height="11" rx="1"/><rect x="9.5" y="2.5" width="3" height="11" rx="1"/></svg>';
  var PLAY = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4.5 2.6v10.8L13 8z"/></svg>';
  var userPaused = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function sync() { var p = v.paused; fig.classList.toggle('paused', p); btn.innerHTML = p ? PLAY : PAUSE; btn.setAttribute('aria-label', p ? 'Play video' : 'Pause video'); }
  if (userPaused) { v.removeAttribute('autoplay'); v.pause(); }
  btn.addEventListener('click', function () { if (v.paused) { userPaused = false; v.play(); } else { userPaused = true; v.pause(); } });
  v.addEventListener('play', sync); v.addEventListener('pause', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      if (es[0].isIntersecting) { if (!userPaused) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } } else if (!v.paused) { v.pause(); }
    }, { threshold: 0.25 }).observe(fig);
  }
  sync();
})();
