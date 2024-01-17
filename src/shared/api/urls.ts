export const CurseForgeApiUrls = {
	modloaders: () => `softwares/modloaders`,
	modloader: (name: string) => `softwares/modloaders/${name}`,

	gameVersions: () => `softwares/versions`,
	gameVersion: (version: string) => `softwares/versions/${version}`,

	searchMods: () => 'mods/search',
	mod: (id: number | string) => `mods/${id}`,
	modDescription: (id: number | string) => `mods/${id}/description`,

	categories: () => 'categories',
	groupedCategories: () => 'categories/grouped-by-class',
}

export const AuthApiUrls = {
	signIn: () => '/account/login',
	signUp: () => '/account/register',
	logout: () => '/account/logout',
}

//#TODO: не забыть
export const ServerApiUrls = {
	create: () => '/server/start',
	start: () => '/servers/controller/start-server',
	stop: () => '/servers/controller/stop-server',
	update: () => '/server/update',
	remove: () => '/server/remove',
	server: (hash: string) => `/server/${hash}`,
	userServers: () => '/servers/private-servers',
	publicServers: () => '/servers/public-servers',
	sendCommand: () => '/servers/controller/send-message',
	getServerInfo: () => '/servers/controller/get-server-info',
	getServerLogs: () => '/servers/controller/get-server-logs',
}

export const SubscriptionApiUrls = {}
