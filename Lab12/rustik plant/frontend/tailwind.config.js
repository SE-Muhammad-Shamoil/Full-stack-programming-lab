/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        plank: {
          orange: "#f47c13",
          wood: "#a45c25",
          ink: "#211a16",
          muted: "#8f8880",
          panel: "#f7f7f6"
        }
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 28px rgba(0,0,0,.08)"
      }
    }
  },
  plugins: []
};
