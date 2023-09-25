import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getGroupedCategories } from '../../api'

export function useGroupedCategories() {
	return useQuery({
		queryKey: [ReactQueryKeys.modsGroupedCategories],
		queryFn: () => getGroupedCategories(),
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		select: ({ data }) => data.data,
	})
}
