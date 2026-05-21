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
        React.createElement('script', {
            key: 'theme-init',
            dangerouslySetInnerHTML: { __html: setThemeScript },
        }),
    ]);
};
