import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const sirensTheme: CustomThemeConfig = {
	name: 'sirens',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': 'system-ui',
		'--theme-font-family-heading': 'system-ui',
		'--theme-font-color-base': 'var(--color-secondary-900)',
		'--theme-font-color-dark': 'var(--color-surface-50)',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #06b6d4
		'--color-primary-50': '218 244 249', // #daf4f9
		'--color-primary-100': '205 240 246', // #cdf0f6
		'--color-primary-200': '193 237 244', // #c1edf4
		'--color-primary-300': '155 226 238', // #9be2ee
		'--color-primary-400': '81 204 225', // #51cce1
		'--color-primary-500': '6 182 212', // #06b6d4
		'--color-primary-600': '5 164 191', // #05a4bf
		'--color-primary-700': '5 137 159', // #05899f
		'--color-primary-800': '4 109 127', // #046d7f
		'--color-primary-900': '3 89 104', // #035968
		// secondary | #14b8a6
		'--color-secondary-50': '220 244 242', // #dcf4f2
		'--color-secondary-100': '208 241 237', // #d0f1ed
		'--color-secondary-200': '196 237 233', // #c4ede9
		'--color-secondary-300': '161 227 219', // #a1e3db
		'--color-secondary-400': '91 205 193', // #5bcdc1
		'--color-secondary-500': '20 184 166', // #14b8a6
		'--color-secondary-600': '18 166 149', // #12a695
		'--color-secondary-700': '15 138 125', // #0f8a7d
		'--color-secondary-800': '12 110 100', // #0c6e64
		'--color-secondary-900': '10 90 81', // #0a5a51
		// tertiary | #eab308
		'--color-tertiary-50': '252 244 218', // #fcf4da
		'--color-tertiary-100': '251 240 206', // #fbf0ce
		'--color-tertiary-200': '250 236 193', // #faecc1
		'--color-tertiary-300': '247 225 156', // #f7e19c
		'--color-tertiary-400': '240 202 82', // #f0ca52
		'--color-tertiary-500': '234 179 8', // #eab308
		'--color-tertiary-600': '211 161 7', // #d3a107
		'--color-tertiary-700': '176 134 6', // #b08606
		'--color-tertiary-800': '140 107 5', // #8c6b05
		'--color-tertiary-900': '115 88 4', // #735804
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #ec4899
		'--color-warning-50': '252 228 240', // #fce4f0
		'--color-warning-100': '251 218 235', // #fbdaeb
		'--color-warning-200': '250 209 230', // #fad1e6
		'--color-warning-300': '247 182 214', // #f7b6d6
		'--color-warning-400': '242 127 184', // #f27fb8
		'--color-warning-500': '236 72 153', // #ec4899
		'--color-warning-600': '212 65 138', // #d4418a
		'--color-warning-700': '177 54 115', // #b13673
		'--color-warning-800': '142 43 92', // #8e2b5c
		'--color-warning-900': '116 35 75', // #74234b
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #64748b
		'--color-surface-50': '248 250 252',
		'--color-surface-100': '241 245 249',
		'--color-surface-200': '226 232 240',
		'--color-surface-300': '203 213 225',
		'--color-surface-400': '148 163 184',
		'--color-surface-500': '100 116 139',
		'--color-surface-600': '71 85 105',
		'--color-surface-700': '51 65 85',
		'--color-surface-800': '30 41 59',
		'--color-surface-900': '15 23 42'
	}
};
