/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'flenix-bg':     '#FFFFFF',
        'flenix-bg-alt': '#FAF8FF',
        'flenix-card':   '#FFFFFF',
        'flenix-border': '#EDE9FE',
        'flenix-lila':   '#9333EA',
        'flenix-light':  '#A855F7',
        'flenix-soft':   '#F3E8FF',
        'flenix-dark':   '#1A1033',
        'flenix-text':   '#1F1635',
        'flenix-muted':  '#64647A',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
