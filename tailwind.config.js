/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'outfit': ['Outfit', 'system-ui', 'sans-serif'],
          'space': ['Space Grotesk', 'system-ui', 'sans-serif'],
        },
        animation: {
          'spin-slow': 'spin 8s linear infinite',
        },
        letterSpacing: {
          'widest': '0.2em',
        },
      },
    },
    plugins: [],
  };
  