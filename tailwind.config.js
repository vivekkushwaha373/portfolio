/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#151417',
        paper: '#f6f7fb',
        clay: '#c75d3b',
        mint: '#00a676',
        cobalt: '#2557d6',
        lemon: '#e2b93b',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(21, 20, 23, 0.14)',
        line: 'inset 0 0 0 1px rgba(21, 20, 23, 0.08)',
      },
    },
  },
  plugins: [],
}
