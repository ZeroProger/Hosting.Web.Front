import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { $serverHash } from '@/shared/store'

import { getServerMainInfo } from '../api'
import { serverMainInfoPollingInterval } from '../config'

export function useFetchServerMainInfo() {
	const serverHash = useStore($serverHash)

	return useQuery({
		queryKey: [ReactQueryKeys.serverMainInfo, serverHash],
		queryFn: () => getServerMainInfo(),
		enabled: !!serverHash,
		refetchInterval: serverMainInfoPollingInterval,
	})
}
