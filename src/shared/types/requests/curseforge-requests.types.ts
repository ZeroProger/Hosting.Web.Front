export interface ISearchModsRequest {
	gameId: number
	searchFilter?: string
	sortField?: number
	sortOrder?: string
	modLoaderType?: number
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
