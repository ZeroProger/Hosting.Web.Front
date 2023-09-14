import { IServer } from '@/shared/types/server.types'

export interface IInitialState {
	server: IServer | null
	// activePlayers: IPlayer[] | null
	// currentUsage: IServerCurrentUsageItem[] | null
	// console: IServerConsoleLine[] | null
	// properties: IServerProperty[] | null
	isLoading: boolean
}
