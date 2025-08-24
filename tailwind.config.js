/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in-right': 'fadeInRight 1s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'bounce-out': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Professional beauty salon palette with WCAG AA compliance
        'salon': {
          // Primary - Sophisticated Rose Gold
          'rose': {
            50: '#fdf2f4',
            100: '#fce8ec',
            200: '#fbd0d9',
            300: '#f8a4b8',
            400: '#f27495',
            500: '#e84c79',  // Primary brand color
            600: '#d42e5f',
            700: '#b21e4b',
            800: '#951b41',
            900: '#7f1a3a',
          },
          // Secondary - Modern Teal
          'teal': {
            50: '#f0fdfd',
            100: '#ccf7f6',
            200: '#9aefed',
            300: '#5fdedd',
            400: '#2ec4c4',  // Secondary brand color
            500: '#14a8a8',
            600: '#0c8989',
            700: '#0e6e6e',
            800: '#115858',
            900: '#134949',
          },
          // Neutral grays for text and backgrounds
          'neutral': {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
          // Accent colors
          'gold': '#d4a574',      // Luxury accent
          'cream': '#fef7f1',     // Soft backgrounds
          'charcoal': '#2d2d2d',  // High contrast text
        }
      },
    },
  },
  plugins: [],
}