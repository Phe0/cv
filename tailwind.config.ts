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
        white: "#F5F5F5",
        black: "#030303",
        violet: "#B399FF",
        "violet-light": "#CBB9FE",
        pink: "#FEB9FB",
      },
    },
  },
  plugins: [],
};
export default config;
