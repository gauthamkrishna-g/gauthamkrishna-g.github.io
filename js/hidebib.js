// Show/hide helpers for abstracts, bibtex entries, and collapsible lists.
// Based on http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js

function isHidden(el) {
  return window.getComputedStyle(el).display === 'none';
}

function toggleblock(blockId) {
  var el = document.getElementById(blockId);
  if (el) el.style.display = isHidden(el) ? 'block' : 'none';
}

function togglebib(paperId) {
  var paper = document.getElementById(paperId);
  var bib = paper && paper.getElementsByTagName('pre')[0];
  if (bib) bib.style.display = isHidden(bib) ? 'block' : 'none';
}

// Toggles a block and flips the link text between "show <label>" and "hide <label>".
function togglemore(blockId, link, label) {
  var el = document.getElementById(blockId);
  if (!el) return false;
  var show = isHidden(el);
  el.style.display = show ? 'block' : 'none';
  link.textContent = (show ? 'hide ' : 'show ') + label;
  return false;
}

// Section nav: pin it on wide screens once scrolled past, and highlight the section in view.
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.toc');
  if (!nav) return;
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')).filter(function (a) {
    return a.getAttribute('href').length > 1;
  });
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var ticking = false, holdUntil = 0;
  function setActive(idx) {
    links.forEach(function (a, i) { a.classList.toggle('active', i === idx); });
  }
  function update() {
    ticking = false;
    var stuck = window.innerWidth >= 960 && nav.getBoundingClientRect().top <= 0;
    nav.classList.toggle('stuck', stuck);
    if (!stuck) { setActive(-1); return; }
    if (Date.now() < holdUntil) return; // a clicked pill keeps its highlight while the page scrolls to it
    // Headings jump to 60px under the bar (scroll-margin-top), so look a little past that.
    var line = nav.getBoundingClientRect().bottom + 24, current = -1;
    for (var i = 0; i < targets.length; i++) {
      if (targets[i] && targets[i].getBoundingClientRect().top <= line) current = i;
    }
    // At the very bottom the last headings can never reach the bar, so take the last one on screen.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      for (var k = 0; k < targets.length; k++) {
        if (targets[k] && targets[k].getBoundingClientRect().top < window.innerHeight) current = k;
      }
    }
    setActive(current);
  }
  links.forEach(function (a, i) {
    a.addEventListener('click', function () { holdUntil = Date.now() + 1000; setActive(i); });
  });
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
});

// Publication sub-nav: show how many entries each category holds.
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.pubnav a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    var heading = document.getElementById(links[i].getAttribute('href').slice(1));
    var table = heading && heading.nextElementSibling;
    while (table && !(table.tagName === 'TABLE' && table.classList.contains('papers'))) table = table.nextElementSibling;
    if (!table) continue;
    var count = table.querySelectorAll('tr').length;
    if (!count) continue;
    var b = document.createElement('b');
    b.textContent = count;
    links[i].appendChild(b);
  }
});
