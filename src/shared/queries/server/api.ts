import { IServerListRequest } from '@/entities/server/types/requests'

import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'
import { IServer } from '@/shared/types'

export function getServer(serverHash: string | null | undefined) {
	return axiosAuth().post<IServer>(ServerApiUrls.server(serverHash!))
}

export function getUserServers({ kind }: IServerListRequest) {
	return axiosAuth().post<{ servers: IServer[] }>(ServerApiUrls.userServers(), { kind })
}
