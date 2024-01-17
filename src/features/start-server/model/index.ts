import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { startServer } from '../api'

export function useStartServerMutation() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: startServer,
		onSettled: async (response, error) => {
			if (response?.success) {
				await queryClient.invalidateQueries([ReactQueryKeys.server])
			}
		},
	})
}
