import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: "0"},
          '100%': { opacity: "1"},
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
