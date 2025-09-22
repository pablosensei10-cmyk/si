/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#1a1a1a',
        'secondary': '#f0f0f0',
        'accent': '#4a90e2',
      },
      transitionProperty: {
          'width': 'width',
          'transform': 'transform',
      }
    },
  },
  plugins: [],
}
