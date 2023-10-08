import { SearchModsRequest } from '@/shared/api/curse-forge'
import { CForgeModClassType } from '@/shared/config/curse-forge'

export const popularRequestPageSize = 6

export const popularModsRequest: SearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.Mods,
	index: 0,
	pageSize: popularRequestPageSize,
}

export const popularModpacksRequest: SearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.Modpacks,
	index: 0,
	pageSize: popularRequestPageSize,
}


export const popularWorldsRequest: SearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.Worlds,
	index: 0,
	pageSize: popularRequestPageSize,
}

export const popularPluginsRequest: SearchModsRequest = {
	gameId: 432,
	sortField: 2,
	sortOrder: 'desc',
	classId: CForgeModClassType.BukkitPlugins,
	index: 0,
	pageSize: popularRequestPageSize,
}
