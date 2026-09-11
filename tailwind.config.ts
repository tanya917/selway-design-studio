import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        selway: {
          ink: '#2b2a28',
          cream: '#f2ede4',
          'cream-light': '#f7f3ec',
          'cream-dark': '#E8DED3',
          stone: '#C7C2B6',
          'dark-grey': '#45423E',
        },
        accent: {
          rubis: '#74393B',
          blue: '#4D6AA8',
          sage: '#A9C19A',
          'sage-dark': '#94AD7F',
          ochre: '#FFD447',
          'dusty-blue': '#B7C7D1',
          berry: '#87304A',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'Century Gothic', 'Futura', 'sans-serif'],
        sans: ['Poppins', 'Century Gothic', 'Futura', 'sans-serif'],
      },
      spacing: {
        'container': '1280px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2b2a28',
            a: {
              color: '#4D6AA8',
              '&:hover': {
                color: '#74393B',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
