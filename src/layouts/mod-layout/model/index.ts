import { useQuery } from '@tanstack/react-query'

import { CurseForgeApiUrls } from '@/shared/api/urls'

import { getMod, getModDescription } from '../api'

export const useModData = (modId: number) => {
	return useQuery({
		queryKey: [CurseForgeApiUrls.mod(modId), modId],
		queryFn: () => getMod(modId),
		select: ({ data }) => data.data,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	})
}

export const useModDescription = (modId: number) => {
	return useQuery({
		queryKey: [CurseForgeApiUrls.modDescription(modId), modId],
		queryFn: () => getModDescription(modId),
		select: ({ data }) => data.data,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	})
}
