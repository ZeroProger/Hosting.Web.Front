import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { toastError } from '@/shared/lib/react-toastify'

import { getServerSettings, saveServerSettings } from '../api'

export function useFetchServerSettings(serverHash: string | null | undefined) {
	return useQuery({
		queryKey: [ReactQueryKeys.serverSettings, serverHash],
		queryFn: () => getServerSettings(serverHash),
		enabled: !!serverHash,
	})
}

export function useSaveServerSettingsMutation() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: saveServerSettings,
		onSettled: async (data, error) => {
			if (error === undefined || error === null) {
				toastError(error)
				return
			}

			await queryClient.invalidateQueries([ReactQueryKeys.serverSettings])
		},
	})
}
