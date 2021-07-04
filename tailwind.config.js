module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: '#A8B2D1',
        300: '#8892b0',
        500: '#233554',
        600: '#0a192f',
      },
      white: '#ccd6f6',
      green: '#64ffda',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
