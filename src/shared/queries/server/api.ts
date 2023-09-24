import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'
import { IServer } from '@/shared/types'

export function getServer(serverHash: string | undefined) {
	return axiosAuth().post<IServer>(ServerApiUrls.server(serverHash!))
}
