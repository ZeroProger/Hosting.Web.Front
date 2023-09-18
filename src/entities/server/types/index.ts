import { ServerPort } from './requests'

export enum ServerPropertyType {
	Select,
	Boolean,
	Number,
	String,
}

export interface ServerPropertyOption {
	label: string
	value: string
}

export interface ServerPropertySelect {
	options: ServerPropertyOption[]
}

export interface ServerProperty {
	name: string
	value: string
	label: string
	select?: ServerPropertySelect
	type: ServerPropertyType
}

export interface ServerMainInfo {
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

export interface ServerConsoleLine {
	id: string
	message: string
	fullMessage?: string
	time: string
	type: ServerConsoleLineType
}

export interface ServerCurrentUsageItem {
	label: string
	value: number
	maxValue: number
	color: string
	valueUnit?: string
	isPercent?: boolean
}

export interface Server {
	gameServerName: string
	gameServerHash: string
	serverIp: string
	serverPorts: ServerPort[]
	gameKind: string
	isOnline: boolean
	//dynamicIp: string
	//software: ICForgeSoftware
	//version: IVersion
	//#TODO: Всё что ниже убрать, должно отдельно запрашиваться по надобности
	// кешируем в react query что-то???
	// activePlayers: IPlayer[]
	// mainInfo: ServerMainInfo[]
	// console: ServerConsoleLine[]
	// usage: ServerUsageItem[]
	// settings: ServerProperty[]
}

export interface FileNode {
	path: string
	name: string
	type: string
	changeable?: boolean
	size: number
	children?: FileNode[]
	extension?: string
}
