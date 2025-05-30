/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}', // If you create a top-level components folder
  ],
  theme: {
    extend: {
      colors: {
        softOffWhite: '#F0EDE8',    // Primary background, "Neu"
        warmLightGray: '#D3CFC9', // Secondary background/borders, "Neu"
        mutedTerracotta: '#A7704F',// Accent, links, details, hint of "Hue"
        nearBlack: '#1A1A1A',      // Primary text
        darkGray: '#6B6B6B',       // Secondary text/icons
        // Vibrant pops for "Hue" moments (use strategically)
        brandCoral: '#FF6F61',
        brandTeal: '#00A896',
        // Standard states
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],      // Primary font
        display: ['Poppins', 'sans-serif'], // Secondary/heading font
      },
      // Example for custom animations or keyframes if needed later
      // keyframes: {
      //   fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      // },
      // animation: {
      //   fadeIn: 'fadeIn 1s ease-in-out',
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'), // If needed for rich text content
  ],
}
