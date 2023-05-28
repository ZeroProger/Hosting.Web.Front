import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { IGetServerRequest } from '@/shared/types/requests/server-requests.types'
import { IServer } from '@/shared/types/server.types'

import { ServerService } from '@/services/server.service'

import { toastError } from '@/utils/toast/toast-error'

import { getServersUrl } from '@/config/api/servers-api.config'

export const getServer = createAsyncThunk<IServer, IGetServerRequest>(
	getServersUrl('/get-server-by-hash'),
	async ({ gameServerHash }, thunkApi) => {
		console.log(gameServerHash)
		try {
			if (!gameServerHash) throw new Error('gameServerHash не указан')

			const response = await ServerService.compositor.getServerByHash(String(gameServerHash))

			toast.success('Сервер успешно получен')

			return response.data
		} catch (error) {
			console.log(error)
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)
