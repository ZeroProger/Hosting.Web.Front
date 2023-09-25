import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getBannedPlayers } from '../../api'

export function useBannedPlayers(gameServerHash: string) {
	const { data: bannedPlayers, isLoading } = useQuery({
		queryKey: [ReactQueryKeys.bannedPlayers, gameServerHash],
		queryFn: () => getBannedPlayers(gameServerHash),
	})

	return { bannedPlayers, isLoading }
}
