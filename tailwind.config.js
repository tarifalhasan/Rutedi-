/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-image': 'url(/images/bg.png)',
        'mobile-bg': 'url(/images/mobileBg.svg)',
      },
      colors: {
        'salte-20': '#F9FBFF',
        orange: '#FFA500',
        'slate-900': '#1A1A1A',
        'navbar-border': 'rgba(159, 162, 180, 0.5)',
        muted: '#F7F7F7',
        'sky-50': '#E1F4FF',
        'orange-50': '#FFF4DE',
        primary: '#34569C',
      },
      fontSize: {
        '5xl': [
          '36px',
          {
            lineHeight: '50px',
            letterSpacing: '-0.02em',
            fontWeight: '600',
          },
        ],
      },
    },
  },
  plugins: [],
};
