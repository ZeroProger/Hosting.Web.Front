import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModFullDescriptionUrl } from '@/config/curseforge-api.config'

export const useModDescription = (modId: number) => {
	const queryResult = useQuery(
		[getModFullDescriptionUrl(modId), modId],
		() => CurseForgeService.getModFullDescription(modId),
		{
			select: ({ data }) => data.data,
		}
	)

	return queryResult
}
