import { create } from 'zustand'

import { Server } from '../types'
import { ServerRequest, ServerStartRequest, ServerStopRequest } from '../types/requests'

import { startServer, stopServer } from './actions'

export interface ServerState {
	server: Server | null
	userServers: Server[] | null
	publicServers: Server[] | null
	isLoading: boolean
	// activePlayers: IPlayer[] | null
	// currentUsage: IServerCurrentUsageItem[] | null
	// console: IServerConsoleLine[] | null
	// properties: IServerProperty[] | null
}

export interface ServerAction {
	getServer: (request: ServerRequest) => void
	getUserServers: () => void
	getPublicServers: () => void
	resetServer: () => void
	start: (request: ServerStartRequest) => void
	stop: (request: ServerStopRequest) => void
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

export const useServer = create<ServerState & ServerAction>((set) => ({
	server: null,
	userServers: null,
	publicServers: null,
	isLoading: false,
	async getServer({ gameServerHash }) {
		set(() => ({ isLoading: true }))
		try {
			const server = servers.find((server) => server.gameServerHash === gameServerHash)
			
			set(() => ({ server: server ? server : null }))
		} catch (error) {
			set(() => ({ server: null }))
		} finally {
			set(() => ({ isLoading: false }))
		}
	},
	async getUserServers() {
		set(() => ({ isLoading: true }))
		try {
			set(() => ({ userServers: servers }))
		} catch (error) {
			set(() => ({ server: null }))
		} finally {
			set(() => ({ isLoading: false }))
		}
	},
	async getPublicServers() {
		set(() => ({ isLoading: true }))
		try {
			set(() => ({ userServers: servers }))
		} catch (error) {
			set(() => ({ server: null }))
		} finally {
			set(() => ({ isLoading: false }))
		}
	},
	async resetServer() {
		set(() => ({ server: null }))
	},
	async start({ gameServerHash }) {
		set(() => ({ isLoading: true }))

		await startServer({ gameServerHash })

		set(() => ({ isLoading: false }))
	},
	async stop({ gameServerHash }) {
		set(() => ({ isLoading: true }))

		await stopServer({ gameServerHash })

		set(() => ({ isLoading: false }))
	},
}))
