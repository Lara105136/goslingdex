import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon': {
          'pink': '#ff006e',
          'purple': '#8338ec',
          'cyan': '#00d9ff',
          'green': '#06ffa5',
          'orange': '#ffbe0b',
        },
        'bg': {
          'base': '#0a0014',
          'secondary': '#050008',
          'card': '#1a0033',
          'hover': '#2d0052',
        },
        'text': {
          'secondary': '#b8b8ff',
          'tertiary': '#6b6b8f',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'monospace'],
        body: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config