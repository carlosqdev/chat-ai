/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: "blink 1s steps(5, start) infinite",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg,rgba(53,55,64,0),#353740 58.85%)",
      },
      keyframes: {
        blink: {
          to: { visibility: "hidden" },
        },
      },
      colors: {
        gptlogo: "#10a37f",
        gptdarkgray: "#202123",
        gptgray: "#343541",
        gptlightgray: "#444654",
      },
    },
  },
  plugins: [],
};
