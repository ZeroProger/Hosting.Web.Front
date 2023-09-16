import { create } from 'zustand'

import { Server } from '../types'
import { ServerRequest, ServerStartRequest, ServerStopRequest } from '../types/requests'

import { getServer, startServer, stopServer } from './actions'

export interface ServerState {
	server: Server | null
	isLoading: boolean
	// activePlayers: IPlayer[] | null
	// currentUsage: IServerCurrentUsageItem[] | null
	// console: IServerConsoleLine[] | null
	// properties: IServerProperty[] | null
}

export interface ServerAction {
	getServer: (request: ServerRequest) => void
	startServer: (request: ServerStartRequest) => void
	stopServer: (request: ServerStopRequest) => void
}

export const useServer = create<ServerState & ServerAction>((set) => ({
	server: null,
	isLoading: false,
	async getServer({ gameServerHash }) {
		set(() => ({ isLoading: true }))
		try {
			const server = await getServer({ gameServerHash })

			set(() => ({ server }))
		} catch (error) {
			set(() => ({ server: null }))
		} finally {
			set(() => ({ isLoading: false }))
		}
	},
	async startServer({ gameServerHash }) {
		set(() => ({ isLoading: true }))

		await startServer({ gameServerHash })

		set(() => ({ isLoading: false }))
	},
	async stopServer({ gameServerHash }) {
		set(() => ({ isLoading: true }))

		await stopServer({ gameServerHash })

		set(() => ({ isLoading: false }))
	},
}))
