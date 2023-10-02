import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getBannedIps } from '../api'

export function useBannedIps(gameServerHash: string) {
	const { data: bannedIps, isLoading } = useQuery({
		queryKey: [ReactQueryKeys.bannedIps, gameServerHash],
		queryFn: () => getBannedIps(gameServerHash),
	})

	return { bannedIps, isLoading }
}
