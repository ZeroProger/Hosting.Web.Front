import { useQuery } from 'react-query'

import { CurseForgeService } from '@/services/curseforge.service'

export const useMinecraftVersions = () => {
	const {
		data: versions,
		isLoading: isVLoading,
		error,
	} = useQuery('versions', () => CurseForgeService.getMinecraftVersions({ sortDescending: true }), {
		select: ({ data }) => data.data,
	})
	return { versions, isVLoading, error }
}
