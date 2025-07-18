import { ABOUT, FUN, WORK } from "./content.js";

export const routes = {
  work: WORK,
  fun: FUN,
  about: ABOUT
};

function renderRoute() {
  const hash = location.hash.replace('#', '') || 'work';
  const content = routes[hash] || `<p>Page not found.</p>`;
  document.getElementById('content').innerHTML = content;
}

export function listenForRouting() {
  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('DOMContentLoaded', renderRoute);
}