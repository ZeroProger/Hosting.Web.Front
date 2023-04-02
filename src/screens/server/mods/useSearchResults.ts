import { useRouter } from 'next/router';
import { useQuery } from 'react-query';



import { CurseForgeService } from '@/services/curseforge.service';



import { getModsSearchUrl, searchModsBaseRequest } from '@/config/curseforge-api.config';


export const useSearchResults = () => {
	const { query } = useRouter()
	const { data, isSuccess, isLoading, error } = useQuery(
		[getModsSearchUrl() + JSON.stringify(query), query],
		() =>
			CurseForgeService.getMods({
				...searchModsBaseRequest,
				...query,
			}),
		{
			select: ({ data }) => data.data,
		}
	)
	return { mods: data, isSuccess, isLoading, error }
}