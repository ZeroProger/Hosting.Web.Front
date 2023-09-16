import { SearchModsQuery } from '../api/curse-forge'
import { searchModsBaseQuery } from '../config/mods'

export const ServerUrls = {
	server: {
		overview: (slug: string) => `/servers/${slug}/overview`,

		players: (slug: string, category?: string) => `/servers/${slug}/players${category || ''}`,

		console: (slug: string) => `/servers/${slug}/console`,

		logs: (slug: string) => `/servers/${slug}/logs`,

		files: (slug: string) => `/servers/${slug}/files`,

		backups: (slug: string) => `/servers/${slug}/backups`,

		settings: (slug: string) => `/servers/${slug}/settings`,

		software: (slug: string) => `/servers/${slug}/software`,

		versions: (slug: string, core: string) => ServerUrls.server.software(slug) + '/' + core,

		version: (slug: string, core: string, version: string) =>
			ServerUrls.server.versions(slug, core) + '/' + version,
	},

	servers: (query?: string) => `/servers${query ? `?${query}` : ''}`,

	publicServers: (query?: string) => `/public-servers${query ? `?${query}` : ''}`,

	createServer(query?: string) {
		return `/servers/create${query ? `?${query}` : ''}`
	},
}

export const ModUrls = {
	mods: () => '/mods',
	mod: (id: number | string) => `/mods/${id}`,
	files: (id: number | string) => `/mods/${id}/files`,
	images: (id: number | string) => `/mods/${id}/images`,
	relations: (id: number | string) => `/mods/${id}/relations`,
	search: (query?: SearchModsQuery) => {
		const resultQuery: SearchModsQuery = { ...searchModsBaseQuery, ...query }
		const resultQueryString = Object.entries(resultQuery)
			.filter((item) => item[1])
			.map(
				(item, index) =>
					`${index === 0 ? '?' : ''}${item[0]}=${item[1]}${
						index !== Object.keys(resultQuery).length - 1 ? '&' : ''
					}`
			)
			.join('')

		return `/mods/search${resultQueryString}`
	},
}

export const AuthUrls = {
	signIn: () => '/auth/sign-in',
	signUp: () => '/auth/sign-up',
	logout: () => '/auth/logout',
}

export const ProfileUrls = {
	profile: () => '/profile',
	settings: () => '/settings',
}

export const CommonUrls = {
	home: () => '/',
	help: () => '/help',
	feedback: () => '/feedback',
}

//#TODO: переезд tariffs на subscription model
export const SubscriptionUrls = {
	subscriptions: () => '/subscriptions',
	subscription: (slug: string) => `/subscriptions/${slug}`,
}

export const GameUrls = {
	games: () => '/games',
	game: (gameId: number) => `/games/${gameId}`,
}

export const AdminUrls = {
	dashboard: () => '/dashboard',
}
