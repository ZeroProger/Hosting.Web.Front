import { SearchModsRequest } from '@/shared/api/curse-forge'

import { CForgeModClassType, CForgeModSortBy } from './curse-forge'

export const searchModsBaseRequestPageSize = 24

export const searchModsBaseRequest: SearchModsRequest = {
	gameId: 432,
	sortField: CForgeModSortBy.Matching,
	sortOrder: 'desc',
	index: 0,
	pageSize: searchModsBaseRequestPageSize,
}

export const modClassesMap = new Map<number, string>([
	[CForgeModClassType.BukkitPlugins, 'Bukkit Plugins'],
	[CForgeModClassType.Modpacks, 'Modpacks'],
	[CForgeModClassType.Mods, 'Mods'],
	[CForgeModClassType.ResourcePacks, 'Resource Packs'],
	[CForgeModClassType.Worlds, 'Worlds'],
])
