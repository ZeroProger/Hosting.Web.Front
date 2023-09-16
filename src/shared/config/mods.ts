import { ISearchModsQuery, ISearchModsRequest } from '@/shared/api/curse-forge'

import { CForgeModClassType } from './curse-forge'

export const searchModsBaseRequest: ISearchModsRequest = {
	gameId: 432,
	sortField: 1,
	sortOrder: 'desc',
	index: 0,
	pageSize: 12,
}

export const searchModsBaseQuery: ISearchModsQuery = {
	sortField: 1,
	sortOrder: 'desc',
	index: 0,
	pageSize: 20,
}

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

export const modClassesMap = new Map<number, string>([
	[CForgeModClassType.BukkitPlugins, 'Bukkit Plugins'],
	[CForgeModClassType.Modpacks, 'Modpacks'],
	[CForgeModClassType.Mods, 'Mods'],
	[CForgeModClassType.ResourcePacks, 'Resource Packs'],
	[CForgeModClassType.Worlds, 'Worlds'],
])
