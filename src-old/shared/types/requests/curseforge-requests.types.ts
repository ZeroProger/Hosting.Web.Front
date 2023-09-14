export interface ISearchModsRequest {
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

export interface IGetModloadersRequest {
	version?: string
	includeAll?: boolean
	modloaderType?: string
}

export interface IGetMinecraftVersionRequest {
	sortDescending?: boolean
}
