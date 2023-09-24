import { createEffect, createEvent, createStore } from 'effector'

import { IServerRequest } from '@/entities/server/types/requests'

import { servers } from '@/shared/$fake-data$/server.data'
import { IServer } from '@/shared/types'

export const getServerFx = createEffect<IServerRequest, IServer | undefined>(
	async ({ gameServerHash }) => {
		return servers.find((server) => server.gameServerHash === gameServerHash)
		// try {
		// 	if (!gameServerHash) throw new Error('gameServerHash не указан')

		// 	const response = await axiosAuth().post<IServer>(ServerApiUrls.server(gameServerHash), {
		// 		gameServerHash,
		// 	})

		// 	return response.data
		// } catch (error) {
		// 	toastError(error)
		// }
	}
)

export const resetServerFx = createEvent()

export const $pendingServer = getServerFx.pending

export const $server = createStore<IServer | undefined | null>(null)
	.on(getServerFx.doneData, (_, server) => server)
	.reset(resetServerFx)
