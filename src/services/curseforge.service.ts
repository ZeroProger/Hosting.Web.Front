import { ICForgeMinecraftVersion, ICForgeModloader } from '@/shared/types/curseforge.types'

import { axiosCurseForge } from './../api/interceptors'
import { getMinecraftVersionsUrl, getModloadersUrl } from './../config/curseforge-api.config'

export const CurseForgeService = {
	async getModloaders(version?: string, includeAll?: boolean) {
		return axiosCurseForge.get<ICForgeModloader[]>(getModloadersUrl(), {
			params: { version, includeAll },
		})
	},

	async getMinecraftVersions() {
		return axiosCurseForge.get<ICForgeMinecraftVersion[]>(getMinecraftVersionsUrl())
	},
}
