/* ponytail: Simplified theme retrieval and documentElement setter */
const storedTheme = localStorage.getItem('pageper_theme') || 'light';
document.documentElement.setAttribute('data-theme', storedTheme);
document.documentElement.style.backgroundColor = '#191919';
