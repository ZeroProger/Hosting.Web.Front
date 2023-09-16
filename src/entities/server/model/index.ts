import { create } from 'zustand';



import { Server } from '../types';
import { ServerRequest, ServerStartRequest, ServerStopRequest } from '../types/requests';



import { getServer, startServer, stopServer } from './actions';


export interface ServerState {
	server: Server | null
	isLoading: boolean
	// activePlayers: IPlayer[] | null
	// currentUsage: IServerCurrentUsageItem[] | null
	// console: IServerConsoleLine[] | null
	// properties: IServerProperty[] | null
}

export interface ServerAction {
	get: (request: ServerRequest) => void
	start: (request: ServerStartRequest) => void
	stop: (request: ServerStopRequest) => void
}

export const useServer = create<ServerState & ServerAction>((set) => ({
	server: null,
	isLoading: false,
	async get({ gameServerHash }) {
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