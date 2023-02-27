export enum CForgeModLoaderType {
	Vanila = 'vanila',
	Forge = 'forge',
	Fabric = 'fabric',
}

export interface ICForgeSoftware {
	id: string
	name: string
	slug: string
}

export interface ICForgeVersion {
	id: number
	name: string
	gameVersion?: string
	versionString?: string
	latest?: boolean
	recommended?: boolean
	type?: number
}
