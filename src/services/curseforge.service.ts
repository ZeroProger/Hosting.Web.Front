import { axiosCurseForge } from './../api/interceptors'
import { getMinecraftVersionsUrl, getModloadersUrl } from './../config/curseforge-api.config'
import { ICForgeVersion } from './../shared/types/curseforge.types'

export const CurseForgeService = {
	async getModloaders(version?: string, includeAll?: boolean) {
		return axiosCurseForge.get<{ data: ICForgeVersion[] }>(getModloadersUrl(), {
			params: { version, includeAll },
		})
	},

	// async getMinecraftVersion() {
	// 	return axiosCurseForge.get<{ data: string }>(getMinecraftVersionUrl())
	// },

	async getMinecraftVersions() {
		return axiosCurseForge.get<{ data: ICForgeVersion[] }>(getMinecraftVersionsUrl())
	},
}
