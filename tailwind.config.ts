import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f0",
          100: "#ffdfdb",
          500: "#e63b30",
          600: "#d8251f",
          700: "#b31d18",
          900: "#6e120f"
        },
        ink: "#1f2937"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(23, 23, 23, 0.10)",
        card: "0 16px 48px rgba(23, 23, 23, 0.08)",
        crimson: "0 14px 40px rgba(110,18,15, 0.055)",
        "crimson-lg": "0 22px 62px rgba(110,18,15, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
