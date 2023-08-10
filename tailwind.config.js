/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '33': '33px',
        '39': '39px',
        '80': '80px',
        '225': '225px',
        '240': '240px',
        '270': '270px',
        '335': '335px',
        '350': '350px'
      },
      height: {
        '33': '33px',
        '30': '30px'
      },
      backgroundColor: {
        'nile-blue': '#003854',
        'blue-chill': '#0C8D92',
        'energy-yellow': '#F7DC51',
        'medium-spring-green': '#51F789',
        'chicago': '#585858',
        'oyster-bay': '#D8F6F8',
        'jagged-ice': '#BBE5E7',
        'twilight-blue': '#E9FAFB'
      },
      colors: {
        'nile-blue': '#003854',
        'blue-chill': '#0C8D92',
        'energy-yellow': '#F7DC51',
        'tundora': '#484747',
        'gunsmoke': '#8A8A8A'
      },
      fontSize: {
        '40': ['40px', { lineHeight: "40px" }],
        '22': '22px',
        '18.5': '18.5px',
        '18': '18px',
        '17': '17px',
        '15.5': '15.5px',
        '15': '15px',
        '14.5': '14.5px',
        '14': '14px',
        '13.5': '13.5px',
        '13': '13px',
        '12.5': '12.5px',
        '12': '12px',
        '11.5': '11.5px',
        '11': '11px',
        '10.5': '10.5px',
        '7.5': '7.5px',
      },
      boxShadow: {
        '0020': '0 0px 20px 0px rgba(0, 0, 0, 0.08)',
        'switch': '2px 2px 4px 0px rgba(0, 0, 0, 0.10) inset',
        '2240': '2px 2px 4px 0px rgba(0, 0, 0, 0.15) inset'
      },
      borderWidth: {
        '.5': '.5px',
        '1': '1px'
      },
      borderColor: {
        'blue-chill': '#0C8D92',
        'snow': '#FFFAFA',
        'jagged-ice': '#BBE5E7',
        'geyser': '#D5E2E2',
        'oyster-bay': '#D8F6F8',
      },
      maxWidth: {
        '80p': '80%'
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
}
