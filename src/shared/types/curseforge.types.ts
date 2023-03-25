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

export interface ICForgeModloader {
	gameVersion: string
	modloaderVersion: string
	formattedVersion: string
	latest?: boolean
	recommended?: boolean
}

export interface ICForgeModloaderVersion {
	gameVersion: string
	versions?: ICForgeModloader[]
}

export interface ICForgeMinecraftVersion {
	version: string
	gameVersionId: number
}

export interface IVersion {
	name: string
}

export interface IMod {
	id: number
	name: string
	slug: string
	summary: string
	downloadCount: number
	classId: number
	logo: IPicture
	links: ILink[]
	categories: ICategory[]
	authors: IAuthor[]
	screenshots: IPicture[]
	dateCreated: string
	dateModified: string
	// allowModDistribution: boolean
}

export interface IModDescription {
	data: string
}

export interface IClassOfCategories {
	className: string
	categories: ICategory[]
}

export interface ICategory {
	id: number
	name: string
	slug: string
	classId?: number
	parentCategoryId?: number
	isClass?: boolean
}

export interface ILink {
	websiteUrl: string
}

export interface IPicture {
	id: number
	title: string
	description: string
	url: string
	thumbnailUrl: string
}

export interface IAuthor {
	id: number
	name: string
	url: string
}
