import { createEffect, createStore } from 'effector'

import { servers } from '@/shared/$fake-data$/server.data'
import { IServer } from '@/shared/types'

//#TODO: переделать на вызовы бэка
export const getPublicServersFx = createEffect(async () => servers.slice(1))

export const $pendingPublicServers = getPublicServersFx.pending

export const $publicServers = createStore<IServer[]>([]).on(
	getPublicServersFx.doneData,
	(_, publicServers) => publicServers
)
