const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				fondant: {
					primary: '#3E56FF',
					secondary: '#FF2291',
					accent: '#FF9722',
					neutral: '#051c1d',
					info: '#1e1e1e',
					success: '#2FE46C',
					warning: '#E4C32F',
					error: '#C83C3C'
				}
			}
		]
	},

	theme: {
		extend: {}
	},

	plugins: [forms, typography, daisyui]
};

module.exports = config;
