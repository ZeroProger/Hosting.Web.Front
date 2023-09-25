import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getMod, getModDescription } from '../api'

export const useModData = (modId: number) => {
	return useQuery({
		queryKey: [ReactQueryKeys.mod, modId],
		queryFn: () => getMod(modId),
		select: ({ data }) => data.data,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	})
}

export const useModDescription = (modId: number) => {
	return useQuery({
		queryKey: [ReactQueryKeys.modDescription, modId],
		queryFn: () => getModDescription(modId),
		select: ({ data }) => data.data,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	})
}
