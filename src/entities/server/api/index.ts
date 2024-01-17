import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'

import { IServerMainInfoRequest, IServerMainInfoResponse } from '../types/requests'

export async function getServerMainInfo({ gameServerHash, postSystem }: IServerMainInfoRequest) {
	console.log('api', gameServerHash)
	if (!gameServerHash) throw new Error('gameServerHash не указан')

	const response = await axiosAuth().post<IServerMainInfoResponse>(ServerApiUrls.getServerInfo(), {
		gameServerHash,
		postSystem,
	})

	if (!response.data.success) throw new Error('Не удалось получить информацию о сервере')

	return response.data
}
