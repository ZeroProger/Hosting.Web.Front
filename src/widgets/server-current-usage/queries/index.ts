import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'

import { getServerCurrentUsage } from '../api'
import { serverCurrentUsagePollingInterval } from '../config'

export function useFetchServerCurrentUsage() {
	const serverHash = useStore($serverHash)
	const { data: server } = useFetchServer(serverHash)

	return useQuery({
		queryKey: [ReactQueryKeys.serverCurrentUsage, serverHash, server?.isOnline!],
		queryFn: () => getServerCurrentUsage(server?.isOnline!),
		enabled: !!serverHash,
		refetchInterval: serverCurrentUsagePollingInterval,
	})
}
