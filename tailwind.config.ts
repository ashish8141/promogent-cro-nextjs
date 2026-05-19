import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#1a1a1a",
          700: "#262626",
          600: "#404040",
          500: "#525866",
        },
        paper: {
          DEFAULT: "#ffffff",
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#eeedeb",
        },
        line: {
          DEFAULT: "#e7e5e4",
          strong: "#d6d3d1",
        },
        accent: {
          warm: "#ff7a45",
          sky: "#6ea8ff",
          mint: "#9be7c4",
          lemon: "#ffe27a",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Manrope"', '"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:
          "0 1px 2px rgba(15,15,15,0.04), 0 8px 24px -8px rgba(15,15,15,0.08)",
        lift:
          "0 1px 2px rgba(15,15,15,0.04), 0 24px 48px -16px rgba(15,15,15,0.14)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "blob": "blob 18s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-slow": "marquee 55s linear infinite",
        "dash": "dash 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "tilt": "tilt 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.95)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        dash: { to: { strokeDashoffset: "-100" } },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".45" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
