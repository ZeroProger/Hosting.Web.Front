import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'

import { getServerMainInfo } from '../api'
import { serverMainInfoPollingInterval } from '../config'

export function useFetchServerMainInfo() {
	const serverHash = useStore($serverHash)
	const { data: server } = useFetchServer(serverHash)

	return useQuery({
		queryKey: [ReactQueryKeys.serverMainInfo, serverHash],
		queryFn: () => getServerMainInfo({ gameServerHash: serverHash!, postSystem: 'query' }),
		enabled: !!serverHash && server !== undefined && server.isOnline,
		refetchInterval: serverMainInfoPollingInterval,
	})
}
