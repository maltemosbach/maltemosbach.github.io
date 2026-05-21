/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./node_modules/flowbite-react/**/*.js`
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        'muted-hover': 'var(--color-muted-hover)',
        'muted-foreground': 'var(--color-muted-foreground)',
        subtle: 'var(--color-subtle)',
        link: 'var(--color-link)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        'success-bg': 'var(--color-success-bg)',
        warning: 'var(--color-warning)',
        'warning-bg': 'var(--color-warning-bg)',
        'highlight-bg': 'var(--color-highlight-bg)',
        'highlight-border': 'var(--color-highlight-border)',
        glass: 'var(--color-glass)',
        'glass-hover': 'var(--color-glass-hover)',
        'nav-bg': 'var(--color-nav-bg)',
      },
      fontFamily: {
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('flowbite/plugin'),
    require('flowbite-typography'),
  ],
}
