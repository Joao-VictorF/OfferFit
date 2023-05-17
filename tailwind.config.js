/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      width: {
        'calc-1/2-1rem': 'calc(50% - 0.7rem)',
        'calc-1/3-1rem': 'calc(33.3% - 0.7rem)',
        'calc-1/2-1rem-important': 'calc(50% - 0.7rem) !important',
        'full-important': 'calc(100% - 2rem) !important'
      },
    },
  },
  plugins: [],
}

