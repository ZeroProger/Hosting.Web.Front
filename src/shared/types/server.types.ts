export enum ServerPropertyType {
	Select,
	Boolean,
	Number,
	String,
}

export interface IServerPropertySelect {
	label: string
	value: string
}

export interface IServerProperty {
	name: string
	value: string
	label: string
	select?: IServerPropertySelect[]
	type: ServerPropertyType
}
