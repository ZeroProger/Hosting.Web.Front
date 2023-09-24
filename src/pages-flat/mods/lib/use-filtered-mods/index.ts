import { useStore } from 'effector-react'
import { useQuery } from 'react-query'

import { Mod, SearchModsRequest, axiosCurseForge } from '@/shared/api/curse-forge'
import { CurseForgeApiUrls } from '@/shared/api/urls'
import { ModUrls } from '@/shared/routes/urls'
import { $server } from '@/shared/store'

export function useFilteredMods(request: SearchModsRequest, queryKey: string) {
	const server = useStore($server)
	return useQuery(
		[ModUrls.search(server?.gameServerHash!) + `/${queryKey}`, request],
		() => axiosCurseForge.post<{ data: Mod[] }>(CurseForgeApiUrls.searchMods(), request),
		{
			select: ({ data }) => data.data,
		}
	)
}
