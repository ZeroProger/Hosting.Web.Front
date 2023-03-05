export const APP_URL = `${process.env.APP_URL}`

export const getServersUrl = (query?: string) => `/servers${query ? `?${query}` : ''}`

export const getServerUrl = (slug: string) => `/servers/${slug}/overview`

export const getServerCreateUrl = (query?: string) => `/servers/create${query ? `?${query}` : ''}`

export const getServerOverviewUrl = (slug: string) => `/servers/${slug}/overview`

export const getServerPlayersUrl = (slug: string, category?: string) =>
	`/servers/${slug}/players${category || ''}`

export const getServerModsUrl = (slug: string) => `/servers/${slug}/mods`

export const getServerConsoleUrl = (slug: string) => `/servers/${slug}/console`

export const getServerLogsUrl = (slug: string) => `/servers/${slug}/logs`

export const getServerFilesUrl = (slug: string) => `/servers/${slug}/files`

export const getServerBackupsUrl = (slug: string) => `/servers/${slug}/backups`

export const getServerSettingsUrl = (slug: string) => `/servers/${slug}/settings`

export const getServerSoftwareUrl = (slug: string) => `/servers/${slug}/software`

export const getServerVersionsUrl = (slug: string, core: string) =>
	`${getServerSoftwareUrl(slug)}/${core}`

export const getServerVersionUrl = (slug: string, core: string, version: string) =>
	`${getServerVersionsUrl(slug, core)}/${version}`

export const getTariffUrl = (slug: string) => `/tariffs/${slug}`
