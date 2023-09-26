import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { toastError } from '@/shared/lib/react-toastify'

import { startServer } from '../api'

export function useStartServerMutation() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: startServer,
		onSettled: async (response, error) => {
			if (error === undefined || error === null) {
				toastError(error)
				return
			}

			await queryClient.invalidateQueries([ReactQueryKeys.server])
		},
	})
}
