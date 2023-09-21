import { IServer } from '..'

// import { IGameTariffs } from '../tariff.types'

export interface IServerPort {
	id: number
	creationDate: number
	updateDate: number
	portKind: string
	port: number
}

export interface IServerCreateRequest {
	gameId: number
	name: string
	locationId: number
	tariffId: number
	period: number
	isTestPeriod?: boolean
	promoCode?: string
	slots: number
}

export interface IServerCreateResponse extends ResponseResult {
	gameServerHash: string
}

// export interface ITariffsResponse {
// 	games: IGameTariffs[]
// }

export interface IServerStartRequest {
	gameServerHash: string
}

export interface IServerStartResponse extends ResponseResult {
	gameServerHash: string
	serverIp: string
	serverPorts: IServerPort[]
}

export interface IServerStopRequest {
	gameServerHash: string
}

export interface IServerStopResponse extends ResponseResult {}

export interface IServerRemoveRequest {
	gameServerHash: string
}

export interface IServerRemoveResponse extends ResponseResult {}

export interface IServerUpdateRequest {
	gameServerHash: string
	isPublic: boolean
}

export interface IServerUpdateResponse extends ResponseResult {}

export interface IServerListRequest {
	kind: string
	isPublic: boolean
}

export interface IServerListResponse {
	servers: IServer[]
}

export interface IServerRequest {
	gameServerHash: string
}

export interface IServerActivePlayersRequest {
	gameServerHash: string
}

export interface IServerActivePlayersResponse {}

export interface IServerCurrentUsageRequest {
	gameServerHash: string
}

export interface IServerCurrentUsageResponse {}

export interface IServerConsoleRequest {
	gameServerHash: string
}

export interface IServerConsoleResponse {}

export interface IServerMainInfoRequest {
	gameServerHash: string
}

export interface IServerMainInfoResponse {}

export interface IServerPropertiesRequest {
	gameServerHash: string
}

export interface IServerPropertiesResponse {}
