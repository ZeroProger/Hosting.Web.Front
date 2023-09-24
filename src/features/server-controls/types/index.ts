import { IServerPort } from '@/shared/types'

export interface IServerControlRequest {
	gameServerHash: string
}

export interface IServerStartResponse extends ResponseResult {
	gameServerHash: string
	serverIp: string
	serverPorts: IServerPort[]
}

export interface IServerStopResponse extends ResponseResult {}