function setThemeIcon(toggle) {
  const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
}

export function listenForThemeToggle() {
  const theme = localStorage.getItem('theme');
  document.body.className = theme || 'light';

  const toggle = document.getElementById('theme-toggle');
  setThemeIcon(toggle);

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    setThemeIcon(toggle);
  });
}