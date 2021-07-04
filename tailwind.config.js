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
      white: '#ccd6f6',
      primary: '#8892b0',
      green: '#64ffda',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
