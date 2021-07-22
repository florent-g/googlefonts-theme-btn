const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.contains('light-theme')
    ? enableDarkMode()
    : enableLightMode();
});

const enableDarkMode = () => {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
  themeToggle.setAttribute('aria-label', 'Switch to light theme');
};

const enableLightMode = () => {
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');
  themeToggle.setAttribute('aria-label', 'Switch to dark theme');
};

const setThemePreference = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
    return;
  }
  enableLightMode();
};

document.onload = setThemePreference();
