export const SERVER_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}`

export const IS_CLIENT = typeof window !== 'undefined'
export const IS_SERVER = typeof window === 'undefined'
export const IS_DEV = process.env.APP_ENV === 'development'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'
export const IS_DARK_THEME = IS_CLIENT && window.matchMedia('(prefers-color-scheme: dark)').matches
