import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getServer, getUserServers } from './api'

//#TODO: переписать все useStore($server) на этот хук
// в server-layout брать serverHash из useParams и записывать в effector store $serverHash. после в компонентах делать const serverHash = useStore($serverHash) и прокидывать этот serverHash во все react-query хуки требующие serverHash.
export function useFetchServer(serverHash: string | null | undefined) {
	return useQuery({
		queryKey: [ReactQueryKeys.server, serverHash],
		queryFn: () => getServer(serverHash),
		// select: ({ data }) => data,
		enabled: !!serverHash,
	})
}

export function useFetchUserServers() {
	return useQuery({
		queryKey: [ReactQueryKeys.userServers],
		queryFn: () => getUserServers({ kind: 'minecraft' }),
		// select: ({ data }) => data,
	})
}
