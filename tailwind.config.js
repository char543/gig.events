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
					"0%": {
						transform: "translate3d(0, -10vh, 0)",
						opacity: "0",
					},
					"50%": {
						transform: "translate3d(0, 1vh, 0)",
					},
					"100%": {
						transform: "translate3d(0, 0vh, 0)",
						opacity: "1",
					},
				},
				fadeLeft: {
					"0%": {
						transform: "translate3d(-5vw, 0, 0)",
						opacity: "0.3",
					},
					"100%": {
						transform: "translate3d(0vw, 0, 0)",
						opacity: "1",
					},
				},
			},
			animation: {
				down: "fadeDown 1s ease-in-out",
				left: "fadeLeft 1s ease-in-out",
			},
		},
	},
	plugins: [],
};
