/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indolyra: {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d1d8c7',
          300: '#b3bfa3',
          400: '#8f9f7a',
          500: '#73825e',
          600: '#5a6849',
          700: '#48523b',
          800: '#3c4332',
          900: '#333a2c',
          950: '#1a1f15',
        },
        gold: {
          50: '#fdfbed',
          100: '#fbf4c6',
          200: '#f7ea8c',
          300: '#f2da4d',
          400: '#edc720',
          500: '#ddb314',
          600: '#bf910e',
          700: '#996c0f',
          800: '#805516',
          900: '#6d4619',
          950: '#3f2409',
        },
        earth: {
          50: '#f7f5f2',
          100: '#ebe6df',
          200: '#d6cdc1',
          300: '#baac9c',
          400: '#9e8b76',
          500: '#846f5a',
          600: '#6b5948',
          700: '#57483c',
          800: '#493e35',
          900: '#3f362f',
          950: '#221e1a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.375rem)',
        'fluid-xl': 'clamp(1.5rem, 1.25rem + 1vw, 2rem)',
        'fluid-2xl': 'clamp(2rem, 1.5rem + 2vw, 3rem)',
        'fluid-3xl': 'clamp(2.5rem, 1.75rem + 3vw, 4rem)',
        'fluid-4xl': 'clamp(3rem, 2rem + 4vw, 5.5rem)',
        'fluid-5xl': 'clamp(4rem, 2.5rem + 6vw, 8rem)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
