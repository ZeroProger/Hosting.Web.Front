export interface IServerPortItem {
	portKind: string
	port: string
}

export interface IServerCreateRequest {
	name: string
	version: string
	tariffId: string
	rentTime: string
	slotsCount: number
}

export interface IServerCreateResponse {
	gameServerHash: string
	success: boolean
	error: string
}

export interface IServerStartContainerRequest {
	gameServerId: string
}

export interface IServerStartContainerResponse {
	gameServerId: string
	ip: string
	ports: IServerPortItem[]
	success: boolean
	error: string
}

export interface IServerStopContainerRequest {
	gameServerId: string
}

export interface IServerStopContainerResponse {
	success: boolean
	error: string
}

export interface IServerRemoveRequest {
	gameServerId: string
}

export interface IServerRemoveResponse {
	success: boolean
	error: string
}

export interface IServerUpdateRequest {
	serverHash: string
	isPublic: boolean
}

export interface IServerUpdateResponse {
	success: boolean
	error: string
}

export interface IServerGetListRequest {
	kind: string
	isPublic: boolean
}

export interface IServerGetListResponse {}

export interface IServerStartRequest {
	gameServerId: string
}

export interface IServerStartResponse {
	success: boolean
	error: string
}

export interface IServerStopRequest {
	gameServerId: string
}

export interface IServerStopResponse {
	success: boolean
	error: string
}
