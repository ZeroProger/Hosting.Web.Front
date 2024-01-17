import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { stopServer } from '../api'

export function useStopServerMutation() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: stopServer,
		onSettled: async (response, error) => {
			if (response?.success) {
				await queryClient.invalidateQueries([ReactQueryKeys.server])
			}
		},
	})
}
