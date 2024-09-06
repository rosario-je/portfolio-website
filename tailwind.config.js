/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'system-ui']
      },
      colors: {
        "darkmode-text": "#e8f2f7",
        "darkmode-background": "#081319",
        "darkmode-primary": "#86c1df",
        "darkmode-secondary": "#176389",
        "darkmode-accent": "#3eb4f0",
        "darkmode-light-blue": "#3590F3",
        "lightmode-text": "#081217",
        "lightmode-background": "#e8f2f8",
        "lightmode-primary": "#205b79",
        "lightmode-secondary": "#78c3e8",
        "lightmode-accent": "#0f87c2",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        darkMode: {
          "darkmode-text": "#e8f2f7",
          "darkmode-background": "#081319",
          "darkmode-primary": "#86c1df",
          "darkmode-secondary": "#176389",
          "darkmode-accent": "#3eb4f0",

        },
        lightMode: {
          "lightmode-text": "#081217",
          "lightmode-background": "#e8f2f8",
          "lightmode-primary": "#205b79",
          "lightmode-secondary": "#78c3e8",
          "lightmode-accent": "#0f87c2",
        }
      }
    ],
  },
}