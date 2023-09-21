import { IServerPort } from './requests'

export enum IServerPropertyType {
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
	type: IServerPropertyType
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

export enum IServerConsoleLineType {
	Error = 'ERROR',
	Warning = 'WARNING',
	Info = 'INFO',
}

export interface IServerConsoleLine {
	id: string
	message: string
	fullMessage?: string
	time: string
	type: IServerConsoleLineType
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
	// activePlayers: Player[]
	//dynamicIp: string
	//software: ICForgeSoftware
	//version: IVersion
	//#TODO: Всё что ниже убрать, должно отдельно запрашиваться по надобности
	// кешируем в react query что-то???
	// mainInfo: ServerMainInfo[]
	// console: ServerConsoleLine[]
	// usage: ServerUsageItem[]
	// settings: ServerProperty[]
}

export interface IFileNode {
	path: string
	name: string
	type: string
	changeable?: boolean
	size: number
	children?: IFileNode[]
	extension?: string
}
