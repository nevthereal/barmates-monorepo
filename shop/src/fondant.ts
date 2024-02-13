import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const fondant: CustomThemeConfig = {
	name: 'fondant',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #3E56FF
		'--color-primary-50': '226 230 255', // #e2e6ff
		'--color-primary-100': '216 221 255', // #d8ddff
		'--color-primary-200': '207 213 255', // #cfd5ff
		'--color-primary-300': '178 187 255', // #b2bbff
		'--color-primary-400': '120 137 255', // #7889ff
		'--color-primary-500': '62 86 255', // #3E56FF
		'--color-primary-600': '56 77 230', // #384de6
		'--color-primary-700': '47 65 191', // #2f41bf
		'--color-primary-800': '37 52 153', // #253499
		'--color-primary-900': '30 42 125', // #1e2a7d
		// secondary | #FF2291
		'--color-secondary-50': '255 222 239', // #ffdeef
		'--color-secondary-100': '255 211 233', // #ffd3e9
		'--color-secondary-200': '255 200 228', // #ffc8e4
		'--color-secondary-300': '255 167 211', // #ffa7d3
		'--color-secondary-400': '255 100 178', // #ff64b2
		'--color-secondary-500': '255 34 145', // #FF2291
		'--color-secondary-600': '230 31 131', // #e61f83
		'--color-secondary-700': '191 26 109', // #bf1a6d
		'--color-secondary-800': '153 20 87', // #991457
		'--color-secondary-900': '125 17 71', // #7d1147
		// tertiary | #FF9722
		'--color-tertiary-50': '255 239 222', // #ffefde
		'--color-tertiary-100': '255 234 211', // #ffead3
		'--color-tertiary-200': '255 229 200', // #ffe5c8
		'--color-tertiary-300': '255 213 167', // #ffd5a7
		'--color-tertiary-400': '255 182 100', // #ffb664
		'--color-tertiary-500': '255 151 34', // #FF9722
		'--color-tertiary-600': '230 136 31', // #e6881f
		'--color-tertiary-700': '191 113 26', // #bf711a
		'--color-tertiary-800': '153 91 20', // #995b14
		'--color-tertiary-900': '125 74 17', // #7d4a11
		// success | #2FE46C
		'--color-success-50': '224 251 233', // #e0fbe9
		'--color-success-100': '213 250 226', // #d5fae2
		'--color-success-200': '203 248 218', // #cbf8da
		'--color-success-300': '172 244 196', // #acf4c4
		'--color-success-400': '109 236 152', // #6dec98
		'--color-success-500': '47 228 108', // #2FE46C
		'--color-success-600': '42 205 97', // #2acd61
		'--color-success-700': '35 171 81', // #23ab51
		'--color-success-800': '28 137 65', // #1c8941
		'--color-success-900': '23 112 53', // #177035
		// warning | #E4C32F
		'--color-warning-50': '251 246 224', // #fbf6e0
		'--color-warning-100': '250 243 213', // #faf3d5
		'--color-warning-200': '248 240 203', // #f8f0cb
		'--color-warning-300': '244 231 172', // #f4e7ac
		'--color-warning-400': '236 213 109', // #ecd56d
		'--color-warning-500': '228 195 47', // #E4C32F
		'--color-warning-600': '205 176 42', // #cdb02a
		'--color-warning-700': '171 146 35', // #ab9223
		'--color-warning-800': '137 117 28', // #89751c
		'--color-warning-900': '112 96 23', // #706017
		// error | #C83C3C
		'--color-error-50': '247 226 226', // #f7e2e2
		'--color-error-100': '244 216 216', // #f4d8d8
		'--color-error-200': '241 206 206', // #f1cece
		'--color-error-300': '233 177 177', // #e9b1b1
		'--color-error-400': '217 119 119', // #d97777
		'--color-error-500': '200 60 60', // #C83C3C
		'--color-error-600': '180 54 54', // #b43636
		'--color-error-700': '150 45 45', // #962d2d
		'--color-error-800': '120 36 36', // #782424
		'--color-error-900': '98 29 29', // #621d1d
		// surface | #051c1d
		'--color-surface-50': '221 221 221', // #dddddd
		'--color-surface-100': '210 210 210', // #d2d2d2
		'--color-surface-200': '199 199 199', // #c7c7c7
		'--color-surface-300': '165 165 165', // #a5a5a5
		'--color-surface-400': '98 98 98', // #626262
		'--color-surface-500': '30 30 30', // #1e1e1e
		'--color-surface-600': '27 27 27', // #1b1b1b
		'--color-surface-700': '23 23 23', // #171717
		'--color-surface-800': '18 18 18', // #121212
		'--color-surface-900': '15 15 15' // #0f0f0f
	}
};
