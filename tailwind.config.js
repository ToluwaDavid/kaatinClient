// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures all files in src are scanned
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0052CC", // Custom primary color
        accent: "#FFA500", // Custom accent color
        lightBlue: "#B3D4FC", // Custom light blue color
        textPrimary: "#FFFFFF", // Custom text primary color
      },
    },
  },
  plugins: [],
};
