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

export interface IServerCurrentUsageRequest {
	gameServerHash: string
}

export interface IServerCurrentUsageResponse {}

export interface IServerConsoleRequest {
	gameServerHash: string
}

export interface IServerConsoleResponse {}

export interface IServerSendCommandToConsoleRequest {
	message: string
}

export interface IServerSendCommandToConsoleResponse {}

export interface IServerMainInfoRequest {
	gameServerHash: string | null | undefined
	postSystem: 'query'
}

//#TODO: fix when backend api route fixing
export interface IServerMainInfoResponse extends ResponseResult {
	onlinePlayers: string[]
	properties: {
		plugins: string
		hostname: string
		hostip: string
		numplayers: string
		version: string
		hostport: string
		map: string
		game_id: string
		maxplayers: string
		gametype: string
	}
}

export interface IServerPropertiesRequest {
	gameServerHash: string
}

export interface IServerPropertiesResponse {}
