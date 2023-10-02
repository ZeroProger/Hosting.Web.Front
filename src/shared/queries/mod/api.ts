import {
	GameVersionRequest,
	ICForgeGameVersion,
	ICategory,
	ICategoryGroup,
	axiosCurseForge,
} from '@/shared/api/curse-forge'
import { CurseForgeApiUrls } from '@/shared/api/urls'

export function getModsCategories(classId: string | null | undefined) {
	return axiosCurseForge.post<{ data: ICategory[] }>(CurseForgeApiUrls.categories(), {
		gameId: 432,
		classId,
		classesOnly: false,
	})
}

export function getGroupedCategories() {
	return axiosCurseForge.get<{ data: ICategoryGroup[] }>(CurseForgeApiUrls.groupedCategories())
}

export function getGameVersions(request?: GameVersionRequest) {
	return axiosCurseForge.post<{ data: ICForgeGameVersion[] }>(
		CurseForgeApiUrls.gameVersions(),
		request
	)
}
