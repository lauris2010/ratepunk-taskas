/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["var(--font-caveat)", ...'cursive'],
        noto: ["var(--font-noto)", 'sans-serif'],
      },
    },
  },
  plugins: [],
};