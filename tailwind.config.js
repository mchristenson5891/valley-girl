/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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