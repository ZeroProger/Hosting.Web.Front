import { createEffect } from 'effector'

import { startServer, stopServer } from '../api'
import { IServerControlRequest } from '../types'

export const startFx = createEffect<IServerControlRequest, void>(
	async ({ gameServerHash }) => await startServer({ gameServerHash })
)

export const stopFx = createEffect<IServerControlRequest, void>(
	async ({ gameServerHash }) => await stopServer({ gameServerHash })
)

export const $pendingStartServer = startFx.pending
export const $pendingStopServer = stopFx.pending
