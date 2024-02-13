/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        fondant: {
          primary: "#3E56FF",
          secondary: "#FF2291",
          accent: "#FF9722",
          neutral: "#051c1d",
          info: "#1e1e1e",
          success: "#2FE46C",
          warning: "#E4C32F",
          error: "#C83C3C",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
