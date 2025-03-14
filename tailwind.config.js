/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryLigth: 'hsla(212,100%,85%,1)',
        primary: 'hsla(212, 100%, 65%, 1)',
        primaryDark: 'hsla(212,100%,25%)',
      },
    },
  },
  plugins: [],
};
