import { ABOUT, FUN, WORK } from "./content.js";

export const routes = {
  work: WORK,
  fun: FUN,
  about: ABOUT
};

function removeAccentUnderline() {
  const removeFroms = document.getElementsByClassName('accent-underline');
  for(let i = 0; i < removeFroms.length; i++) {
    removeFroms[i].classList.remove('accent-underline');
  }
}

// won't work for strings with spaces..
function capitalizeFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1, s.length);
}

function renderRoute() {
  removeAccentUnderline();
  const hash = location.hash.replace('#', '') || 'work';
  const content = routes[hash] || `<p>Page not found.</p>`;
  document.getElementById('content').innerHTML = content;
  document.getElementById(`link-${hash}`).classList.add('accent-underline');
  document.title = `${capitalizeFirst(hash)} - Hazel Piper`
}

export function listenForRouting() {
  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('DOMContentLoaded', renderRoute);
}