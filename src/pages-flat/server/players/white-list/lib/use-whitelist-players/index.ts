import { useQuery } from '@tanstack/react-query'

import { ServerUrls } from '@/shared/routes/urls'

import { getWhitelist } from '../../api'

export function useWhitelist(gameServerHash: string) {
	const { data: whitelist, isLoading } = useQuery({
		queryKey: [ServerUrls.server.players(gameServerHash, 'white-list')],
		queryFn: () => getWhitelist(gameServerHash),
	})

	return { whitelist, isLoading }
}
