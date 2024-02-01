import defaultTheme from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Whitney", "Inter", ...defaultTheme.fontFamily.sans],
        title: ["Ginto", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: "#5865F2",
        gray: {
          50: "#ECEDEE",
          100: "#DCDDDE",
          200: "#B9BBBE",
          300: "#8E9297",
          400: "#727670",
          500: "#5C6067",
          600: "#464950",
          700: "#36393F",
          800: "#2F3136",
          900: "#202225",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
