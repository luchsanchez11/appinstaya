/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    
    },
    colors: {
      'nile-blue': {
        '50': '#edfefe',
        '100': '#d2fafb',
        '200': '#aaf2f7',
        '300': '#70e6f0',
        '400': '#2ed1e2',
        '500': '#12b4c8',
        '600': '#1291a8',
        '700': '#167588',
        '800': '#1b5e6f',
        '900': '#1b5060',
    },
    'burnt-sienna': {
      '50': '#fef4f2',
      '100': '#fee7e2',
      '200': '#fed2ca',
      '300': '#fcb3a5',
      '400': '#f88771',
      '500': '#f06449',
      '600': '#dd4325',
      '700': '#b9351c',
      '800': '#992f1b',
      '900': '#7f2d1d',
  },
    },
  },
  plugins: [],
}