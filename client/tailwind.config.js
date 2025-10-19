/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
