import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModsSearchUrl, popularModsRequest } from '@/config/curseforge-api.config'

export const usePopularMods = () => {
	const queryResult = useQuery(
		[getModsSearchUrl() + '/mods', popularModsRequest],
		() => CurseForgeService.getMods(popularModsRequest),
		{
			select: ({ data }) => data.data,
		}
	)

	return queryResult
}
