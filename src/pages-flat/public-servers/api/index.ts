import { IServerListRequest } from '@/entities/server/types/requests'

import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'
import { IServer } from '@/shared/types'

export function getPublicServers({ kind }: IServerListRequest) {
	return axiosAuth().post<{servers: IServer[]}>(ServerApiUrls.publicServers(), { kind })
}
