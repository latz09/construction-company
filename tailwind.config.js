/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			dark: '#231506',
			// orange: '#D97818',
			orange: '#F69C32',
			light1: '#FFF7ED',
			light2: '#DFE0DF',
			black: '#000000',
			white: '#FFFFFF',
		},
	},
	plugins: [],
};
