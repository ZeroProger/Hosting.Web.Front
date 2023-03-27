export const APP_URL = `${process.env.APP_URL}`

export const getServersUrl = (query?: string) => `/servers${query ? `?${query}` : ''}`

export const getServerUrl = (slug: string) => `/servers/${slug}/overview`

export const getServerCreateUrl = (query?: string) => `/servers/create${query ? `?${query}` : ''}`

export const getServerOverviewUrl = (slug: string) => `/servers/${slug}/overview`

export const getServerPlayersUrl = (slug: string, category?: string) =>
	`/servers/${slug}/players${category || ''}`

export const getServerModsUrl = () => `/servers/mods`

export const getServerModUrl = (modId: string) => `/servers/mods/${modId}`

export const getServerModFilesUrl = (modId: string) => `/servers/mods/${modId}/files`

export const getServerModImagesUrl = (modId: string) => `/servers/mods/${modId}/images`

export const getServerModRelationsUrl = (modId: string) => `/servers/mods/${modId}/relations`

export const getServerModSearchUrl = () => `/servers
/mods/search`

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

export const breadcrumbsMap = new Map<string, string>([
	['servers', 'Сервера'],
	['mods', 'Моды'],
	['files', 'Файлы'],
	['images', 'Изображения'],
])

export const getProfileUrl = () => '/profile'
export const getSettingsUrl = () => '/settings'
export const getHelpUrl = () => '/help'
export const getFeedbackUrl = () => '/feedback'
export const getLogoutUrl = () => '/logout'
export const getAdminUrl = () => '/admin'
