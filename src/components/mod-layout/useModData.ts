import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModByIdUrl } from '@/config/api/curseforge-api.config'

export const useModData = (modId: number) => {
	const queryResult = useQuery(
		[getModByIdUrl(modId), modId],
		() => CurseForgeService.getModById(modId),
		{
			select: ({ data }) => data.data,
		}
	)

	return queryResult
}
