import { toast } from 'react-toastify'

import { toastError } from '@/shared/lib/react-toastify/toast-error'

import { ServerService } from '../../../../services-temp/server-service'
import { ServerRequest, ServerStartRequest } from '../../types/requests'

export async function getServer({ gameServerHash }: ServerRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const response = await ServerService.server(gameServerHash)

		return response.data
	} catch (error) {
		toastError(error)
	}
}

// #TODO переписать под бек
export async function startServer({ gameServerHash }: ServerStartRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const response = await ServerService.start({
			gameServerHash,
		})

		if (!response.data.success) throw new Error('Не удалось запустить сервер')

		window.location.reload()
		toast.success('Сервер запущен')
	} catch (error) {
		toastError(error)
	}
}

// #TODO переписать под бек
export async function stopServer({ gameServerHash }: ServerRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const response = await ServerService.stop({
			gameServerHash,
		})

		if (!response.data.success) throw new Error('Не удалось остановить сервер')

		window.location.reload()

		toast.success('Сервер остановлен')
	} catch (error) {
		toastError(error)
	}
}
