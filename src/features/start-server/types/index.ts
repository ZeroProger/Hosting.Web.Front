import { IServerPort } from '@/shared/types'

export interface IServerStartRequest {
	gameServerHash: string
}

export interface IServerStartResponse extends ResponseResult {
	gameServerHash: string
	serverIp: string
	serverPorts: IServerPort[]
}