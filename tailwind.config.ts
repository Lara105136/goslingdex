import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff006e',
        'neon-purple': '#8338ec',
        'neon-cyan': '#00d9ff',
        'neon-green': '#06ffa5',
        'neon-orange': '#ffbe0b',
        'bg-base': '#0a0014',
        'bg-secondary': '#050008',
        'bg-card': '#1a0033',
        'bg-hover': '#2d0052',
        'text-secondary': '#b8b8ff',
        'text-tertiary': '#6b6b8f',
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