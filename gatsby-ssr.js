const React = require('react');

const setThemeScript = `
(function() {
    try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (prefersDark ? 'dark' : 'light');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    } catch (e) {}
})();
`;

exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        React.createElement('link', {
            key: 'gfonts-preconnect',
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        }),
        React.createElement('link', {
            key: 'gfonts-preconnect-gstatic',
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'anonymous',
        }),
        React.createElement('link', {
            key: 'gfonts-css',
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap',
        }),
        React.createElement('script', {
            key: 'theme-init',
            dangerouslySetInnerHTML: { __html: setThemeScript },
        }),
    ]);
};
