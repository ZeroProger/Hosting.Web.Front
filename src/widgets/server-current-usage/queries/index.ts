import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { $serverHash } from '@/shared/store'

import { getServerCurrentUsage } from '../api'
import { serverCurrentUsagePollingInterval } from '../config'

export function useFetchServerCurrentUsage() {
	const serverHash = useStore($serverHash)

	return useQuery({
		queryKey: [ReactQueryKeys.serverCurrentUsage, serverHash],
		queryFn: () => getServerCurrentUsage(),
		enabled: !!serverHash,
		refetchInterval: serverCurrentUsagePollingInterval,
	})
}
