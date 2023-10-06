import { useQuery } from '@tanstack/react-query'

import { SearchModsRequest } from '@/shared/api/curse-forge'
import { ReactQueryKeys } from '@/shared/lib/react-query'

import { searchMods } from '../api'

export function useFetchFilteredMods(request: SearchModsRequest) {
	return useQuery({
		queryKey: [ReactQueryKeys.modsCompilation, JSON.stringify(request)],
		queryFn: () => searchMods(request),
		select: ({ data }) => data.data,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		enabled: !!request,
	})
}
