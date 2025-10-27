/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ebony' : '#2f362f',
        'light-ebony' : '#576157',
        'sand-dollar' : '#d9d3c6',
        'celadon' : '#788978',
      },
    },
  },
  plugins: [],
};
