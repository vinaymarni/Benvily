/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",      // Black
        secondary: "#D4AF37",    // Gold
        accent: "#F5F5DC",       // Beige
        luxuryGold: "#C5A028",
        softBeige: "#FAF3E0",
      },

      animation: {
        floatBg: "floatBg 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        slowPulse: "slowPulse 4s ease-in-out infinite",
      },

      keyframes: {
        floatBg: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },

        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },

        slowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },

      boxShadow: {
        luxury: "0 10px 40px rgba(212,175,55,0.3)",
        innerLuxury: "inset 0 0 60px rgba(0,0,0,0.6)",
      },

      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};