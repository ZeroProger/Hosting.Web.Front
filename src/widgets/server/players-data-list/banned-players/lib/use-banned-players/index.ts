import { useQuery } from 'react-query'

import { getBannedPlayers } from '../../api'

export function useBannedPlayers(gameServerHash: string) {
	const { data: bannedPlayers } = useQuery(['banned', gameServerHash], () =>
		getBannedPlayers(gameServerHash)
	)
	return { bannedPlayers }
}
