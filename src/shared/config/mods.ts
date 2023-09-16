import { SearchModsRequest } from '@/shared/api/curse-forge'

import { CForgeModClassType } from './curse-forge'

export const searchModsBaseRequest: SearchModsRequest = {
	gameId: 432,
	sortField: 1,
	sortOrder: 'desc',
	index: 0,
	pageSize: 12,
}

export const popularModsRequest: SearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.Mods,
	index: 0,
	pageSize: 12,
}

export const popularModpacksRequest: SearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.Modpacks,
	index: 0,
	pageSize: 12,
}

export const popularResourcePacksRequest: SearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.ResourcePacks,
	index: 0,
	pageSize: 12,
}

export const popularWorldsRequest: SearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.Worlds,
	index: 0,
	pageSize: 12,
}

export const popularPluginsRequest: SearchModsRequest = {
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
