/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: '#272E71',
      white: '#ffffff',
      greyTitles: '#374151',
      greyText: '#6B7280',
    },
    extend: {
      maxWidth: {
        app: '1440px',
      },
    },
  },
  plugins: [],
};
