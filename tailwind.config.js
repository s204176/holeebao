/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bao': {
          white: '#FAFAFA',
          cream: '#F5F1E8',
          gray: '#E5E5E5',
          'gray-dark': '#9E9E9E',
          golden: '#E8B84D',
          'golden-light': '#F5CF6B',
          'golden-dark': '#D4A03A',
          'steam': '#E8EAF6',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'display': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'steam': 'steam 4s ease-out infinite',
        'fadeIn': 'fadeIn 1s ease-in',
        'slideUp': 'slideUp 0.8s ease-out',
        'shine': 'shine 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        steam: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(-100px) scale(1.5)',
            opacity: '0'
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
    },
  },
  plugins: [],
}
