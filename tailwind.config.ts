import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1280px"
      },
      colors: {
        backgroundPrimary: "#F4F5F6",
        backgroundDark: "#0C1117",
        accentTeal: "#0E4D4D",
        textDark: "#111111",
        textMuted: "#6B7280",
        cardBackground: "#FFFFFF"
      },
      borderRadius: {
        card: "22px",
        button: "12px"
      }
    }
  },
  plugins: []
};

export default config;