import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1B4F72",      // Navy from logo "S"
          accent: "#2A6496",    // Mid-blue bridge
          sky: "#4FC3E8",       // Sky blue from logo "C"
          light: "#f8f8f6",     // Cream/off-white
          text: "#1a1a1a",      // Dark text
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
