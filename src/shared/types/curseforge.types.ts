export enum CForgeSoftwareType {
	Vanila,
	Forge,
	Fabric,
}

export interface ICForgeSoftware {
	id: string
	name: string
	slug: string
}

export interface ICForgeModloader extends Omit<ICForgeVersion, 'versions'> {
	latest?: boolean
	recommended?: boolean
}

export interface ICForgeVersion {
	id: number
	label: string
	slug: string
	versions?: ICForgeModloader[]
}
