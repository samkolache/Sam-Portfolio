/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#012747',
        'light-blue': '#3498DB',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

