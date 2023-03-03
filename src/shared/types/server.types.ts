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
	time: string
	type: ServerConsoleLineType
}

export interface IServerUsageItem {
	label: string
	value: number
	maxValue: number
	color: string
	valueUnit?: string
	isPercent?: boolean
}
