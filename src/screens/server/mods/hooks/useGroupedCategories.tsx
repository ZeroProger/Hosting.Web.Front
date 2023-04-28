import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

import { getGroupedCategories } from '@/config/api/curseforge-api.config'

export const useGroupedCategories = () => {
	const queryResult = useQuery(
		getGroupedCategories(),
		() => CurseForgeService.getGroupedCategories(),
		{
			select: ({ data }) => data.data,
		}
	)
	return queryResult
}
