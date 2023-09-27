import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { $serverHash } from '@/shared/store'

import { getServerFiles } from '../api'

export function useFetchServerFiles() {
	const serverHash = useStore($serverHash)

	return useQuery({
		queryKey: [ReactQueryKeys.serverFiles, serverHash],
		queryFn: () => getServerFiles(serverHash),
		enabled: !!serverHash,
	})
}
