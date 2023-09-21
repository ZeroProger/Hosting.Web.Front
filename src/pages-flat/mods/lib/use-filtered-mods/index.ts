import { useQuery } from 'react-query'

import { Mod, SearchModsRequest, axiosCurseForge } from '@/shared/api/curse-forge'
import { ModUrls } from '@/shared/routes/urls'

export function useFilteredMods(request: SearchModsRequest, queryKey: string) {
	return useQuery(
		[ModUrls.search() + `/${queryKey}`, request],
		() => axiosCurseForge.post<{ data: Mod[] }>(ModUrls.search(), request),
		{
			select: ({ data }) => data.data,
		}
	)
}
