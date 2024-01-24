import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin')

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		screens: {
			xs: '460px',
			sm: '660px',
			md: '800px',
			lg: '980px',
			xl: '1200px',
			'2xl': '1536px',
			'3xl': '1920px',
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				home: 'hsl(var(--home))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				warn: {
					DEFAULT: 'hsl(var(--warn))',
					foreground: 'hsl(var(--warn-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				header: 'var(--z-index-header)',
				modal: 'var(--z-index-modal)',
				'modal-overlay': 'var(--z-index-modal-overlay)',
				menu: 'var(--z-index-menu)',
				'menu-btn': 'var(--z-index-menu-btn)',
				select: 'var(--z-index-select)',
				'select-item': 'var(--z-index-select-item)',
				'search-list': 'var(--z-index-search-list)',
			},
			spacing: {
				layout: '2rem',
				'layout-sm': '1rem',
				'layout-xs': '0.5rem',
				header: '92px',
				'header-sm': '92px',
			},
			fontSize: {
				md: '1rem',
			},
			fontFamily: {
				sans: ['var(--font-rubik)'],
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 2px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xs: 'calc(var(--radius) - 6px)',
				layout: 'var(--radius)',
				button: 'calc(var(--radius) - 2px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				scaling: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				scaling: 'scaling 1.2s cubic-bezier(0, 0, 0.2, 1) infinite',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		plugin(({ addUtilities }: { addUtilities: any }) => {
			addUtilities({
				'.shadow-card': {
					'box-shadow': '0 0 10px 2px hsl(var(--card))',
				},
				'.shadow-card-sm': {
					'box-shadow': '0 0 5px 1px hsl(var(--card))',
				},
				'.content-container': {
					maxWidth: 'var(--container-max-width)',
					width: '100%',
					margin: '0 auto',
				},
			})
		}),
	],
}

export default config
