import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModsSearchUrl, searchModsBaseRequest } from '@/config/curseforge-api.config'

export const useSearchResults = () => {
	const router = useRouter()
	const { data, isSuccess } = useQuery(
		[getModsSearchUrl() + router.query, router.query],
		() =>
			CurseForgeService.getMods({
				...searchModsBaseRequest,
				...router.query,
				searchFilter: router.query?.search as string,
			}),
		{
			select: ({ data }) => data.data,
		}
	)
	return { data, isSuccess }
}
