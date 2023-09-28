import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { $serverHash } from '@/shared/store'

import { getServerFileContent, getServerFiles } from '../api'

export function useFetchServerFiles() {
	const serverHash = useStore($serverHash)

	return useQuery({
		queryKey: [ReactQueryKeys.serverFiles, serverHash],
		queryFn: () => getServerFiles(serverHash),
		enabled: !!serverHash,
	})
}

export function useFetchServerFileContent(path: string = '') {
	const serverHash = useStore($serverHash)

	return useQuery({
		queryKey: [ReactQueryKeys.serverFileContent, serverHash, path],
		queryFn: () => getServerFileContent(serverHash, path),
		enabled: !!serverHash && path !== '',
	})
}
