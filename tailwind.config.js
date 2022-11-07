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
					"0%": { transform: "translateY(-10vh)" },
					"100%": { transform: "translateY(0vh)" },
				},
				fadeLeft: {
					"0%": { transform: "translateX(-20vw)" },
					"100%": { transform: "translateX(0vw)" },
				},
			},
			animation: {
				down: "fadeDown 0.8s ease-in-out",
				left: "fadeLeft 0.5s ease-in-out",
			},
		},
	},
	plugins: [],
};
