import { ISearchModsQuery } from '@/shared/types/curseforge.types'

export const APP_URL = `${process.env.APP_URL}`

export const getServerOverviewUrl = (slug: string) => `/servers/${slug}/overview`

export const getServerPlayersUrl = (slug: string, category?: string) =>
	`/servers/${slug}/players${category || ''}`

export const getServerModsUrl = () => `/servers/mods`

export const getServerModSearchUrl = (query?: ISearchModsQuery) => {
	const resultQuery: ISearchModsQuery = { ...searchModsBaseQuery, ...query }
	const resultQueryString = new URLSearchParams(resultQuery).toString()

	return `/servers/mods/search${resultQueryString}`
}

// export const getServerModUrl = (modId: string, category?: string) =>
// 	`/servers/mods/${modId}${category && category.length > 1 ? `${category}` : ''}`

// export const getServerModFilesUrl = (modId: string) => `/servers/mods/${modId}/files`

// export const getServerModImagesUrl = (modId: string) => `/servers/mods/${modId}/images`

// export const getServerModRelationsUrl = (modId: string) => `/servers/mods/${modId}/relations`

// export const getServerConsoleUrl = (slug: string) => `/servers/${slug}/console`

// export const getServerLogsUrl = (slug: string) => `/servers/${slug}/logs`

// export const getServerFilesUrl = (slug: string, path: string = '') =>
// 	`/servers/${slug}/files${path}`

// export const getServerBackupsUrl = (slug: string) => `/servers/${slug}/backups`

// export const getServerSettingsUrl = (slug: string) => `/servers/${slug}/settings`

// export const getServerSoftwareUrl = (slug: string) => `/servers/${slug}/software`

// export const getServerVersionsUrl = (slug: string, core: string) =>
// 	`${getServerSoftwareUrl(slug)}/${core}`

// export const getServerVersionUrl = (slug: string, core: string, version: string) =>
// 	`${getServerVersionsUrl(slug, core)}/${version}`

export const getTariffUrl = (slug: string) => `/tariffs/${slug}`

export const getGameUrl = (gameId: number) => `/games/${gameId}`

export const breadcrumbsMap = new Map<string, string>([
	['servers', 'Сервера'],
	['mods', 'Моды'],
	['search', 'Поиск'],
	['files', 'Файлы'],
	['images', 'Изображения'],
])

export const searchModsBaseQuery: ISearchModsQuery = {
	sortField: 1,
	sortOrder: 'desc',
	index: 0,
	pageSize: 20,
}

export const getAuthUrl = (action: 'login' | 'register' = 'login') => `/auth?action=${action}`
export const getProfileUrl = () => '/profile'
export const getSettingsUrl = () => '/settings'
export const getHelpUrl = () => '/help'
export const getFeedbackUrl = () => '/feedback'
export const getLogoutUrl = () => '/logout'
export const getAdminUrl = () => '/admin'
