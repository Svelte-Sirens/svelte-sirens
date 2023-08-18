import { skeleton } from '@skeletonlabs/tw-plugin';
import fluidType from 'tailwindcss-fluid-type';
import type { Config } from 'tailwindcss';
import { sirensTheme } from './src/theme';
import forms from '@tailwindcss/forms';
import { join } from 'path';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translatey(20px)' },
					'50%': { transform: 'translatey(-20px)' }
				}
			},
			animation: {
				float: 'float 8s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			},
			borderWidth: {
				1: '1px'
			},
			fontFamily: {
				sans: ['Red Hat Text', 'sans-serif'],
				heading: ['Cinzel Decorative', 'sans-serif']
			}
		}
	},
	plugins: [
		forms,
		fluidType,
		skeleton({
			themes: {
				custom: [sirensTheme]
			}
		})
	]
} satisfies Config;
