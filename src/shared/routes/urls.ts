import { searchModsBaseRequest } from '@/shared/config/mods'

import { ISearchModsQuery } from '../api/curse-forge'

export const ServerUrls = {
	server: {
		root: (hash: string) => `/servers/${hash}`,
		overview: (hash: string) => {
			return `${ServerUrls.server.root(hash)}/overview`
		},
		players: (hash: string, category?: string) => {
			return `${ServerUrls.server.root(hash)}/players${category ? `/${category}` : ''}`
		},
		console: (hash: string) => {
			return `${ServerUrls.server.root(hash)}/console`
		},

		logs: (hash: string) => {
			return `${ServerUrls.server.root(hash)}/logs`
		},

		files: (hash: string) => {
			return `${ServerUrls.server.root(hash)}/files`
		},

		backups: (hash: string) => {
			return `${ServerUrls.server.root(hash)}/backups`
		},

		settings: (hash: string) => {
			return `${ServerUrls.server.root(hash)}/settings`
		},

		software: (hash: string) => {
			return `${ServerUrls.server.root(hash)}/software`
		},

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
	mods: (serverHash: string) => {
		return `${ServerUrls.server.root(serverHash)}/mods`
	},
	mod: (serverHash: string, modId: number | string) => {
		return `${ServerUrls.server.root(serverHash)}/mods/${modId}`
	},
	files: (serverHash: string, modId: number | string) => {
		return `${ServerUrls.server.root(serverHash)}/mods/${modId}/files`
	},
	images: (serverHash: string, modId: number | string) => {
		return `${ServerUrls.server.root(serverHash)}/mods/${modId}/images`
	},
	relations: (serverHash: string, modId: number | string) => {
		return `${ServerUrls.server.root(serverHash)}/mods/${modId}/relations`
	},
	search: (serverHash: string, query?: ISearchModsQuery) => {
		const resultQuery: ISearchModsQuery = { ...searchModsBaseRequest, ...query }
		const resultQueryString = Object.entries(resultQuery)
			.filter((item) => item[1])
			.map(
				(item, index) =>
					`${index === 0 ? '?' : ''}${item[0]}=${item[1]}${
						index !== Object.keys(resultQuery).length - 1 ? '&' : ''
					}`
			)
			.join('')

		return `${ServerUrls.server.root(serverHash)}/mods/search${resultQueryString}`
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
