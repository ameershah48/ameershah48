module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'instagram': '#DD2A7B',
        'twitter': '#1C9CEA',
        'github' : '#2A2F35',
        'linkedin': '#0077B5',
        'youtube': '#FE0000',
        'wordpress':'#207196',
        'laravel': '#F7291C',
        'blogger': '#E86733',
        'php': '#7377AD',
        'bootsrap': '#8613FB',
        'tailwindcss': '#06B6D4'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
