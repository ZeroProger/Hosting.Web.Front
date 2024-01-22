import { toast } from 'react-toastify'

import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'

import { IServerStartRequest, IServerStartResponse } from '../types'

export async function startServer({ gameServerHash }: IServerStartRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const response = await axiosAuth().post<IServerStartResponse>(ServerApiUrls.start(), {
			gameServerHash,
		})

		if (!response.data.success) throw new Error('Не удалось запустить сервер')

		toast.success('Сервер запущен')

		return response.data
	} catch (error: any) {
		console.log(error?.response?.status)
		if (error?.response?.status >= 400) toast.error('Не удалось запустить сервер')
	}
}
