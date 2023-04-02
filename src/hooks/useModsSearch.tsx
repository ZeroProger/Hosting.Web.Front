import { useQuery } from 'react-query'

import { ISearchModsRequest } from '@/shared/types/requests/curseforge-requests.types'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModsSearchUrl } from '@/config/curseforge-api.config'

export const useModsSearch = (request: ISearchModsRequest) => {
	const queryResult = useQuery(
		[getModsSearchUrl() + JSON.stringify(request), request],
		() => CurseForgeService.getMods(request),
		{
			select: ({ data }) => data.data,
		}
	)

	return queryResult
}
