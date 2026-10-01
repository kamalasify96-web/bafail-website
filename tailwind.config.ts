import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1A2F",
        gold: "#C9A86A",
        "gold-dark": "#A8864A",
        cream: "#F4F2EC",
        sand: "#EAE7DF",
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        "display-ar": ["var(--font-changa)", "sans-serif"],
        "body-ar": ["var(--font-ibm-plex-arabic)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
