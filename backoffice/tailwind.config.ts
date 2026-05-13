import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5E6AD2',
          hover:   '#4F5BBD',
          light:   '#EFEFFF',
          muted:   '#EEF0FD',
          border:  '#C7CAF5',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted:   '#FAFAFA',
          subtle:  '#F7F7F8',
          input:   '#F4F4F6',
        },
        border: {
          DEFAULT: '#E8E8EA',
          subtle:  '#F0F0F2',
          strong:  '#EBEBEB',
        },
        text: {
          primary:   '#1A1A1A',
          secondary: '#5C5C68',
          muted:     '#A0A0A8',
          disabled:  '#C0C0C8',
        },
        success: { DEFAULT: '#22C55E', bg: '#DCFCE7', fg: '#15803D' },
        warning: { DEFAULT: '#F59E0B', bg: '#FEF9C3', fg: '#A16207' },
        danger:  { DEFAULT: '#EF4444', bg: '#FEE2E2', fg: '#B91C1C' },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
