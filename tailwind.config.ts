import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grain: {
          "0%,to": {
            transform: "translate(0)",
          },
          "10%": {
            transform: "translate(-5%,-10%)",
          },

          "20%": {
            transform: "translate(-15%,5%)",
          },
          "30%": {
            transform: "translate(7%,-25%)",
          },

          "40% ": {
            transform: "translate(-5%,25%)",
          },

          "50%": {
            transform: "translate(-15%,10%)",
          },

          "60%": {
            transform: "translate(15%)",
          },

          "70%": {
            transform: "translateY(15%)",
          },

          "80%": {
            transform: "translate(3%,35%)",
          },

          "90%": {
            transform: "translate(-10%,10%)",
          },
        },
      },
      animation: {
        grain: "grain 7s steps(10) infinite",
      },
      colors: {
        primary_1: "#2b2b33",
        text_1: "#606887",
        white: "#fafafa",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
