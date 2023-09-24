import { useQuery } from 'react-query'

import { ServerUrls } from '@/shared/routes/urls'

import { getWhitelist } from '../../api'

export function useWhitelist(gameServerHash: string) {
	const { data: whitelist, isLoading } = useQuery(
		[ServerUrls.server.players(gameServerHash, 'white-list')],
		() => getWhitelist(gameServerHash)
	)
	return { whitelist, isLoading }
}
