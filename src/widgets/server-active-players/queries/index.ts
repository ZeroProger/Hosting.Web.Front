import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { $serverHash } from '@/shared/store'

import { getActivePlayers } from '../api'
import { serverActivePlayersPollingInterval } from '../config'

export function useFetchServerActivePlayers() {
	const serverHash = useStore($serverHash)

	return useQuery({
		queryKey: [ReactQueryKeys.serverActivePlayers, serverHash],
		queryFn: () => getActivePlayers(serverHash!),
		enabled: !!serverHash,
		refetchInterval: serverActivePlayersPollingInterval,
	})
}
