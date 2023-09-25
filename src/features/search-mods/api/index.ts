import { Mod, SearchModsRequest, axiosCurseForge } from '@/shared/api/curse-forge'
import { CurseForgeApiUrls } from '@/shared/api/urls'

export function searchMods(request: SearchModsRequest) {
	return axiosCurseForge.post<{ data: Mod[] }>(CurseForgeApiUrls.searchMods(), request)
}
