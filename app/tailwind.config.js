module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: 'hsl(179, 62%, 43%)',
          light: '#4abebd',
        },
        yellow: {
          bright: 'hsl(71, 73%, 54%)',
        },
        gray: {
          light: 'hsl(204, 43%, 93%)',
        },
        blue: {
          grayish: 'hsl(218, 22%, 67%)',
        }
      },
      container: {
        center: true,
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
      },
      fontSize: {
        '3.5xl': '2rem',
      },
      maxWidth: {
        custom: '40rem',
      },
      padding: {
        '18': '4.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
