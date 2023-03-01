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
