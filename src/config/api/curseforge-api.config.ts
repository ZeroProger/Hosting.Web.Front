import { CForgeModClassType } from '@/shared/types/curseforge.types'
import { ISearchModsRequest } from '@/shared/types/requests/curseforge-requests.types'

export const getModloadersUrl = () => 'softwares/modloaders'
export const getModloaderUrl = (name: string) => `softwares/modloaders/${name}`

export const getMinecraftVersionsUrl = () => 'softwares/versions'
export const getMinecraftVersionUrl = (version: string) => `softwares/versions/${version}`

export const getModsSearchUrl = () => 'mods/search'
export const getModByIdUrl = (id: number) => `mods/${id}`
export const getModFullDescriptionUrl = (id: number) => `mods/${id}/description`

export const getGroupedCategories = () => 'categories/grouped-by-class'
export const getModsCategories = () => 'categories'

export const popularModsRequest: ISearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.Mods,
	index: 0,
	pageSize: 12,
}

export const popularModpacksRequest: ISearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.Modpacks,
	index: 0,
	pageSize: 12,
}

export const popularResourcePacksRequest: ISearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.ResourcePacks,
	index: 0,
	pageSize: 12,
}

export const popularWorldsRequest: ISearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.Worlds,
	index: 0,
	pageSize: 12,
}

export const popularPluginsRequest: ISearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.BukkitPlugins,
	index: 0,
	pageSize: 12,
}

export const searchModsBaseRequest: ISearchModsRequest = {
	gameId: 432,
	sortField: 1,
	sortOrder: 'desc',
	index: 0,
	pageSize: 12,
}

export const modClassesMap = new Map<number, string>([
	[CForgeModClassType.BukkitPlugins, 'Bukkit Plugins'],
	[CForgeModClassType.Modpacks, 'Modpacks'],
	[CForgeModClassType.Mods, 'Mods'],
	[CForgeModClassType.ResourcePacks, 'Resource Packs'],
	[CForgeModClassType.Worlds, 'Worlds'],
])
