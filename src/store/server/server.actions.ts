import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
	IGetServerRequest,
	IServerStartRequest,
	IServerStartResponse,
	IServerStopRequest,
	IServerStopResponse,
} from '@/shared/types/requests/server-requests.types'
import { IServer } from '@/shared/types/server.types'

import { ServerService } from '@/services/server.service'

import { toastError } from '@/utils/toast/toast-error'

import {
	getServersUrl,
	getStartGameServerUrl,
	getStopGameServerUrl,
} from '@/config/api/servers-api.config'

export const getServer = createAsyncThunk<IServer, IGetServerRequest>(
	getServersUrl('/get-server-by-hash'),
	async ({ gameServerHash }, thunkApi) => {
		try {
			if (!gameServerHash) throw new Error('gameServerHash не указан')

			const response = await ServerService.compositor.getServerByHash(String(gameServerHash))

			toast.success('Сервер успешно получен')

			return response.data
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)

export const startServer = createAsyncThunk<IServerStartResponse, IServerStartRequest>(
	getStartGameServerUrl(),
	async ({ gameServerHash }, thunkApi) => {
		try {
			if (!gameServerHash) throw new Error('gameServerHash не указан')

			const startContainerResponse = await ServerService.compositor.startServerContainer({
				gameServerHash: gameServerHash,
			})

			if (!startContainerResponse.data.success) throw new Error('Не удалось запустить контейнер')

			const startGameServerResponse = await ServerService.controller.startGameServer({
				gameServerHash: gameServerHash,
			})

			if (!startGameServerResponse.data.success)
				throw new Error('Не удалось запустить игровой сервер')

			window.location.reload()

			toast.success('Сервер успешно запущен')

			return startGameServerResponse.data
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)

export const stopServer = createAsyncThunk<IServerStopResponse, IServerStopRequest>(
	getStopGameServerUrl(),
	async ({ gameServerHash }, thunkApi) => {
		try {
			if (!gameServerHash) throw new Error('gameServerHash не указан')

			const stopGameServerResponse = await ServerService.controller.stopGameServer({
				gameServerHash: gameServerHash,
			})

			if (!stopGameServerResponse.data.success)
				throw new Error('Не удалось остановить игровой сервер')

			window.location.reload()

			toast.success('Сервер успешно остановлен')

			return stopGameServerResponse.data
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)
