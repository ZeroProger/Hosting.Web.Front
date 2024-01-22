import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getPublicServers } from '../api'

export function useFetchPublicServers() {
	return useQuery({
		queryKey: [ReactQueryKeys.publicServers],
		queryFn: () => getPublicServers({ kind: 'minecraft' }),
		select: (data) => data.data.servers,
	})
}
