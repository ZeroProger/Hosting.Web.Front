import { useQuery } from 'react-query'

import { getBannedIps } from '../../api'

export function useBannedIps(gameServerHash: string) {
	const { data: bannedIps } = useQuery(['banned ips', gameServerHash], () =>
		getBannedIps(gameServerHash)
	)
	return { bannedIps }
}
