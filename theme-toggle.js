function setThemeIcon(toggle) {
  const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
}

const theme = localStorage.getItem('theme');
if (theme) document.body.className = theme;

const toggle = document.getElementById('theme-toggle');
setThemeIcon(toggle);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  setThemeIcon(toggle);
  // const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  // toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  // localStorage.setItem('theme', newTheme);
});
    // document.getElementById('theme-toggle').addEventListener('click', () => {
    //   document.body.classList.toggle('dark');
    //   document.body.classList.toggle('light');
    //   document.getElementById('theme-toggle').textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    // });