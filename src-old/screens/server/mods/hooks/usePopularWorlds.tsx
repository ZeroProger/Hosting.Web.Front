import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModsSearchUrl, popularWorldsRequest } from '@/config/api/curseforge-api.config'

export const usePopularWorlds = () => {
	const queryResult = useQuery(
		[getModsSearchUrl() + '/worlds', popularWorldsRequest],
		() => CurseForgeService.getMods(popularWorldsRequest),
		{
			select: ({ data }) => data.data,
		}
	)

	return queryResult
}
