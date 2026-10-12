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
