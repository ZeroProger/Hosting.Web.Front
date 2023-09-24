import { useQuery } from 'react-query'

import { getOperatorsPlayers } from '../../api'

export function useOperatorsPlayers(gameServerHash: string) {
	const { data: operatorsPlayers } = useQuery(['operators', gameServerHash], () =>
		getOperatorsPlayers(gameServerHash)
	)
	return { operatorsPlayers }
}
