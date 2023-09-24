import { useQuery } from '@tanstack/react-query'

import { ServerUrls } from '@/shared/routes/urls'

import { getBannedPlayers } from '../../api'

export function useBannedPlayers(gameServerHash: string) {
	const { data: bannedPlayers, isLoading } = useQuery({
		queryKey: [ServerUrls.server.players(gameServerHash, 'banned-players'), gameServerHash],
		queryFn: () => getBannedPlayers(gameServerHash),
	})

	return { bannedPlayers, isLoading }
}
