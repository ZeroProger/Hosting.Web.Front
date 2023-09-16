export const CurseForgeApiUrls = {
	modloaders: () => `softwares/modloaders`,
	modloader: (name: string) => `softwares/modloaders/${name}`,

	versions: () => ``,
	version: (version: string) => `softwares/versions/${version}`,

	searchMods: () => 'mods/search',
	mod: (id: number | string) => `mods/${id}`,
	modDescription: (id: number | string) => `mods/${id}/description`,

	categories: () => 'categories',
	groupedCategories: () => 'categories/grouped-by-class',
}

export const AuthApiUrls = {}

export const ModApiUrls = {}

export const ServerApiUrls = {}

export const SubscriptionApiUrls = {}
