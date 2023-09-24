import { SearchModsQuery } from '../api/curse-forge'
import { searchModsBaseQuery } from '../config/mods'

export const ServerUrls = {
	server: {
		overview: (hash: string) => `/servers/${hash}/overview`,

		players: (hash: string, category?: string) => `/servers/${hash}/players/${category || ''}`,

		console: (hash: string) => `/servers/${hash}/console`,

		logs: (hash: string) => `/servers/${hash}/logs`,

		files: (hash: string) => `/servers/${hash}/files`,

		backups: (hash: string) => `/servers/${hash}/backups`,

		settings: (hash: string) => `/servers/${hash}/settings`,

		software: (hash: string) => `/servers/${hash}/software`,

		versions: (hash: string, core: string) => ServerUrls.server.software(hash) + '/' + core,

		version: (hash: string, core: string, version: string) =>
			ServerUrls.server.versions(hash, core) + '/' + version,
	},

	servers: (query?: string) => `/servers${query ? `?${query}` : ''}`,

	publicServers: (query?: string) => `/servers/public${query ? `?${query}` : ''}`,

	createServer(query?: string) {
		return `/servers/create${query ? `?${query}` : ''}`
	},

	testServer() {
		return `/servers/test`
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
	subscription: (hash: string) => `/subscriptions/${hash}`,
}

export const GameUrls = {
	games: () => '/games',
	game: (gameId: number) => `/games/${gameId}`,
}

export const AdminUrls = {
	dashboard: () => '/dashboard',
}
