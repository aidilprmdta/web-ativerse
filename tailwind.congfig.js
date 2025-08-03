// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // scan semua file komponen di src/
  ],
  theme: {
    variants: {
      extend: {
        textcolor: ["active"],
    extend: {
      colors: {
        primary: "#3b82f6",     // Biru utama
        secondary: "#f472b6",   // Pink
        accent: "#10b981",      // Hijau terang
        dark: "#0f172a",        // Biru gelap untuk background
        light: "#f1f5f9",       // Abu terang
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"], // font utama
        mono: ["Fira Code", "monospace"], // font opsional
      },
      animation: {
        fade: "fadeIn 1s ease-in-out forwards",
        slide: "slideIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [("tailwind-scrollbar-hide")],
}
  },
};