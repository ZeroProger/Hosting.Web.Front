import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getServer, getUserServers } from './api'

export function useFetchServer(serverHash: string | null | undefined) {
	return useQuery({
		queryKey: [ReactQueryKeys.server, serverHash],
		queryFn: () => getServer(serverHash),
		// select: ({ data }) => data,
		enabled: !!serverHash,
	})
}

export function useFetchUserServers() {
	return useQuery({
		queryKey: [ReactQueryKeys.userServers],
		queryFn: () => getUserServers({ kind: 'minecraft' }),
		// select: ({ data }) => data,
	})
}
