import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f1",
          100: "#ffe1e1",
          500: "#e52626",
          600: "#d71920",
          700: "#b91018",
          900: "#671012"
        },
        ink: "#171717"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(23, 23, 23, 0.10)",
        card: "0 16px 48px rgba(23, 23, 23, 0.08)",
        crimson: "0 14px 40px rgba(103, 16, 18, 0.055)",
        "crimson-lg": "0 22px 62px rgba(103, 16, 18, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
