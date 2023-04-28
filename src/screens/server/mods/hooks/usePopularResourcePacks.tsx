import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModsSearchUrl, popularResourcePacksRequest } from '@/config/api/curseforge-api.config'

export const usePopularResourcePacks = () => {
	const queryResult = useQuery(
		[getModsSearchUrl() + '/resource-packs', popularResourcePacksRequest],
		() => CurseForgeService.getMods(popularResourcePacksRequest),
		{
			select: ({ data }) => data.data,
		}
	)

	return queryResult
}
