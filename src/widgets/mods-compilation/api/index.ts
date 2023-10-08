import { axiosCurseForge, IMod, SearchModsRequest } from '@/shared/api/curse-forge'
import { CurseForgeApiUrls } from '@/shared/api/urls'

export function searchMods(request: SearchModsRequest) {
	return axiosCurseForge.post<{ data: IMod[] }>(CurseForgeApiUrls.searchMods(), request)
}
