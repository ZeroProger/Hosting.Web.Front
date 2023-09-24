import { useQuery } from '@tanstack/react-query'

import { ServerUrls } from '@/shared/routes/urls'

import { getOperators } from '../../api'

export function useOperators(gameServerHash: string) {
	const { data: operators, isLoading } = useQuery({
		queryKey: [ServerUrls.server.players(gameServerHash, 'operators'), gameServerHash],
		queryFn: () => getOperators(gameServerHash),
	})

	return { operators, isLoading }
}
