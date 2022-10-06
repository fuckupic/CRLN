/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      proxima: ['Proxima Nova', 'Roboto'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        crln: {
          primary: '#ffce00',

          secondary: '#0083a3',

          accent: '#1FB2A6',

          neutral: '#e5e7eb',

          'base-100': '#111827',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#EC4B4B',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
