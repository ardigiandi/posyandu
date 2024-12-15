/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      },

      colors: {
        softPink: '#FF7DC9',
        pastelBlue: '#A3C8E0',
        lightLavender: '#D6C1E0',
        powderBlue: '#B3D9E6',
        softMintGreen: '#A9E3D4',
        warmBeige: '#F5E2C8',
        softCoral: '#F6A7B9',
        pastelWhite: '#F8F1F3',
        pastelPink: '#E0BCCC',
        pastelOrange: '#EBC5BD',
        darkBrown: '#6E605F',
        bluedongker: '#03055B',
      },
    },
  },
  plugins: [],
}