/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          "from 60%,75%,90%,to": {
            "-webkit-animation-timing-function":
              "cubic-bezier(.215,.61,.355,1)",
            "animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
          },

          "0%": {
            opacity: 0,
            "-webkit-transform": "translate3d(0,-3000px,0) scaleY(3)",
            transform: "translate3d(0,-3000px,0) scaleY(3)",
          },

          "60%": {
            opacity: 1,
            "-webkit-transform": "translate3d(0,25px,0) scaleY(.9)",
            transform: "translate3d(0,25px,0) scaleY(.9)",
          },

          "75%": {
            "-webkit-transform": "translate3d(0,-10px,0) scaleY(.95)",
            transform: "translate3d(0,-10px,0) scaleY(.95)",
          },

          "90%": {
            "-webkit-transform": "translate3d(0,5px,0) scaleY(.985)",
            transform: "translate3d(0,5px,0) scaleY(.985)",
          },

          to: {
            "-webkit-transform": "translate3d(0,0,0)",
            transform: "translate3d(0,0,0),",
          },
        },

        fadeRight: {
          from: {
            opacity: 0,
            "-webkit-transform": "translate3d(100%,0,0)",
            transform: "translate3d(100%,0,0)",
          },

          to: {
            opacity: 1,
            "-webkit-transform": "translate3d(0,0,0)",
            transform: "translate3d(0,0,0)",
          },
        },
        fadeLeft: {
          from: {
            opacity: 0,
            "-webkit-transform": "translate3d(-100%,0,0)",
            transform: "translate3d(-100%,0,0)",
          },

          to: {
            opacity: 1,
            "-webkit-transform": "translate3d(0,0,0)",
            transform: "translate3d(0,0,0)",
          },
        },
        fadeUp: {
          from: {
            opacity: 0,
            "-webkit-transform": "translate3d(0,100%,0)",
            transform: "translate3d(0,100%,0)",
          },

          to: {
            opacity: 1,
            "-webkit-transform": "translate3d(0,0,0)",
            transform: "translate3d(0,0,0)",
          },
        },
      },
      animation: {
        down: "fadeDown 1s ease-in-out",
        left: "fadeLeft 1s ease-in-out",
        right: "fadeRight 1s ease-in-out",
        up: "fadeUp 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
