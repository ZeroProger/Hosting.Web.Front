import { Mod, axiosCurseForge } from '@/shared/api/curse-forge'
import { CurseForgeApiUrls } from '@/shared/api/urls'

export async function getMod(modId: number) {
	return axiosCurseForge.get<{ data: Mod }>(CurseForgeApiUrls.mod(modId))
}

export async function getModDescription(modId: number) {
	return axiosCurseForge.get<{ data: string }>(CurseForgeApiUrls.modDescription(modId))
}
