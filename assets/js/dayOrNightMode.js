const themeBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
    themeBtn.setAttribute('aria-pressed', theme === 'dark');
    themeBtn.querySelector('p').textContent = theme === 'dark' ? 'Day Mode' : 'Night Mode';
}

themeBtn.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

// synchronise le libellé au chargement
setTheme(document.documentElement.dataset.theme || 'light');