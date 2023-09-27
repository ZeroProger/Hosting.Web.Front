import { IServerPort } from './requests/server-requests.types'

export enum ServerPropertyType {
	Select,
	Boolean,
	Number,
	String,
}

export interface IServerPropertyOption {
	label: string
	value: string
}

export interface IServerPropertySelect {
	options: IServerPropertyOption[]
}

export interface IServerProperty {
	name: string
	value: string
	label: string
	select?: IServerPropertySelect
	type: ServerPropertyType
}

export interface IServerMainInfo {
	label: string
	value: string
	otherInfo?: {
		isOnline?: boolean
		copyable?: boolean
		isSoftware?: boolean
		isVersion?: boolean
		playersImages?: string[]
	}
}

export enum ServerConsoleLineType {
	Error = 'ERROR',
	Warning = 'WARNING',
	Info = 'INFO',
}

export interface IServerConsoleLine {
	id: string
	message: string
	fullMessage?: string
	time: string
	type: ServerConsoleLineType
}

export interface IServerCurrentUsageItem {
	label: string
	value: number
	maxValue: number
	color: string
	valueUnit?: string
	isPercent?: boolean
}

export interface IServer {
	gameServerName: string
	gameServerHash: string
	serverIp: string
	serverPorts: IServerPort[]
	gameKind: string
	isOnline: boolean
	//dynamicIp: string
	//software: ICForgeSoftware
	//version: IVersion
	//#TODO: Всё что ниже убрать, должно отдельно запрашиваться по надобности
	// кешируем в react query что-то???
	// activePlayers: IPlayer[]
	// mainInfo: IServerMainInfo[]
	// console: IServerConsoleLine[]
	// usage: IServerUsageItem[]
	// settings: IServerProperty[]
}

export interface IFileNode {
	path: string
	name: string
	type: 'file' | 'directory'
	changeable?: boolean
	size: number
	children?: IFileNode[]
	extension?: string
}
