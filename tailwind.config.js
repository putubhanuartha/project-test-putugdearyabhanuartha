/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				padding: {
					DEFAULT: '3rem',
					sm: '4rem',
					lg: '6rem',
					xl: '7rem',
					'2xl': '8rem',
				},
			},
		},
	},
	plugins: [],
};
