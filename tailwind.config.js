/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fafafa',
        'primary-blue': '#0089F3',
        'dark-blue': "#142752",
        'navy-blue': "#001266",
        'indigo': "#625FD1",
      },
      fontFamily : {
        "noto-sans" : ["Noto Sans", "sans-serif"],
        "roboto" : ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}