import { toast } from 'react-toastify'

import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'
import { toastError } from '@/shared/lib/react-toastify/toast-error'

import { IServerControlRequest, IServerStartResponse, IServerStopResponse } from '../types'

// #TODO переписать под бек
export async function startServer({ gameServerHash }: IServerControlRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const response = await axiosAuth().post<IServerStartResponse>(ServerApiUrls.start(), {
			gameServerHash,
		})

		if (!response.data.success) throw new Error('Не удалось запустить сервер')

		toast.success('Сервер запущен')
	} catch (error) {
		toastError(error)
	}
}

// #TODO переписать под бек
export async function stopServer({ gameServerHash }: IServerControlRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const response = await axiosAuth().post<IServerStopResponse>(ServerApiUrls.stop(), {
			gameServerHash,
		})

		if (!response.data.success) throw new Error('Не удалось остановить сервер')

		toast.success('Сервер остановлен')
	} catch (error) {
		toastError(error)
	}
}
