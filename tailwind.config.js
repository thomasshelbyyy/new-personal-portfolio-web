/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        textShadow: {
          'default': '1px 1px 2px rgba(0, 0, 0, 0.5)',
          'lg': '2px 2px 4px rgba(0, 0, 0, 0.7)',
        },
        colors: {
          "my-primary": "#C22B42",
          "my-secondary": "#444444",
          "my-ternary": "#44586E",
          "my-hover": "#0A1B36"
        },
        fontFamily: {
          "anton": ['Anton', 'sans-serif']
        }
      },
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  }