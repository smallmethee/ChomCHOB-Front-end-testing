import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#373737',
        yellow: {
          DEFAULT: '#FFCB05',
          '50': '#F8F1D8',
          '100': '#FFF4E3',
          '900': '#FFAE33',
        },
        gray: {
          DEFAULT: '#FAFAFA',
          '50': '#F9F9F9',
          '100': '#F8F8F8',
        },
        red: '#FF6F61',
        'dark-gray': '#666',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.app-bar': {
          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.04)',
        },
      })
    }),
  ],
}
export default config
