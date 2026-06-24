/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        graphite: "#303b45",
        steel: "#62707c",
        circuit: "#0f8a83",
        copper: "#b86f2d",
        paper: "#f4f5f2",
        panel: "#fbfbf7",
        panel2: "#e9eeeb",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 50px -32px rgba(17, 24, 39, 0.42)",
        line: "0 1px 0 rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
};
