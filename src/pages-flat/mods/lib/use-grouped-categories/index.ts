import { useQuery } from '@tanstack/react-query'

import { CategoryGroup, axiosCurseForge } from '@/shared/api/curse-forge'
import { CurseForgeApiUrls } from '@/shared/api/urls'

export function useGroupedCategories() {
	return useQuery({
		queryKey: [CurseForgeApiUrls.groupedCategories()],
		queryFn: () =>
			axiosCurseForge.get<{ data: CategoryGroup[] }>(CurseForgeApiUrls.groupedCategories()),
		select: ({ data }) => data.data,
	})
}
