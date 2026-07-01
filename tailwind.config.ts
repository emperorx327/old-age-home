import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f3f7f4',
          100: '#e3ece5',
          200: '#c7d9cb',
          300: '#a6bfac',
          400: '#8FA998',
          500: '#6f8b76',
          600: '#58705d',
          700: '#475949',
          800: '#374439',
          900: '#2a332c'
        },
        cream: '#FAF7F2',
        ink: '#3D3A36'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(61, 58, 54, 0.08)'
      },
      backgroundImage: {
        'sage-gradient': 'linear-gradient(135deg, #8FA998 0%, #6f8b76 100%)'
      }
    }
  },
  plugins: []
};

export default config;