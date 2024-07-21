/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}",
  ],
  theme: {
    colors: {
      'LightRed': '#ff5757',
      'OrangeYellow': '#ffb01f',
      'GreenTeal': '#00bd91',
      'CobaltBlue': '#1125d4',
      'LightRed-bg': 'hsla(0, 100%, 67%, 0.1)',
      'OrangeYellow-bg': 'hsla(39, 100%, 56%, 0.1)',
      'GreenTeal-bg': 'hsla(166, 100%, 37%, 0.1)',
      'CobaltBlue-bg': 'hsla(234, 85%, 45%, 0.1)',
      'LightSlateBlue-background': '#7857ff',
      'LightRoyalBlue-background': '#2e2be9',
      'VioletBlue-circle': 'hsla(256, 72%, 46%, 1)',
      'PersianBlue-circle': 'hsla(241, 72%, 46%, 0)',
      'White': '#ffffff',
      'PaleBlue': '#ebf1ff',
      'LightLavender': '#c8c7ff',
      'DarkGrayBlue': '#303b5a',
      'Gray': '#808080'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    fontFamily: {
      'HankenGrotesk': '"Hanken Grotesk"'
    }
  },
  plugins: [],
}


