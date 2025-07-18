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

function renderRoute() {
  removeAccentUnderline();
  const hash = location.hash.replace('#', '') || 'work';
  const content = routes[hash] || `<p>Page not found.</p>`;
  document.getElementById('content').innerHTML = content;
  document.getElementById(`link-${hash}`).classList.add('accent-underline');
}

export function listenForRouting() {
  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('DOMContentLoaded', renderRoute);
}