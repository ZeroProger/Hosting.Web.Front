export interface SearchModsRequest {
	gameId: number
	searchFilter?: string
	sortField?: number
	sortOrder?: string
	modLoaderType?: string
	gameVersion?: string
	slug?: string
	index?: number
	pageSize?: number
	gameVersionTypeId?: number
	categoryId?: number
	classId?: number
}

export interface ModloadersRequest {
	version?: string
	includeAll?: boolean
	modloaderType?: string
}

export interface MinecraftVersionRequest {
	sortDescending?: boolean
}

export interface CForgeSoftware {
	id: string
	name: string
	slug: string
}

export interface CForgeModloader {
	gameVersion: string
	modloaderVersion: string
	formattedVersion: string
	latest?: boolean
	recommended?: boolean
}

export interface CForgeModloaderVersion {
	gameVersion: string
	versions?: CForgeModloader[]
}

export interface CForgeMinecraftVersion {
	version: string
	gameVersionId: number
}

export interface Version {
	name: string
}

export interface Mod {
	id: number
	name: string
	slug: string
	summary: string
	downloadCount: number
	classId: number
	logo: Picture
	links: Link[]
	categories: Category[]
	authors: Author[]
	screenshots: Picture[]
	dateCreated: string
	dateModified: string
	// allowModDistribution: boolean
}

export interface ModDescription {
	data: string
}

export interface CategoryGroup {
	classId: number
	className: string
	categories: Category[]
}

export interface Category {
	id: number
	name: string
	slug: string
	classId?: number
	parentCategoryId?: number
	isClass?: boolean
}

export interface Link {
	websiteUrl: string
}

export interface Picture {
	id: number
	title: string
	description: string
	url: string
	thumbnailUrl: string
}

export interface Author {
	id: number
	name: string
	url: string
}

export interface SearchModsQuery extends Omit<SearchModsRequest, 'gameId'> {}
