/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#182019',
        ivory: '#FAF6EC',
        sand: '#EEE4CF',
        moss: {
          DEFAULT: '#3F5B45',
          light: '#5A7A5F',
          dark: '#243329',
        },
        clay: {
          DEFAULT: '#B6704A',
          light: '#D4936B',
          dark: '#8A5335',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(24, 32, 25, 0.25)',
        card: '0 10px 30px -10px rgba(24, 32, 25, 0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(0.85)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: 0.0 },
          '20%': { opacity: 0.5 },
          '100%': { transform: 'translateY(-24px) scaleX(1.4)', opacity: 0 },
        },
      },
      animation: {
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
        steam: 'steam 3s ease-in infinite',
      },
    },
  },
  plugins: [],
}
