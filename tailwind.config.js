/** @type {import('tailwindcss').Config} */

const { white, gray } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#08c466'
const secondary = '#005801'
const secondaryGray = '#006B6A'
const secondaryBlue = '#59BAB8'
const secondaryDirt = '#bb855d'
const background = '#192024'
const backgroundLight = 'var(--nextui-colors-gray200)'
const lightGray = 'var(--light-gray)'
const textLightGray = 'var(--nextui-colors-text)'
const error = '#f74343'
const gray800 = 'var(--bg-gray-800)'

module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary,
			secondary,
			secondaryGray,
			secondaryBlue,
			secondaryDirt,
			background,
			backgroundLight,
			lightGray,
			textLightGray,
			error,
			gray800,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			yellow: {
				700: '#F5C521',
			},
			gray: {
				200: '#e6e6e6',
				300: '#cccccc',
				400: '#b3b3b3',
				500: '#999999',
				600: '#808080',
				700: '#666666',
				800: '#4d4d4d',
				900: '#333333',
				950: '#1a1a1a',
			},
		},
		screens: {
			sm: { max: '900px' },
			xs: { max: '440px' },
		},
		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2rem',
			},
			fontSize: {
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade 0.5s ease-in-out',
				scaleIn: 'scaleIn 0.35s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: primary,
					color: '#e6e6e6',
					borderRadius: '0.65rem',
					padding: '13px 15px',
					wordWrap: 'normal',
					whiteSpace: 'nowrap',
					fontSize: '1.125rem !important',
					minWidth: 'auto',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: secondary,
					},
					'&:active': {
						backgroundColor: secondary,
					},
				},
				'.btn-error': {
					backgroundColor: error,
					color: '#e6e6e6',
					borderRadius: '0.65rem',
					padding: '13px 15px',
					wordWrap: 'normal',
					whiteSpace: 'nowrap',
					fontSize: '1.125rem !important',
					minWidth: 'auto',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: '#dc0909',
					},
					'&:active': {
						backgroundColor: '#dc0909',
					},
				},
				'.btn-default': {
					backgroundColor: gray800,
					color: '#e6e6e6',
					borderRadius: '0.65rem',
					padding: '13px 15px',
					wordWrap: 'normal',
					whiteSpace: 'nowrap',
					fontSize: '1.125rem !important',
					minWidth: 'auto',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: lightGray,
					},
					'&:active': {
						backgroundColor: lightGray,
					},
				},
				'.text-link': {
					textUnderlineOffset: 4,
					color: 'rgba(255, 255, 255, .9)',
					transition: 'text-decoration-color .3s ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 255, 255, 0.2)',
					'&:hover': {
						textDecorationColor: 'rgba(255, 255, 255, 0.9)',
					},
				},
				'.air-block': {
					borderRadius: theme('borderRadius.layout'),
					backgroundColor: theme('colors.gray.950'),
					color: theme('colors.white'),
					boxShadow: theme('boxShadow.lg'),
				},
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},

					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
}
