import { toast } from 'react-toastify'

import { toastError } from '@/shared/lib/react-toastify/toast-error'

import { ServerService } from '../../service'
import { ServerRequest, ServerStartRequest } from '../../types/requests'

export async function getServer({ gameServerHash }: ServerRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const response = await ServerService.compositor.getServerByHash(String(gameServerHash))

		return response.data
	} catch (error) {
		toastError(error)
	}
}

// #TODO переписать под бек
export async function startServer({ gameServerHash }: ServerStartRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const startContainerResponse = await ServerService.compositor.startServerContainer({
			gameServerHash,
		})

		if (!startContainerResponse.data.success) throw new Error('Не удалось запустить контейнер')

		const startGameServerResponse = await ServerService.controller.startGameServer({
			gameServerHash,
		})

		if (!startGameServerResponse.data.success)
			throw new Error('Не удалось запустить игровой сервер')

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

		const stopGameServerResponse = await ServerService.controller.stopGameServer({
			gameServerHash,
		})

		if (!stopGameServerResponse.data.success)
			throw new Error('Не удалось остановить игровой сервер')

		window.location.reload()

		toast.success('Сервер остановлен')
	} catch (error) {
		toastError(error)
	}
}
