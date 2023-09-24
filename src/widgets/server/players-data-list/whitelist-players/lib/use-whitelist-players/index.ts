import { useQuery } from 'react-query'

import { ServerUrls } from '@/shared/routes/urls'

import { getWhitelistPlayers } from '../../api'

export function useWhitelistPlayers(gameServerHash: string) {
	const { data: whitelistPlayers } = useQuery(
		[ServerUrls.server.players(gameServerHash, 'white-list')],
		() => getWhitelistPlayers(gameServerHash)
	)
	return { whitelistPlayers }
}
