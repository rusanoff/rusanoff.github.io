(() => {
  if (typeof localStorage === 'undefined') {
    return;
  }

  const theme = JSON.parse(localStorage.getItem('theme') || 'null') as 'dark' | 'light' | null;

  if (theme === 'dark') {
    document.documentElement.classList.add('is-dark');
  }

  if (theme === 'light') {
    document.documentElement.classList.add('is-light');
  }

  if (!theme) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('is-dark');
    } else {
      document.documentElement.classList.add('is-light');
    }
  }
})();
