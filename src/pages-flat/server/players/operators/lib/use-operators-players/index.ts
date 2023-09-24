import { useQuery } from 'react-query'

import { getOperators } from '../../api'

export function useOperators(gameServerHash: string) {
	const { data: operators } = useQuery(['operators', gameServerHash], () =>
		getOperators(gameServerHash)
	)
	return { operators }
}
