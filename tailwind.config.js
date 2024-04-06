/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgPrimary: "linear-gradient(to right, #512DA8, #673AB7, #607D8B)",
        bgSecondary: "linear-gradient(to right, #D1C4E9, #607D8B, #BDBDBD)",
        bgTertiary: "linear-gradient(to right, #512DA8, #D1C4E9, #FFFFFF);",


      },
      colors: {
        primary: {
          100: '#212121',
        },
        secondary: {
          100: '#757575',
        },
        accent: {
          100: '#607D8B',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

