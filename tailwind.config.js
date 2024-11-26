/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',    // Indigo as primary color
        secondary: '#6366f1',  // Light indigo for accents
        darkBg: '#111827',     // Dark background for sidebar and header
      },
    },
  },
  plugins: [],
};


