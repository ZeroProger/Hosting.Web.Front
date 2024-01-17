export interface IServerPort {
	id: number
	creationDate: number
	updateDate: number
	portKind: string
	port: number
}

export interface IServer {
	gameServerName: string
	gameServerHash: string
	serverIp: string
	serverPorts: IServerPort[]
	gameKind: string
	isOnline: boolean
}

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
	ip: string
	software: string
	version: string
	otherInfo?: {
		isOnline?: boolean
		copyable?: boolean
		isSoftware?: boolean
		isVersion?: boolean
	}
}

export enum IServerConsoleLineType {
	Error = '/ERROR',
	Warning = '/WARN',
	Info = '/INFO',
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

export interface IFileNode {
	path: string
	type: 'file' | 'directory'
	size: number
	name?: string
	extension?: string
}
