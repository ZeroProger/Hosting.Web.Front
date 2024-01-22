import { axiosClassic } from '@/shared/api/common'
import { ServerApiUrls } from '@/shared/api/urls'
import { IServer } from '@/shared/types'

export function getPublicServers() {
	return axiosClassic.post<IServer[]>(ServerApiUrls.publicServers())
}
