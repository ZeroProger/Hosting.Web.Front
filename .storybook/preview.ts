import { withThemeByClassName } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import '@/app/styles/_globals.scss'

import './fonts.css'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: {
			default: 'inherit',
			values: [
				{
					name: 'inherit',
					value: 'hsl(var(--background))',
				},
			],
		},
	},
	decorators: [
		// Adds theme switching support.
		// NOTE: requires setting "darkMode" to "class" in your tailwind config
		withThemeByClassName({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'dark',
		}),
	],
}

export default preview
