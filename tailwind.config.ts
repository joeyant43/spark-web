import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f0e17",
        surface: "#16151f",
        elevated: "#1e1c2e",
        border: "#2a2535",
        amber: {
          DEFAULT: "#ff9500",
          light: "#ffb347",
          lighter: "#ffd080",
          dark: "#ff7a00",
          dim: "#201600",
        },
        coral: "#ff5e3a",
        warm: {
          white: "#f5f0e8",
          gray: "#9e9889",
          muted: "#5a5462",
        },
      },
      boxShadow: {
        amber: "0 0 20px rgba(255,149,0,0.3)",
        "amber-sm": "0 4px 14px rgba(255,149,0,0.25)",
        "amber-lg": "0 8px 40px rgba(255,149,0,0.45)",
        "amber-glow": "0 0 60px rgba(255,149,0,0.2)",
      },
      keyframes: {
        "ember-pulse": {
          "0%, 100%": { textShadow: "0 0 12px #ff9500" },
          "50%": { textShadow: "0 0 32px #ff9500, 0 0 64px #ff7a00" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "ember-pulse": "ember-pulse 3s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
