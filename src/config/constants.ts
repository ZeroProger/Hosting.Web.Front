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
export const gray800 = 'var(--bg-gray-800)'

export const IS_CLIENT = typeof window !== 'undefined'
export const IS_SERVER = typeof window === 'undefined'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'
export const IS_DARK_THEME = IS_CLIENT && window.matchMedia('(prefers-color-scheme: dark)').matches
