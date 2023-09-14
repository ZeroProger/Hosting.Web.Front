export const ServerUrls = {
	createServer(query?: string) {
		return `/servers/create${query ? `?${query}` : ''}`
	},
}
