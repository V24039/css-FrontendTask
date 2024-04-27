/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dashboard: "#FFF4DF",
      },
      keyframes: {
        imageResize371: {
          "0%, 100%": {
            width: "350px"
          },
          "50%": {
            width: "400px",
          },
        },
        imageResize539: {
          "0%, 100%": {
            width: "540px"
          },
          "50%": {
            width: "450px",
          },
        },
        imageResize260: {
          "0%, 100%": {
            width: "240px"
          },
          "50%": {
            width: "200px",
          },
        },
        imageResizeIn299: {
          "0%, 100%": {
            width: "210px"
          },
          "50%": {
            width: "170px",
          },
        },
        imageResizeOut299: {
          "50%": {
            width: "210px",
          },
          "0%, 100%": {
            width: "180px"
          },
        },
        imageResize158: {
          "0%, 100%": {
            width: "150px"
          },
          "50%": {
            width: "170px",
          },
        },
      },
    },
  },
  plugins: [],
};
