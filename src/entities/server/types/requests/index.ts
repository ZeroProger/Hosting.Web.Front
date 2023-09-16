import { Server } from '..'

// import { IGameTariffs } from '../tariff.types'

export interface ServerPort {
	id: number
	creationDate: number
	updateDate: number
	portKind: string
	port: number
}

export interface ServerCreateRequest {
	gameId: number
	name: string
	locationId: number
	tariffId: number
	period: number
	isTestPeriod?: boolean
	promoCode?: string
	slots: number
}

export interface ServerCreateResponse extends ResponseResult {
	gameServerHash: string
}

// export interface ITariffsResponse {
// 	games: IGameTariffs[]
// }

export interface ServerStartRequest {
	gameServerHash: string
}

export interface ServerStartResponse extends ResponseResult {
	gameServerHash: string
	serverIp: string
	serverPorts: ServerPort[]
}

export interface ServerStopRequest {
	gameServerHash: string
}

export interface ServerStopResponse extends ResponseResult {}

export interface ServerRemoveRequest {
	gameServerHash: string
}

export interface ServerRemoveResponse extends ResponseResult {}

export interface ServerUpdateRequest {
	gameServerHash: string
	isPublic: boolean
}

export interface ServerUpdateResponse extends ResponseResult {}

export interface ServerListRequest {
	kind: string
	isPublic: boolean
}

export interface ServerListResponse {
	servers: Server[]
}

export interface ServerRequest {
	gameServerHash: string
}

export interface ServerActivePlayersRequest {
	gameServerHash: string
}

export interface ServerActivePlayersResponse {}

export interface ServerCurrentUsageRequest {
	gameServerHash: string
}

export interface ServerCurrentUsageResponse {}

export interface ServerConsoleRequest {
	gameServerHash: string
}

export interface ServerConsoleResponse {}

export interface ServerMainInfoRequest {
	gameServerHash: string
}

export interface ServerMainInfoResponse {}

export interface ServerPropertiesRequest {
	gameServerHash: string
}

export interface ServerPropertiesResponse {}
