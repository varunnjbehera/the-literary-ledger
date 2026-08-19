/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.{html,md}',
    './layouts/**/*.html',
    './themes/literary/**/*.html',
    './themes/literary/**/*.md',
  ],
  safelist: [
    'md:grid-cols-4',
    'lg:grid-cols-4',
    'lg:grid-cols-3',
    'md:grid-cols-2',
    'grid-cols-1'
  ],
  theme: {
    extend: {
      colors: {
        'lit-bg': '#fcfaf7',
        'lit-accent': '#b8955a',
        'lit-dark': '#1a1a1a',
        'lit-gray': '#6b7280',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
