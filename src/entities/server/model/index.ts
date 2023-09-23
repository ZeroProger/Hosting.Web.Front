import { createEffect, createEvent, createStore } from 'effector'

import { startServer, stopServer } from '../api'
import { IServer } from '../types'
import { IServerRequest, IServerStartRequest, IServerStopRequest } from '../types/requests'

const servers: IServer[] = [
	{
		gameServerName: 'First test Server',
		gameServerHash: 'e49e80aff7d038738181e79ad66a0dbbd3eb678b447c98fbac6cbfea1ece452e',
		gameKind: 'minecraft',
		serverIp: '194.74.25.12',
		isOnline: true,
		serverPorts: [
			{ id: 1, port: 10004, portKind: 'controller', creationDate: 100, updateDate: 100 },
		],
	},
	{
		gameServerName: 'Second test Server',
		gameServerHash: 'fd5c41aff7d038738181e79ad66a0dbbd3eb678b447c98fbac6cbfea1efd5c41',
		gameKind: 'minecraft',
		serverIp: '221.91.32.16',
		isOnline: false,

		serverPorts: [
			{ id: 1, port: 10006, portKind: 'controller', creationDate: 100, updateDate: 100 },
		],
	},
]

export const getServerFx = createEffect<IServerRequest, IServer | undefined>(
	async ({ gameServerHash }) => servers.find((server) => server.gameServerHash === gameServerHash)
)

export const resetServerFx = createEvent()

export const getPublicServersFx = createEffect(async () => servers)

export const getUserServersFx = createEffect(async () => servers)

export const startFx = createEffect<IServerStartRequest, void>(
	async ({ gameServerHash }) => await startServer({ gameServerHash })
)

export const stopFx = createEffect<IServerStopRequest, void>(
	async ({ gameServerHash }) => await stopServer({ gameServerHash })
)

export const $pendingServer = getServerFx.pending
export const $pendingStartServer = startFx.pending
export const $pendingStopServer = stopFx.pending
export const $pendingUserServers = getUserServersFx.pending
export const $pendingPublicServers = getPublicServersFx.pending

export const $server = createStore<IServer | undefined | null>(null)
	.on(getServerFx.doneData, (_, server) => server)
	.reset(resetServerFx)

export const $publicServers = createStore<IServer[]>([]).on(
	getPublicServersFx.doneData,
	(_, publicServers) => publicServers
)

export const $userServers = createStore<IServer[]>([]).on(
	getUserServersFx.doneData,
	(_, userServers) => userServers
)

$publicServers.watch(console.log)
// $userServers.watch(console.log)
