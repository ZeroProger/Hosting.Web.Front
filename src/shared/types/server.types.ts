export enum IServerPropertyType {
	Select,
	Boolean,
	Number,
	String,
}

export interface IServerProperty {
	name: string
	value: string
	label: string
	type: IServerPropertyType
}
