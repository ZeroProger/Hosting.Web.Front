import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModsSearchUrl, popularPluginsRequest } from '@/config/api/curseforge-api.config'

export const usePopularPlugins = () => {
	const queryResult = useQuery(
		[getModsSearchUrl() + '/plugins', popularPluginsRequest],
		() => CurseForgeService.getMods(popularPluginsRequest),
		{
			select: ({ data }) => data.data,
		}
	)

	return queryResult
}
