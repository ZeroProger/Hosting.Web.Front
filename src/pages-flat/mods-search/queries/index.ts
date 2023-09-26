import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { searchModsBaseRequest } from '@/shared/config/mods'
import { ReactQueryKeys } from '@/shared/lib/react-query'

import { searchMods } from '../api'

export const useSearchMods = () => {
	const searchParams = useSearchParams()

	const paramsObj = Object.fromEntries(searchParams.entries())

	return useQuery({
		queryKey: [ReactQueryKeys.searchMods, JSON.stringify(paramsObj)],
		queryFn: () => searchMods({ ...searchModsBaseRequest, ...paramsObj }),
		select: ({ data }) => data.data,
	})
}
