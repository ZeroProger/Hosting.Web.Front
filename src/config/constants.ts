export const primary = '#08c466'
export const secondary = '#005801'
export const secondaryGray = '#006B6A'
export const secondaryBlue = '#59BAB8'
export const secondaryDirt = '#bb855d'
export const background = '#192024'
export const backgroundLight = 'var(--nextui-colors-gray200)'
export const lightGray = 'var(--light-gray)'
export const textLightGray = 'var(--nextui-colors-text)'
export const error = '#f74343'
export const errorHover = '#dc0909'
export const gray800 = 'var(--bg-gray-800)'
export const backgroundLandscape = '#171b3d'

export const joyrideStylesOptions: any = {
	arrowColor: backgroundLight,
	backgroundColor: backgroundLight,
	beaconSize: 36,
	overlayColor: 'rgba(0, 0, 0, 0.5)',
	primaryColor: primary,
	spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
	textColor: '#fff',
	width: undefined,
	zIndex: 1000,
}

export const joyrideStylesTooltip: any = {
	fontSize: 20,
}

export const IS_CLIENT = typeof window !== 'undefined'
export const IS_SERVER = typeof window === 'undefined'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'
export const IS_DARK_THEME = IS_CLIENT && window.matchMedia('(prefers-color-scheme: dark)').matches
