import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { getModsCategories } from '@/config/api/curseforge-api.config'

import { CurseForgeService } from './../../../../services/curseforge.service'

export const useCategoriesByClassId = () => {
	const { query } = useRouter()

	const {
		data: categories,
		isLoading,
		error,
	} = useQuery(
		[getModsCategories() + JSON.stringify(query?.classId), query?.classId],
		() => CurseForgeService.getModsCategories(+query?.classId!),
		{ select: ({ data }) => data.data.sort((a, b) => a.name.localeCompare(b.name)) }
	)

	return { categories, isLoading, error }
}
