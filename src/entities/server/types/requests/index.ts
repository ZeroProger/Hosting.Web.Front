import { IServer } from '@/shared/types'

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
	isPublic?: boolean
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
