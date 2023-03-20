import {
	IGetMinecraftVersionRequest,
	IGetModloadersRequest,
	ISearchModsRequest,
} from '@/shared/types/requests/curseforge-requests.types'

import { axiosCurseForge } from './../api/interceptors'
import {
	getMinecraftVersionsUrl,
	getModByIdUrl,
	getModloadersUrl,
	getModsSearchUrl,
} from './../config/curseforge-api.config'
import {
	ICForgeMinecraftVersion,
	ICForgeModloaderVersion,
	IMod,
} from './../shared/types/curseforge.types'

export const CurseForgeService = {
	async getModloaders(dto: IGetModloadersRequest) {
		return axiosCurseForge.get<{ data: ICForgeModloaderVersion[] }>(getModloadersUrl(), {
			data: { dto },
		})
	},

	// async getMinecraftVersion() {
	// 	return axiosCurseForge.get<{ data: string }>(getMinecraftVersionUrl())
	// },

	async getMinecraftVersions(dto?: IGetMinecraftVersionRequest) {
		return await axiosCurseForge.get<{ data: ICForgeMinecraftVersion[] }>(
			getMinecraftVersionsUrl(),
			{ data: { dto } }
		)
	},

	async getSoftwaresVersions(software?: string) {
		console.log(software)
		if (software === 'vanila') {
			return this.getMinecraftVersions()
		}
		return this.getModloaders({ modloaderType: software })
	},

	async getMods(requestParams: ISearchModsRequest) {
		return axiosCurseForge.get<{ data: IMod[] }>(getModsSearchUrl(), {
			data: requestParams,
		})
	},

	async getModById(id: number) {
		return axiosCurseForge.get<{ data: IMod }>(getModByIdUrl(id))
	},
}
