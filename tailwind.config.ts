import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0b0a09",
          soft: "#121110",
          card: "#0f0e0d",
        },
        ink: {
          DEFAULT: "#ece8e2",
          dim: "#a09a92",
          mute: "#5e5852",
          line: "#1f1d1b",
          edge: "#2a2724",
        },
        phosphor: {
          DEFAULT: "#34f5a5",
          dim: "#1f9d68",
        },
        amber: {
          crt: "#f6c177",
          dim: "#c89358",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      animation: {
        flicker: "flicker 6s infinite",
        glow: "glow 3s ease-in-out infinite",
        blink: "blink 1.1s steps(2, start) infinite",
        wireframe: "wireframe-pan 24s linear infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "8%": { opacity: "0.96" },
          "9%": { opacity: "1" },
          "47%": { opacity: "0.98" },
          "48%": { opacity: "1" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 6px rgba(52,245,165,0.35)" },
          "50%": { textShadow: "0 0 10px rgba(52,245,165,0.55)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "wireframe-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "56px 56px" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
