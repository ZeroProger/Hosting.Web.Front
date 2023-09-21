import { createEffect, createStore } from 'effector'

import { startServer, stopServer } from '../api'
import { Server } from '../types'
import { ServerRequest, ServerStartRequest, ServerStopRequest } from '../types/requests'

export interface ServerStore {
	server: Server | null | undefined
	userServers: Server[] | null | undefined
	publicServers: Server[] | null | undefined
	isLoading: boolean
	error: Error | null
	// activePlayers: IPlayer[] | null
	// currentUsage: IServerCurrentUsageItem[] | null
	// console: IServerConsoleLine[] | null
	// properties: IServerProperty[] | null
}

const servers: Server[] = [
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

export const getServerFx = createEffect<ServerRequest, Server | undefined>(
	async ({ gameServerHash }) => servers.find((server) => (server.gameServerHash = gameServerHash))
)

export const getUserServersFx = createEffect(async () => servers)

export const getPublicServersFx = createEffect(async () => servers)

export const resetServerFx = createEffect(async () => null)

export const startFx = createEffect<ServerStartRequest, void>(
	async ({ gameServerHash }) => await startServer({ gameServerHash })
)

export const stopFx = createEffect<ServerStopRequest, void>(
	async ({ gameServerHash }) => await stopServer({ gameServerHash })
)

export const $server = createStore<ServerStore>({
	server: null,
	isLoading: false,
	publicServers: null,
	userServers: null,
	error: null,
})
	.on(getServerFx.pending, (state) => ({ ...state, isLoading: true }))
	.on(getServerFx.doneData, (state, server) => ({ ...state, server, isLoading: false }))
	.on(getServerFx.failData, (state, error) => ({ ...state, isLoading: false, error }))
	.on(getUserServersFx.pending, (state) => ({ ...state, isLoading: true }))
	.on(getUserServersFx.doneData, (state, userServers) => ({
		...state,
		userServers,
		isLoading: false,
	}))
	.on(getUserServersFx.failData, (state, error) => ({ ...state, isLoading: false, error }))
	.on(getPublicServersFx.pending, (state) => ({ ...state, isLoading: true }))
	.on(getPublicServersFx.doneData, (state, publicServers) => ({
		...state,
		publicServers,
		isLoading: false,
	}))
	.on(getPublicServersFx.failData, (state, error) => ({ ...state, isLoading: false, error }))
	.on(resetServerFx.pending, (state) => ({ ...state, isLoading: true }))
	.on(resetServerFx.done, (state) => ({
		...state,
		server: null,
		isLoading: false,
	}))
	.on(resetServerFx.failData, (state, error) => ({ ...state, isLoading: false, error }))
	.on(startFx.pending, (state) => ({ ...state, isLoading: true }))
	.on(startFx.done, (state) => ({
		...state,
		isLoading: false,
	}))
	.on(startFx.failData, (state, error) => ({ ...state, isLoading: false, error }))
	.on(stopFx.pending, (state) => ({ ...state, isLoading: true }))
	.on(stopFx.done, (state) => ({
		...state,
		isLoading: false,
	}))
	.on(stopFx.failData, (state, error) => ({ ...state, isLoading: false, error }))
