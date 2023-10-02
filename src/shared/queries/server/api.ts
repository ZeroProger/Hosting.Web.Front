import { IServerListRequest } from '@/entities/server/types/requests'

import { servers } from '@/shared/$fake-data$/server.data'

export function getServer(serverHash: string | null | undefined) {
	// return axiosAuth().post<IServer>(ServerApiUrls.server(serverHash!))
	return servers.find((server) => server.gameServerHash === serverHash)
}

export function getUserServers({ kind }: IServerListRequest) {
	// return axiosAuth().post<IServer[]>(ServerApiUrls.userServers(), { kind })
	return servers
}
