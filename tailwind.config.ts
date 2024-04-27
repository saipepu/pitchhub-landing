import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "neutral": "#F3F3F3"
      },
      boxShadow: {
        'lg': '0 15px 50px -18px rgba(0,0,0,0.5)'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
};
export default config;
