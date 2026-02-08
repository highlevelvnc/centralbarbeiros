import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* =========================
         TOKENS BASE (EVITA ERROS)
         ========================= */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",

        /* =========================
           SUAS CORES ORIGINAIS
           ========================= */
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FAF6E8",
          100: "#F5EDD1",
          200: "#EBD9A3",
          300: "#E1C675",
          400: "#D7B247",
          500: "#D4AF37",
          600: "#B8962C",
          700: "#8A7121",
          800: "#5C4B16",
          900: "#2E260B",
        },
        dark: {
          DEFAULT: "#0B0B0C",
          secondary: "#111113",
          accent: "#1A1A1C",
        },
      },

      /* =========================
         ANIMAÇÕES
         ========================= */
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
