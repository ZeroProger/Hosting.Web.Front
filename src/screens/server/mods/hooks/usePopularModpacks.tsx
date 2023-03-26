import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModsSearchUrl, popularModpacksRequest } from '@/config/curseforge-api.config'

export const usePopularModpacks = () => {
	const queryResult = useQuery(
		[getModsSearchUrl() + '/modpacks', popularModpacksRequest],
		() => CurseForgeService.getMods(popularModpacksRequest),
		{
			select: ({ data }) => data.data,
		}
	)

	return queryResult
}
