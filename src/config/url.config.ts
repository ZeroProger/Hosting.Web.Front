export const APP_URL = `${process.env.APP_URL}`

export const getServerUrl = (slug: string) => `/servers/${slug}/overview`

export const getServerCreateUrl = () => `/servers/create`

export const getServerOverviewUrl = (slug: string) => `/servers/${slug}/overview`

export const getServerPlayersUrl = (slug: string, category?: string) =>
	`/servers/${slug}/players${category || ''}`

export const getServerModsUrl = (slug: string) => `/servers/${slug}/mods`

export const getServerConsoleUrl = (slug: string) => `/servers/${slug}/console`

export const getServerFilesUrl = (slug: string) => `/servers/${slug}/files`

export const getServerBackupsUrl = (slug: string) => `/servers/${slug}/backups`

export const getServerSettingsUrl = (slug: string) => `/servers/${slug}/settings`

export const getServersUrl = () => '/servers'
