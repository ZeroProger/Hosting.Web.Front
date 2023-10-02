export enum CForgeSoftwareType {
	Any = 0,
	Forge = 1,
	Fabric = 4,
}

export enum CForgeModClassType {
	BukkitPlugins = 5,
	Mods = 6,
	Modpacks = 4471,
	ResourcePacks = 12,
	Worlds = 17,
}

export enum CForgeModSortBy {
	Matching = 1,
	Popularity = 2,
	LastUpdated = 3,
	TotalDownloads = 6,
}

interface ICForgeFilterOption {
	label: string
	value: string | number
}

export const sortOptions: ICForgeFilterOption[] = [
	{ label: 'Совпадению', value: CForgeModSortBy.Matching },
	{ label: 'Популярности', value: CForgeModSortBy.Popularity },
	{ label: 'Последнему обновлению', value: CForgeModSortBy.LastUpdated },
	{ label: 'Количеству скачиваний', value: CForgeModSortBy.TotalDownloads },
]

export const modLoaders: ICForgeFilterOption[] = [
	{ label: 'Любое', value: CForgeSoftwareType.Any },
	{ label: 'Forge', value: CForgeSoftwareType.Forge },
	{ label: 'Fabric', value: CForgeSoftwareType.Fabric },
]
