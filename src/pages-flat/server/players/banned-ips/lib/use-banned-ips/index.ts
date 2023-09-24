import { useQuery } from '@tanstack/react-query'

import { ServerUrls } from '@/shared/routes/urls'

import { getBannedIps } from '../../api'

export function useBannedIps(gameServerHash: string) {
	const { data: bannedIps, isLoading } = useQuery({
		queryKey: [ServerUrls.server.players(gameServerHash, 'banned-ips'), gameServerHash],
		queryFn: () => getBannedIps(gameServerHash),
	})

	return { bannedIps, isLoading }
}
