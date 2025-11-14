/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
