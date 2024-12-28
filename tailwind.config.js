/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Font family for Minecraftia
      // Colors from your design
      // Animation for the typing effect and slide in
      animation: {
        typing: 'typing 2s steps(20, end) forwards, blink 1s infinite',
        slideInFromRight: 'slideInFromRight 1.5s ease-out forwards',
      },
      // Keyframes for your animations
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          from: { borderColor: 'transparent' },
          to: { borderColor: '#C06E52' },
        },
        slideInFromRight: {
          from: { transform: 'translateX(60%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      // Background opacity values if needed
      backgroundOpacity: {
        '15': '0.15',
      },
    },
  },
  plugins: [],
}