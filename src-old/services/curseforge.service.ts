import {
	ICForgeMinecraftVersion,
	ICForgeModloaderVersion,
	ICategory,
	ICategoryGroup,
	IMod,
} from '@/shared/types/curseforge.types'
import {
	IGetMinecraftVersionRequest,
	IGetModloadersRequest,
	ISearchModsRequest,
} from '@/shared/types/requests/curseforge-requests.types'

import {
	getGroupedCategories,
	getMinecraftVersionsUrl,
	getModByIdUrl,
	getModFullDescriptionUrl,
	getModloadersUrl,
	getModsCategories,
	getModsSearchUrl,
} from '@/config/api/curseforge-api.config'

import { axiosCurseForge } from '@/api/interceptors'

export const CurseForgeService = {
	async getModloaders(dto: IGetModloadersRequest) {
		return axiosCurseForge.post<{ data: ICForgeModloaderVersion[] }>(getModloadersUrl(), {
			data: { dto },
		})
	},

	// async getMinecraftVersion() {
	// 	return axiosCurseForge.get<{ data: string }>(getMinecraftVersionUrl())
	// },

	async getMinecraftVersions(dto?: IGetMinecraftVersionRequest) {
		return await axiosCurseForge.post<{ data: ICForgeMinecraftVersion[] }>(
			getMinecraftVersionsUrl(),
			dto
		)
	},

	async getSoftwaresVersions(software?: string) {
		if (software === 'vanila') {
			return this.getMinecraftVersions()
		}
		return this.getModloaders({ modloaderType: software })
	},

	async getMods(requestParams: ISearchModsRequest) {
		return axiosCurseForge.post<{ data: IMod[] }>(getModsSearchUrl(), requestParams)
	},

	async getModById(id: number) {
		return axiosCurseForge.get<{ data: IMod }>(getModByIdUrl(id))
	},

	async getModFullDescription(id: number) {
		return axiosCurseForge.get<{ data: string }>(getModFullDescriptionUrl(id))
	},

	async getModsCategories(classId: number) {
		return axiosCurseForge.post<{ data: ICategory[] }>(getModsCategories(), {
			gameId: 432,
			classId,
			classesOnly: false,
		})
	},

	async getGroupedCategories() {
		return axiosCurseForge.get<{ data: ICategoryGroup[] }>(getGroupedCategories())
	},
}