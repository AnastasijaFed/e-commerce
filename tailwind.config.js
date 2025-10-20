/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-olive': "#636B2F",
        'bright-text': "#f5fdec",
        'dark-text': "#636B2F",
        'component-bg': "#3D4127",
      },
    },
  },
  plugins: [],
};
