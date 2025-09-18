/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       fontFamily: {
        geist: ['var(--font-geist-sans)'],
        geistmono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
