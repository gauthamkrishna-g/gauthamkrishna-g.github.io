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

// Gliding highlight for a row of pill links: a navy layer holding white copies of the labels sits
// over the row, clipped to one pill. Moving the clip (a CSS transition on clip-path) slides the
// highlight between pills, and labels turn white exactly where it covers them. The layer is built
// the first time the row is hovered, focused, or (for the section nav) given a current section.
function makeGlide(bar, skip) {
  var layer = null, copies = [], target = null, resting = null, hovering = false;
  function pills() {
    return Array.prototype.filter.call(bar.children, function (c) {
      return c.tagName === 'A' && !(skip && c.matches(skip));
    });
  }
  // Lay the copies exactly over their pills (pills move when the bar pins or the window resizes).
  function sync() {
    var ps = pills();
    while (copies.length < ps.length) copies.push(layer.appendChild(document.createElement('span')));
    layer.style.left = layer.style.top = '0px';
    var o = layer.getBoundingClientRect(), rs = ps.map(function (p) { return p.getBoundingClientRect(); });
    var u = { l: Infinity, t: Infinity, r: -Infinity, b: -Infinity };
    rs.forEach(function (r) {
      u.l = Math.min(u.l, r.left); u.t = Math.min(u.t, r.top); u.r = Math.max(u.r, r.right); u.b = Math.max(u.b, r.bottom);
    });
    layer.style.left = (u.l - o.left) + 'px'; layer.style.top = (u.t - o.top) + 'px';
    layer.style.width = (u.r - u.l) + 'px'; layer.style.height = (u.b - u.t) + 'px';
    ps.forEach(function (p, i) {
      var c = copies[i].style, cs = getComputedStyle(p), r = rs[i];
      copies[i].textContent = p.textContent;
      c.left = (r.left - u.l) + 'px'; c.top = (r.top - u.t) + 'px'; c.width = r.width + 'px'; c.height = r.height + 'px';
      c.fontFamily = cs.fontFamily; c.fontSize = cs.fontSize; c.fontWeight = cs.fontWeight;
      c.lineHeight = cs.lineHeight; c.letterSpacing = cs.letterSpacing;
      c.paddingTop = cs.paddingTop; c.paddingRight = cs.paddingRight; c.paddingBottom = cs.paddingBottom; c.paddingLeft = cs.paddingLeft;
    });
    return u;
  }
  function place(el, instant) {
    target = el;
    if (!el) { if (layer) layer.classList.remove('on'); return; }
    if (!layer) {
      layer = bar.appendChild(document.createElement('span'));
      layer.className = 'glide';
      layer.setAttribute('aria-hidden', 'true');
      bar.classList.add('has-glide');
    }
    var u = sync(), r = el.getBoundingClientRect();
    var clip = 'inset(' + (r.top - u.t) + 'px ' + (u.r - r.right) + 'px ' +
               (u.b - r.bottom) + 'px ' + (r.left - u.l) + 'px round 999px)';
    if (instant || !layer.classList.contains('on')) {
      layer.style.transition = 'none'; // appear in place rather than sliding in from the last spot
      layer.style.clipPath = clip;
      void layer.offsetWidth;
      layer.style.transition = '';
    } else {
      layer.style.clipPath = clip;
    }
    layer.classList.add('on');
  }
  // The pill under a node; null for other content in the bar (an open abstract, the home link);
  // undefined for the bar itself, i.e. a gap between pills, where the highlight stays put.
  function pillOf(node) {
    for (; node && node !== bar; node = node.parentNode) {
      if (node.parentNode === bar) return node.tagName === 'A' && !(skip && node.matches(skip)) ? node : null;
    }
  }
  if (window.matchMedia('(hover: hover)').matches) {
    bar.addEventListener('mouseover', function (e) {
      var p = pillOf(e.target);
      if (p === undefined) return;
      hovering = !!p;
      if (p ? p !== target : target !== resting) place(p || resting);
    });
    bar.addEventListener('mouseleave', function () { hovering = false; place(resting); });
  }
  bar.addEventListener('focusin', function (e) { var p = pillOf(e.target); if (p) place(p); });
  bar.addEventListener('focusout', function () { if (!hovering) place(resting); });
  var g = {
    rest: function (el) { resting = el; if (!hovering) place(el); },
    refresh: function () { if (target) place(target, true); }
  };
  window.addEventListener('resize', g.refresh);
  if (document.fonts) document.fonts.ready.then(g.refresh);
  return g;
}

// Section nav: pin it on wide screens once scrolled past, and highlight the section in view.
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.toc');
  if (!nav) return;
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')).filter(function (a) {
    return a.getAttribute('href').length > 1;
  });
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var glide = makeGlide(nav, '.home');
  Array.prototype.forEach.call(document.querySelectorAll('.pubnav, .paper, .tlinks'), function (bar) { makeGlide(bar); });
  var ticking = false, holdUntil = 0, wasStuck = false;
  function setActive(idx) {
    links.forEach(function (a, i) { a.classList.toggle('active', i === idx); });
    glide.rest(idx >= 0 ? links[idx] : null);
  }
  function update() {
    ticking = false;
    var stuck = window.innerWidth >= 960 && nav.getBoundingClientRect().top <= 0;
    nav.classList.toggle('stuck', stuck);
    if (stuck !== wasStuck) { wasStuck = stuck; glide.refresh(); } // pills change size when the bar pins
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
