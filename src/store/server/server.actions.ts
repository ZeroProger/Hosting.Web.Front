import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
	IGetServerRequest,
	IServerGetListRequest,
	IServerGetListResponse,
} from '@/shared/types/requests/server-requests.types'
import { IServer } from '@/shared/types/server.types'

import { ServerService } from '@/services/server.service'

import { toastError } from '@/utils/toast/toast-error'

import { getServersUrl } from '@/config/api/servers-api.config'

export const getServer = createAsyncThunk<IServer, IGetServerRequest>(
	getServersUrl('/get-server-by-hash'),
	async ({ gameServerHash }, thunkApi) => {
		try {
			const response = await ServerService.compositor.getServerByHash(gameServerHash)

			toast.success('Сервер успешно получен')

			return response.data
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)

export const getServers = createAsyncThunk<IServerGetListResponse, IServerGetListRequest>(
	getServersUrl(),
	async (request, thunkApi) => {
		try {
			const response = await ServerService.compositor.getServers(request)

			toast.success('Список серверов получен')

			return response.data
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)
