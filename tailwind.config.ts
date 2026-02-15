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
        background: "var(--background)",
        foreground: "var(--foreground)",
        spark: {
          purple: "#B24BF3",
          blue: "#4B9FF3",
          pink: "#F34B9F",
          green: "#4BF39F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
