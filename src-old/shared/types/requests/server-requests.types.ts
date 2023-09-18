import { IServer } from '../server.types'
import { IGameTariffs } from '../tariff.types'

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

export interface ITariffsResponse {
	games: IGameTariffs[]
}

export interface IServerStartContainerRequest {
	gameServerHash: string
}

export interface IServerStartContainerResponse extends ResponseResult {
	gameServerHash: string
	serverIp: string
	serverPorts: IServerPort[]
}

export interface IServerStopContainerRequest {
	gameServerHash: string
}

export interface IServerStopContainerResponse extends ResponseResult {}

export interface IServerRemoveRequest {
	gameServerHash: string
}

export interface IServerRemoveResponse extends ResponseResult {}

export interface IServerUpdateRequest {
	gameServerHash: string
	isPublic: boolean
}

export interface IServerUpdateResponse extends ResponseResult {}

export interface IServerGetListRequest {
	kind: string
	isPublic: boolean
}

export interface IServerGetListResponse {
	servers: IServer[]
}

export interface IGetServerRequest {
	gameServerHash: string
}

export interface IServerStartRequest {
	gameServerHash: string
}

export interface IServerStartResponse extends ResponseResult {}

export interface IServerStopRequest {
	gameServerHash: string
}

export interface IServerStopResponse extends ResponseResult {}

export interface IServerGetActivePlayersRequest {
	gameServerHash: string
}

export interface IServerGetActivePlayersResponse {}

export interface IServerGetServerCurrentUsageRequest {
	gameServerHash: string
}

export interface IServerGetServerCurrentUsageResponse {}

export interface IServerGetServerConsoleRequest {
	gameServerHash: string
}

export interface IServerGetServerConsoleResponse {}

export interface IServerGetServerMainInfoRequest {
	gameServerHash: string
}

export interface IServerGetServerMainInfoResponse {}

export interface IServerGetServerPropertiesRequest {
	gameServerHash: string
}

export interface IServerGetServerPropertiesResponse {}
