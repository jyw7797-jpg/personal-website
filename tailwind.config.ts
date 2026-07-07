import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FDFCF8",
        ink: "#292524",
        muted: "#78716C",
        line: "#E7E2DA",
        green: "#FFB7B2",
        sand: "#C9B9A5",
        sage: "#E8EFE8",
        lavender: "#EFEDF4",
        clay: "#B87955",
      },
      fontFamily: {
        sans: [
          "Outfit",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        editorial: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        accent: ["Reenie Beanie", "cursive"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        lift: "0 22px 70px rgba(41, 37, 36, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
