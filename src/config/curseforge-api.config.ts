export const API_CURSE_FORGE_URL = `${process.env.API_CURSE_FORGE_URL}`
export const API_CURSE_FORGE_KEY = `${process.env.API_CURSE_FORGE_KEY}`

export const getModloadersUrl = () => '/v1/minecraft/modloader'
export const getModloaderUrl = (name: string) => `/v1/minecraft/modloader/${name}`

export const getMinecraftVersionsUrl = () => '/v1/minecraft/version'
export const getMinecraftVersionUrl = (version: string) => `/v1/minecraft/version/${version}`
