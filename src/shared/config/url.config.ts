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

export const HelpUrls = {
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
